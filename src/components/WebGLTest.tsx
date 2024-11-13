"use client";

import React, { useEffect, useRef, useState } from "react";

interface WebGLAnimationProps {
  speed?: number;
  color?: [number, number, number];
  size?: number;
  targetSelectors?: string[];
  debug?: boolean;
}

interface AnimationTarget {
  element: Element;
  rect: DOMRect;
  isVisible: boolean;
}

const WebGLAnimation: React.FC<WebGLAnimationProps> = ({
  speed = 1.0,
  color = [1.0, 0.0, 0.0],
  size = 0.5,
  targetSelectors = [],
  debug = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const animationFrameRef = useRef<number>();
  const programRef = useRef<WebGLProgram | null>(null);
  const [targets, setTargets] = useState<AnimationTarget[]>([]);

  const currentPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentSize = useRef({ width: size, height: size });
  const targetSize = useRef({ width: size, height: size });
  const lastVisibleTarget = useRef<Element | null>(null);
  const defaultCenter = { x: -0.6, y: 0.6 };

  // Updated vertex shader to handle separate width and height
  const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    uniform float uTime;
    uniform vec2 uSize;
    uniform vec2 uOffset;

    void main() {
      float x = aVertexPosition.x * uSize.x + uOffset.x;
      float y = aVertexPosition.y * uSize.y + uOffset.y;
      x += sin(uTime * 2.0) * 0.02;
      y += cos(uTime * 2.0) * 0.02;
      gl_Position = vec4(x, y, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform vec3 uColor;

    void main() {
      gl_FragColor = vec4(uColor, 0.8);
    }
  `;

  const updateSquarePosition = (element: Element) => {
    const rect = element.getBoundingClientRect();

    // Center position
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 2 - 1;
    const y = (-(rect.top + rect.height / 2) / window.innerHeight) * 2 + 1;

    // Size in WebGL coordinates with padding factor (e.g., 1.2 = 20% larger)
    const paddingFactor = 1.2;
    const width = (rect.width / window.innerWidth) * paddingFactor;
    const height = (rect.height / window.innerHeight) * paddingFactor;

    if (debug) {
      console.log("Element rect:", rect);
      console.log("New target position:", { x, y });
      console.log("New target size:", { width, height });
    }

    targetPosition.current = { x, y };
    targetSize.current = { width, height };
  };

  useEffect(() => {
    if (debug) {
      console.log("Target selectors:", targetSelectors);
    }

    // Set initial position to upper left
    if (targetSelectors.length === 0) {
      targetPosition.current = defaultCenter;
    }

    const updateTargetPositions = () => {
      const newTargets = targetSelectors
        .map((selector) => {
          const element = document.querySelector(selector);
          if (!element) {
            if (debug)
              console.warn(`Element not found for selector: ${selector}`);
            return null;
          }
          const rect = element.getBoundingClientRect();
          return {
            element,
            rect,
            isVisible: false,
          };
        })
        .filter((t): t is AnimationTarget => t !== null);

      setTargets(newTargets);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (debug) {
            console.log(
              "Intersection details:",
              entry.target.id || entry.target.className,
              "intersecting:",
              entry.isIntersecting,
              "ratio:",
              entry.intersectionRatio
            );
          }

          if (entry.isIntersecting) {
            lastVisibleTarget.current = entry.target;
            updateSquarePosition(entry.target);
          } else if (entry.target === lastVisibleTarget.current) {
            lastVisibleTarget.current = null;
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5, 1.0],
        rootMargin: "50px",
      }
    );

    targetSelectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
        if (debug) console.log("Observing element:", selector);

        // If element is already visible, update position immediately
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          lastVisibleTarget.current = element;
          updateSquarePosition(element);
        }
      }
    });

    updateTargetPositions();

    // Default movement when no targets are visible
    const moveDefault = () => {
      if (!lastVisibleTarget.current) {
        const time = Date.now() * 0.001;
        targetPosition.current = {
          x: defaultCenter.x + Math.sin(time * 0.5) * 0.1,
          y: defaultCenter.y + Math.cos(time * 0.5) * 0.1,
        };
        // Set square size accounting for aspect ratio
        const defaultSize = size;
        const aspectRatio = glRef.current
          ? glRef.current.canvas.width / glRef.current.canvas.height
          : 1;
        targetSize.current = {
          width: defaultSize,
          height: defaultSize * aspectRatio,
        };
      } else {
        updateSquarePosition(lastVisibleTarget.current);
      }
    };

    const defaultMovementInterval = setInterval(moveDefault, 16);

    // Handle scroll and resize
    const handleScroll = () => {
      if (lastVisibleTarget.current) {
        updateSquarePosition(lastVisibleTarget.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateTargetPositions);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTargetPositions);
      clearInterval(defaultMovementInterval);
    };
  }, [targetSelectors, size, debug]);

  const initShaderProgram = (gl: WebGLRenderingContext) => {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    const shaderProgram = gl.createProgram()!;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    return shaderProgram;
  };

  const initBuffers = (gl: WebGLRenderingContext) => {
    const positions = [
      -1.0,
      1.0, // top left
      1.0,
      1.0, // top right
      -1.0,
      -1.0, // bottom left
      1.0,
      -1.0, // bottom right
    ];

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
    const aspectRatio = gl.canvas.width / gl.canvas.height;

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Smooth transitions for position and size
    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;
    currentPosition.current.x = lerp(
      currentPosition.current.x,
      targetPosition.current.x,
      0.08
    );
    currentPosition.current.y = lerp(
      currentPosition.current.y,
      targetPosition.current.y,
      0.08
    );
    currentSize.current.width = lerp(
      currentSize.current.width,
      targetSize.current.width,
      0.08
    );
    currentSize.current.height = lerp(
      currentSize.current.height,
      targetSize.current.height,
      0.08
    );

    if (lastVisibleTarget.current) {
      currentSize.current.width = lerp(
        currentSize.current.width,
        targetSize.current.width,
        0.08
      );
      currentSize.current.height = lerp(
        currentSize.current.height,
        targetSize.current.height,
        0.08
      );
    } else {
      // For default square shape, adjust for aspect ratio
      const squareSize = lerp(
        currentSize.current.width,
        targetSize.current.width,
        0.08
      );
      currentSize.current.width = squareSize;
      currentSize.current.height = squareSize * aspectRatio;
    }

    if (debug) {
      console.log("Current position:", currentPosition.current);
      console.log("Current size:", currentSize.current);
    }

    const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
    const timeLocation = gl.getUniformLocation(program, "uTime");
    const colorLocation = gl.getUniformLocation(program, "uColor");
    const sizeLocation = gl.getUniformLocation(program, "uSize");
    const offsetLocation = gl.getUniformLocation(program, "uOffset");

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);

    gl.uniform1f(timeLocation, time * speed);
    gl.uniform3fv(colorLocation, color);
    gl.uniform2f(
      sizeLocation,
      currentSize.current.width,
      currentSize.current.height
    );
    gl.uniform2f(
      offsetLocation,
      currentPosition.current.x,
      currentPosition.current.y
    );

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      premultipliedAlpha: false,
      alpha: true,
    });
    if (!gl) return;
    glRef.current = gl;

    const program = initShaderProgram(gl);
    const positionBuffer = initBuffers(gl);
    programRef.current = program;

    let startTime = Date.now();
    const render = () => {
      if (!gl || !program || !positionBuffer) return;

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

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (gl && programRef.current) {
        gl.deleteProgram(programRef.current);
      }
    };
  }, [speed, color, size, debug]);

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
