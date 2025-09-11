import { useState, useEffect } from 'react';
import { Globe, Network, Zap } from 'lucide-react';

const HologramGlobe = () => {
  const [rotation, setRotation] = useState(0);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);

    const nodeInterval = setInterval(() => {
      setActiveNodes(prev => {
        const newNodes = [...prev];
        const randomNode = Math.floor(Math.random() * 8);
        if (newNodes.includes(randomNode)) {
          return newNodes.filter(n => n !== randomNode);
        } else {
          return [...newNodes, randomNode].slice(-3); // Keep max 3 active nodes
        }
      });
    }, 800);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  const nodePositions = [
    { x: 50, y: 20, z: 0 },
    { x: 80, y: 40, z: 30 },
    { x: 20, y: 60, z: -20 },
    { x: 70, y: 75, z: 40 },
    { x: 30, y: 35, z: -30 },
    { x: 90, y: 65, z: 20 },
    { x: 15, y: 80, z: 10 },
    { x: 60, y: 25, z: -40 },
  ];

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Hologram container */}
      <div className="hologram w-full h-full rounded-full relative overflow-hidden">
        {/* Globe base */}
        <div 
          className="absolute inset-4 rounded-full border-2 border-cyber-teal/40 bg-gradient-to-br from-cyber-blue/10 to-cyber-teal/10"
          style={{ transform: `rotateY(${rotation}deg)` }}
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
          {activeNodes.map((nodeIndex, i) => (
            activeNodes.slice(i + 1).map((otherNodeIndex, j) => {
              const node1 = nodePositions[nodeIndex];
              const node2 = nodePositions[otherNodeIndex];
              const length = Math.sqrt(
                Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
              );
              const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;
              
              return (
                <div
                  key={`${nodeIndex}-${otherNodeIndex}`}
                  className="absolute h-0.5 bg-gradient-to-r from-cyber-green via-cyber-teal to-cyber-green opacity-60"
                  style={{
                    left: `${node1.x}%`,
                    top: `${node1.y}%`,
                    width: `${length * 0.8}%`,
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '0 50%',
                  }}
                ></div>
              );
            })
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