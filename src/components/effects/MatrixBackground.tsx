import { useEffect, useRef, useCallback } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const lastFrameTimeRef = useRef(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Matrix characters
    const chars = '01';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    // Pre-calculate random values for better performance
    const randomCache = new Array(1000).fill(0).map(() => Math.random());
    let randomIndex = 0;

    // Animation function with 60fps cap and reduced frequency
    const animate = (currentTime: number) => {
      // Limit to ~30fps for matrix effect (more cinematic)
      if (currentTime - lastFrameTimeRef.current < 33) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;

      // Update columns if canvas was resized
      const currentColumns = Math.floor(canvas.width / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array(columns).fill(1);
      }

      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(1, 5, 13, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties once
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(randomCache[randomIndex % randomCache.length] * chars.length)];
        randomIndex++;
        
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add some randomness to the opacity using cached values
        const opacity = randomCache[randomIndex % randomCache.length] * 0.5 + 0.1;
        randomIndex++;
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.fillText(text, x, y);

        // Reset drop to top with some randomness
        if (y > canvas.height && randomCache[randomIndex % randomCache.length] > 0.975) {
          drops[i] = 0;
        }
        randomIndex++;
        drops[i]++;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0"
      style={{ 
        background: 'transparent',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default MatrixBackground;