import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkillPath, SkillNode } from '../types';
import { Lock, CheckCircle } from 'lucide-react';

interface SkillPathViewProps {
  skillPath: SkillPath;
}

const SkillPathView: React.FC<SkillPathViewProps> = ({ skillPath }) => {
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Calculate connections when component mounts or when skillPath changes
  useEffect(() => {
    if (!svgRef.current || !skillPath.connections.length) return;
    
    // Clear existing lines
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    
    // Draw connections
    skillPath.connections.forEach(connection => {
      const sourceNode = skillPath.nodes.find(node => node.id === connection.source);
      const targetNode = skillPath.nodes.find(node => node.id === connection.target);
      
      if (sourceNode && targetNode) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        // Calculate start and end points (center of nodes)
        const startX = sourceNode.position.x + 60; // Half of node width (120px)
        const startY = sourceNode.position.y + 60;
        const endX = targetNode.position.x + 60;
        const endY = targetNode.position.y + 60;
        
        // Create a bezier curve path
        const dx = Math.abs(endX - startX) * 0.5;
        const path = `M ${startX},${startY} C ${startX + dx},${startY} ${endX - dx},${endY} ${endX},${endY}`;
        
        line.setAttribute('d', path);
        line.setAttribute('stroke', sourceNode.status === 'completed' ? '#4fc3f7' : '#dfe6ed');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke-dasharray', sourceNode.status === 'completed' ? '0' : '8,4');
        
        svgRef.current.appendChild(line);
      }
    });
  }, [skillPath]);
  
  const handleNodeClick = (node: SkillNode) => {
    setSelectedNode(node);
  };
  
  return (
    <div className="relative bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-6 overflow-hidden">
      <h2 className="font-poppins text-2xl font-semibold text-primary mb-2">{skillPath.title}</h2>
      <p className="text-primary-light mb-8">{skillPath.description}</p>
      
      <div className="relative w-full" style={{ height: '400px' }}>
        {/* SVG for connections */}
        <svg 
          ref={svgRef} 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
        
        {/* Nodes */}
        {skillPath.nodes.map(node => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{ 
              left: node.position.x, 
              top: node.position.y,
            }}
          >
            <div className="skill-node w-[120px] h-[120px]" onClick={() => handleNodeClick(node)}>
              <div className="skill-node-glow" />
              <div className="text-center">
                {node.status === 'locked' ? (
                  <Lock className="mx-auto mb-2 text-primary-light" size={24} />
                ) : node.status === 'completed' ? (
                  <CheckCircle className="mx-auto mb-2 text-success" size={24} />
                ) : (
                  <div className="h-6 mb-2" />
                )}
                <h4 className="text-sm font-medium text-primary line-clamp-2 px-2">
                  {node.title}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Selected node details */}
      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 glass-card p-6"
        >
          <h3 className="font-poppins text-xl font-semibold text-primary mb-2">
            {selectedNode.title}
          </h3>
          <p className="text-primary-light mb-4">{selectedNode.description}</p>
          
          {selectedNode.status === 'locked' ? (
            <div className="bg-coolGray bg-opacity-50 p-4 rounded-lg">
              <p className="text-primary-light text-sm flex items-center">
                <Lock size={16} className="mr-2" />
                Complete previous modules to unlock this skill.
              </p>
            </div>
          ) : selectedNode.status === 'completed' ? (
            <button className="btn-success">
              Review Module
            </button>
          ) : (
            <button className="btn-primary">
              Start Module
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SkillPathView;