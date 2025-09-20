import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Globe, Network, Zap } from 'lucide-react';

const HologramGlobe = () => {
  const [rotation, setRotation] = useState(0);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const rotationAnimationRef = useRef<number>(0);
  const nodeTimeoutRef = useRef<NodeJS.Timeout>();
  const lastFrameTimeRef = useRef(0);

  // Memoize node positions to avoid recalculation
  const nodePositions = useMemo(() => [
    { x: 50, y: 20, z: 0 },
    { x: 80, y: 40, z: 30 },
    { x: 20, y: 60, z: -20 },
    { x: 70, y: 75, z: 40 },
    { x: 30, y: 35, z: -30 },
    { x: 90, y: 65, z: 20 },
    { x: 15, y: 80, z: 10 },
    { x: 60, y: 25, z: -40 },
  ], []);

  // Memoize connection lines calculation
  const connectionLines = useMemo(() => {
    const lines: Array<{
      key: string;
      length: number;
      angle: number;
      x: number;
      y: number;
    }> = [];

    activeNodes.forEach((nodeIndex, i) => {
      activeNodes.slice(i + 1).forEach((otherNodeIndex) => {
        const node1 = nodePositions[nodeIndex];
        const node2 = nodePositions[otherNodeIndex];
        const length = Math.sqrt(
          Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
        );
        const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;
        
        lines.push({
          key: `${nodeIndex}-${otherNodeIndex}`,
          length: length * 0.8,
          angle,
          x: node1.x,
          y: node1.y,
        });
      });
    });

    return lines;
  }, [activeNodes, nodePositions]);

  const updateActiveNodes = useCallback(() => {
    setActiveNodes(prev => {
      const newNodes = [...prev];
      const randomNode = Math.floor(Math.random() * 8);
      if (newNodes.includes(randomNode)) {
        return newNodes.filter(n => n !== randomNode);
      } else {
        return [...newNodes, randomNode].slice(-3); // Keep max 3 active nodes
      }
    });
  }, []);

  useEffect(() => {
    const animate = (currentTime: number) => {
      // Limit to 30fps for smooth but not excessive updates
      if (currentTime - lastFrameTimeRef.current < 33) {
        rotationAnimationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = currentTime;
      
      setRotation(prev => (prev + 0.5) % 360);
      rotationAnimationRef.current = requestAnimationFrame(animate);
    };

    rotationAnimationRef.current = requestAnimationFrame(animate);

    // Setup node update interval
    const scheduleNodeUpdate = () => {
      nodeTimeoutRef.current = setTimeout(() => {
        updateActiveNodes();
        scheduleNodeUpdate();
      }, 800);
    };
    scheduleNodeUpdate();

    return () => {
      if (rotationAnimationRef.current) {
        cancelAnimationFrame(rotationAnimationRef.current);
      }
      if (nodeTimeoutRef.current) {
        clearTimeout(nodeTimeoutRef.current);
      }
    };
  }, [updateActiveNodes]);

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Hologram container */}
      <div className="hologram w-full h-full rounded-full relative overflow-hidden">
        {/* Globe base */}
        <div 
          className="absolute inset-4 rounded-full border-2 border-cyber-teal/40 bg-gradient-to-br from-cyber-blue/10 to-cyber-teal/10"
          style={{ 
            transform: `rotateY(${rotation}deg)`,
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Globe icon in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Globe className="w-12 h-12 text-cyber-teal opacity-60" />
          </div>

          {/* Network nodes */}
          {nodePositions.map((node, index) => (
            <div
              key={index}
              className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                activeNodes.includes(index) 
                  ? 'bg-cyber-green shadow-matrix scale-150' 
                  : 'bg-cyber-blue/50'
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translateZ(${node.z}px)`,
              }}
            >
              {activeNodes.includes(index) && (
                <div className="absolute inset-0 bg-cyber-green rounded-full animate-ping"></div>
              )}
            </div>
          ))}

          {/* Connection lines */}
          {connectionLines.map((line) => (
            <div
              key={line.key}
              className="absolute h-0.5 bg-gradient-to-r from-cyber-green via-cyber-teal to-cyber-green opacity-60"
              style={{
                left: `${line.x}%`,
                top: `${line.y}%`,
                width: `${line.length}%`,
                transform: `rotate(${line.angle}deg)`,
                transformOrigin: '0 50%',
                willChange: 'transform',
              }}
            ></div>
          ))}
        </div>

        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-cyber-blue/20 animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute inset-2 rounded-full border border-cyber-teal/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-6 rounded-full border border-cyber-green/20 animate-spin" style={{ animationDuration: '12s' }}></div>

        {/* Central energy core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyber-blue rounded-full">
          <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Floating network icons */}
      <div className="absolute -top-4 -right-4 text-cyber-teal opacity-60">
        <Network className="w-6 h-6 animate-pulse" />
      </div>
      <div className="absolute -bottom-4 -left-4 text-cyber-green opacity-60">
        <Zap className="w-5 h-5 animate-bounce" />
      </div>

      {/* Hologram base projector */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-t from-cyber-blue/40 to-transparent rounded-t-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyber-blue rounded-full shadow-cyber"></div>
      </div>
    </div>
  );
};

export default HologramGlobe;