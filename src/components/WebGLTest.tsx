"use client";

import React, { useEffect, useRef } from "react";

interface WebGLAnimationProps {
  // Parameters for your animation
  speed?: number;
  color?: [number, number, number];
  size?: number;
}

const WebGLAnimation: React.FC<WebGLAnimationProps> = ({
  speed = 1.0,
  color = [1.0, 0.0, 0.0],
  size = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const animationFrameRef = useRef<number>();
  const programRef = useRef<WebGLProgram | null>(null);

  // Shader sources
  const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    uniform float uTime;
    uniform float uSize;

    void main() {
      // Add some movement based on time
      float x = aVertexPosition.x + sin(uTime) * 0.2;
      float y = aVertexPosition.y + cos(uTime) * 0.2;
      gl_Position = vec4(x * uSize, y * uSize, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform vec3 uColor;

    void main() {
      gl_FragColor = vec4(uColor, 0.5); // 0.5 alpha for semi-transparency
    }
  `;

  const initShaderProgram = (gl: WebGLRenderingContext) => {
    // Create shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const shaderProgram = gl.createProgram()!;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    return shaderProgram;
  };

  const initBuffers = (gl: WebGLRenderingContext) => {
    // Create a square
    const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return positionBuffer;
  };

  const drawScene = (
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    positionBuffer: WebGLBuffer,
    time: number
  ) => {
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Set up attributes and uniforms
    const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
    const timeLocation = gl.getUniformLocation(program, "uTime");
    const colorLocation = gl.getUniformLocation(program, "uColor");
    const sizeLocation = gl.getUniformLocation(program, "uSize");

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);

    gl.uniform1f(timeLocation, time * speed);
    gl.uniform3fv(colorLocation, color);
    gl.uniform1f(sizeLocation, size);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL context
    const gl = canvas.getContext("webgl", {
      premultipliedAlpha: false,
      alpha: true,
    });
    if (!gl) return;
    glRef.current = gl;

    // Initialize shaders and buffers
    const program = initShaderProgram(gl);
    const positionBuffer = initBuffers(gl);
    programRef.current = program;

    // Set up animation loop
    let startTime = Date.now();
    const render = () => {
      if (!gl || !program || !positionBuffer) return;

      // Update canvas size if needed
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }

      const currentTime = (Date.now() - startTime) / 1000;
      gl.useProgram(program);
      drawScene(gl, program, positionBuffer, currentTime);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (gl && programRef.current) {
        gl.deleteProgram(programRef.current);
      }
    };
  }, [speed, color, size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default WebGLAnimation;
