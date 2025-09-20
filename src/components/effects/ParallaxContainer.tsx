import { useEffect, useState, ReactNode, useCallback, useRef } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxContainer = ({ children, speed = 0.5, className = '' }: ParallaxContainerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const rafIdRef = useRef<number>(0);
  const lastScrollTime = useRef(0);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    // Throttle to 60fps max
    if (now - lastScrollTime.current < 16) return;
    
    lastScrollTime.current = now;
    
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    
    rafIdRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    // Set initial scroll position
    setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [handleScroll]);

  const transform = `translate3d(0, ${scrollY * speed}px, 0)`;

  return (
    <div 
      className={`parallax-layer ${className}`}
      style={{ 
        transform,
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;