import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta section">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to transform waste management?</h2>
          <p>
            Join leading organizations already implementing Oscar AI 
            to revolutionize their sustainability operations.
          </p>
          <div className="cta-actions">
            <a href="#preorder" className="btn btn-primary">
              Get Early Access
            </a>
            <a href="#contact" className="btn btn-secondary">
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
