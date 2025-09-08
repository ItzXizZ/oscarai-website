import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, ContactFormData } from '../lib/supabase';
import './ContactFormOverlay.css';

interface ContactFormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  orderTotal?: number;
}

const ContactFormOverlay: React.FC<ContactFormOverlayProps> = ({ 
  isOpen, 
  onClose, 
  orderTotal 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { data, error } = await supabase
        .from('contact_form')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            address: formData.address || null
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', address: '' });
      
      // Close overlay after a brief delay
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);

    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="contact-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-header">
              <h2 className="contact-title">Join Our Waitlist</h2>
              <p className="contact-subtitle">
                We're not yet processing public orders. Join our waitlist to be notified when we launch!
              </p>
              <button 
                className="close-btn"
                onClick={onClose}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {submitStatus === 'success' ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>You've been added to our waitlist! We'll notify you when we're ready to process orders.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {orderTotal && (
                  <div className="order-info">
                    <span className="order-label">Order Total:</span>
                    <span className="order-amount">${orderTotal}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="form-label">
                    Shipping Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Enter your shipping address (optional)"
                    rows={3}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <span className="error-icon">⚠</span>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting || !formData.name || !formData.email}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>

                <p className="form-note">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormOverlay;
