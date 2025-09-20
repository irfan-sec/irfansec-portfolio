import { useState, useEffect, useCallback, useRef } from 'react';
import { Lock, Shield, Key } from 'lucide-react';

const VaultAnimation = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const animationIdRef = useRef<number>(0);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const animate = (currentTime: number) => {
      // Limit to 60fps and update every 2 frames for smoother but less frequent updates
      if (currentTime - lastFrameTimeRef.current < 32) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;
      
      setRotationY(prev => (prev + 0.5) % 360);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const toggleVault = useCallback(() => {
    setIsUnlocked(prev => !prev);
  }, []);

  return (
    <div className="cyber-3d relative w-48 h-48 mx-auto cursor-pointer" onClick={toggleVault}>
      {/* Main vault container */}
      <div 
        className="vault-3d relative w-full h-full"
        style={{ 
          transform: `rotateY(${rotationY}deg) rotateX(15deg)`,
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Vault body */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-gray to-cyber-deep rounded-2xl border border-cyber-blue/30">
          {/* Vault door */}
          <div className={`absolute inset-4 bg-gradient-to-br from-cyber-deep to-cyber-void rounded-xl border-2 transition-all duration-700 ${
            isUnlocked ? 'border-cyber-green shadow-matrix' : 'border-cyber-blue/50 shadow-cyber'
          }`}>
            {/* Central lock mechanism */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`relative w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                isUnlocked ? 'border-cyber-green bg-cyber-green/20' : 'border-cyber-blue bg-cyber-blue/20'
              }`}>
                {/* Lock icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isUnlocked ? (
                    <Key className="w-6 h-6 text-cyber-green animate-spin" />
                  ) : (
                    <Lock className="w-6 h-6 text-cyber-blue" />
                  )}
                </div>
                
                {/* Rotating rings */}
                <div className={`absolute -inset-2 border-2 border-dashed rounded-full transition-all duration-1000 ${
                  isUnlocked ? 'border-cyber-green/50 animate-spin' : 'border-cyber-blue/50'
                }`}></div>
                <div className={`absolute -inset-4 border border-dotted rounded-full transition-all duration-1500 ${
                  isUnlocked ? 'border-cyber-green/30 animate-spin' : 'border-cyber-blue/30'
                }`} style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>

            {/* Vault details */}
            <div className="absolute top-2 left-2 right-2 flex justify-between">
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex justify-between">
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
              <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-cyber-green' : 'bg-cyber-blue'}`}></div>
            </div>
          </div>
        </div>

        {/* Security shield overlay */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-blue/20 rounded-full flex items-center justify-center">
          <Shield className="w-4 h-4 text-cyber-blue" />
        </div>
      </div>

      {/* Holographic base */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-cyber opacity-30 rounded-full blur-sm"></div>
      
      {/* Status text */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <span className={`text-xs font-mono ${isUnlocked ? 'text-cyber-green' : 'text-cyber-blue'}`}>
          {isUnlocked ? 'UNLOCKED' : 'SECURED'}
        </span>
      </div>
    </div>
  );
};

export default VaultAnimation;