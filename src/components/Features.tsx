import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    title: 'Advanced Recognition',
    description: 'Computer vision algorithms identify materials with 99.7% accuracy using deep learning models trained on millions of waste samples.',
    metric: '99.7%',
    metricLabel: 'Accuracy'
  },
  {
    title: 'Real-time Processing',
    description: 'Instant categorization and sorting decisions processed in under 3.2 seconds from detection to action.',
    metric: '3.2s',
    metricLabel: 'Processing Time'
  },
  {
    title: 'Sustainable Impact',
    description: 'Reduces waste contamination by 85% and increases recycling efficiency through intelligent material separation.',
    metric: '85%',
    metricLabel: 'Waste Reduction'
  },
  {
    title: 'Continuous Learning',
    description: 'Machine learning algorithms continuously improve sorting accuracy and adapt to new materials and waste patterns.',
    metric: '24/7',
    metricLabel: 'Learning'
  }
];

const Features: React.FC = () => {
  return (
    <section className="features section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Engineering Excellence</h2>
          <p className="section-subtitle">
            Built on cutting-edge AI technology and precision engineering 
            to deliver unprecedented waste management efficiency.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-metric">
                <div className="metric-number">{feature.metric}</div>
                <div className="metric-label">{feature.metricLabel}</div>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
