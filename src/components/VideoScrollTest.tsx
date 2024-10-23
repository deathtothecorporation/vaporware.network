'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollVideoProps {
  src: string;
  height?: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  height = '150vh'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>({});

  // Initial mount
  useEffect(() => {
    console.log('Component mounted with src:', src);
    return () => console.log('Component unmounting');
  }, [src]);

  // Video loading and setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.log('No video element found');
      return;
    }

    console.log('Setting up video element');
    video.preload = 'metadata';

    // Log initial state
    console.log('Initial video state:', {
      readyState: video.readyState,
      networkState: video.networkState,
      currentSrc: video.currentSrc,
      src: video.src,
      duration: video.duration
    });

    // If video is already loaded, set duration
    if (video.readyState >= 4 && video.duration) {
      console.log('Video already loaded, duration:', video.duration);
      setDuration(video.duration);
      setIsLoading(false);
      setDebugInfo(prev => ({ ...prev, loadType: 'immediate' }));
    }

    const handleLoadStart = () => {
      console.log('Load started');
      setIsLoading(true);
    };

    const handleLoadedMetadata = () => {
      console.log('Metadata loaded, duration:', video.duration);
      if (video.duration) {
        setDuration(video.duration);
        setIsLoading(false);
        setDebugInfo(prev => ({ 
          ...prev, 
          loadType: 'metadata',
          videoDuration: video.duration 
        }));
      }
    };

    const handleCanPlay = () => {
      console.log('Can play, duration:', video.duration);
      if (!duration && video.duration) {
        setDuration(video.duration);
        setIsLoading(false);
      }
    };

    const handleError = () => {
      const error = video.error;
      console.error('Video error:', {
        code: error?.code,
        message: error?.message,
        networkState: video.networkState
      });
      setDebugInfo(prev => ({ ...prev, error: error?.message }));
    };

    // Add all listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Force initial load
    try {
      video.currentTime = 0;
      video.load();
    } catch (e) {
      console.error('Error during initial load:', e);
    }

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Scroll handling
  useEffect(() => {
    if (!duration) {
      console.log('Waiting for duration. Current values:', {
        durationState: duration,
        videoDuration: videoRef.current?.duration,
        readyState: videoRef.current?.readyState
      });
      return;
    }

    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) {
      console.log('Missing refs:', { video: !!video, container: !!container });
      return;
    }

    console.log('Setting up scroll handler with duration:', duration);

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (rect.height - window.innerHeight);
      const boundedProgress = Math.max(0, Math.min(1, scrollProgress));
      const newTime = boundedProgress * duration;
      
      setDebugInfo(prev => ({
        ...prev,
        scrollProgress: boundedProgress.toFixed(2),
        targetTime: newTime.toFixed(2),
        currentTime: video.currentTime.toFixed(2)
      }));

      if (Math.abs(video.currentTime - newTime) > 0.01) {
        video.currentTime = newTime;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [duration]);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height,
        position: 'relative',
        backgroundColor: '#333',
      }}
    >
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          background: 'rgba(0,0,0,0.7)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          Loading video...
        </div>
      )}
      
      <video
        ref={videoRef}
        playsInline
        muted
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser doesn't support the video tag
      </video>
      
      {/* Debug overlay */}
      <div style={{
        position: 'absolute',
        top: 10,
        left: 10,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '10px',
        fontSize: '12px',
        fontFamily: 'monospace',
        borderRadius: '5px',
        maxWidth: '300px',
        wordWrap: 'break-word'
      }}>
        Source: {src}<br />
        Duration: {duration.toFixed(2)}s<br />
        Loading: {isLoading ? 'yes' : 'no'}<br />
        Progress: {debugInfo.scrollProgress || '0.00'}<br />
        Time: {debugInfo.currentTime || '0.00'} / {debugInfo.targetTime || '0.00'}<br />
        {debugInfo.error && <div style={{color: 'red'}}>Error: {debugInfo.error}</div>}
      </div>
    </div>
  );
};

export default ScrollVideo;
