import { useEffect, useState, ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxContainer = ({ children, speed = 0.5, className = '' }: ParallaxContainerProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transform = `translate3d(0, ${scrollY * speed}px, 0)`;

  return (
    <div 
      className={`parallax-layer ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;