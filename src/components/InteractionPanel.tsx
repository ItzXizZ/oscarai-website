import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './InteractionPanel.css';

const InteractionPanel: React.FC = () => {
  const [binColor, setBinColor] = useState('#333333');
  const [accentColor, setAccentColor] = useState('#22c55e');
  const [glowIntensity, setGlowIntensity] = useState(0.3);

  const handleDemoSorting = () => {
    // Trigger demo sorting animation
    console.log('Demo sorting triggered');
  };

  const handleResetScene = () => {
    // Reset scene to default state
    setBinColor('#333333');
    setAccentColor('#000000');
    setGlowIntensity(0.3);
    console.log('Scene reset');
  };

  return (
    <div className="interaction-panel">
      <motion.div
        className="panel-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Customization</h3>
        <div className="controls">
          <div className="control-group">
            <label>Bin Color</label>
            <input
              type="color"
              value={binColor}
              onChange={(e) => setBinColor(e.target.value)}
              className="color-input"
            />
          </div>
          
          <div className="control-group">
            <label>Accent Color</label>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="color-input"
            />
          </div>
          
          <div className="control-group">
            <label>Glow Intensity</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(Number(e.target.value))}
              className="range-input"
            />
            <span className="range-value">{Math.round(glowIntensity * 100)}%</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="panel-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3>Interactions</h3>
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={handleDemoSorting}>
            Demo Sorting
          </button>
          <button className="btn btn-secondary" onClick={handleResetScene}>
            Reset Scene
          </button>
        </div>
      </motion.div>

      <motion.div
        className="panel-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Instructions</h3>
        <div className="instructions">
          <div className="instruction-item">
            <div className="instruction-icon">↻</div>
            <div className="instruction-text">
              <strong>Rotate:</strong> Click and drag to rotate the model
            </div>
          </div>
          <div className="instruction-item">
            <div className="instruction-icon">⚙</div>
            <div className="instruction-text">
              <strong>Customize:</strong> Use controls to change colors and effects
            </div>
          </div>
          <div className="instruction-item">
            <div className="instruction-icon">▶</div>
            <div className="instruction-text">
              <strong>Demo:</strong> Click demo button to see AI sorting in action
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractionPanel;
