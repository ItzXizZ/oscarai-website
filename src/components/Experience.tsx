import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import OscarModel from './OscarModel';
import InteractionPanel from './InteractionPanel';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Interactive Experience</h2>
          <p className="section-subtitle">
            Explore our AI-powered waste management system. Click and drag to rotate, 
            use controls to customize colors and test the sorting functionality.
          </p>
        </motion.div>

        <div className="experience-content">
          <div className="model-viewer">
            <div className="canvas-container">
              <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.4} />
                  <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                  />
                  <pointLight position={[0, 0, 10]} intensity={0.5} color="#ffffff" />
                  
                  <OscarModel />
                  
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={1}
                    minDistance={5}
                    maxDistance={15}
                  />
                  
                  <Environment preset="studio" />
                </Suspense>
              </Canvas>
              
              <div className="canvas-overlay">
                <div className="loading-indicator">
                  <div className="loading-spinner"></div>
                  <p>Loading Oscar AI Model...</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="interaction-sidebar">
            <InteractionPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
