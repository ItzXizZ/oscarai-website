import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {

      const navHeight = 120; // Navigation height + extra space for title visibility
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800; // Animation duration in ms
      let start: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number): number => 
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        const easedPercentage = easeInOutCubic(percentage);
        window.scrollTo(0, startPosition + distance * easedPercentage);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        } else {
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <img src="/OscarAI_full_logo.png" alt="Oscar AI Logo" className="nav-logo" />
          </div>
          
          <div className="nav-links">
            <motion.a 
              href="#leadership" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'leadership')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Leadership
            </motion.a>
            <motion.a 
              href="#story" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'story')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Our Story
            </motion.a>
            <motion.a 
              href="#preorder" 
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, 'preorder')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Pre-Order
            </motion.a>
          </div>
          
          <motion.button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
        
        <motion.div 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href="#leadership" 
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'leadership')}
            whileTap={{ scale: 0.95 }}
          >
            Leadership
          </motion.a>
          <motion.a 
            href="#story" 
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'story')}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.a>
          <motion.a 
            href="#preorder" 
            className="mobile-nav-link btn-mobile"
            onClick={(e) => handleNavClick(e, 'preorder')}
            whileTap={{ scale: 0.95 }}
          >
            Pre-Order
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
