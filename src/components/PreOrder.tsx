import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PreOrder.css';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  availability: string;
  deliveryTime: string;
  category: 'consumer' | 'business' | 'enterprise';
}

interface OrderSummary {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

const PreOrder: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>('oscar-lite');
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({
    'oscar-lite': 1,
    'oscar-3d-files': 0,
    'oscar-production': 0
  });


  const products: Product[] = [
    {
      id: 'oscar-lite',
      name: 'OscarAI Lite',
      price: 150,
      description: '3D printed version of Oscar - perfect for testing and education. Ships ready to use.',
      features: [
        'Complete 3D printed unit',
        'Basic sorting functionality',
        'Educational materials included',
        'Assembly instructions',
        '6-month support',
        'Great for prototyping'
      ],
      image: '/OscarAI Lite $150.png',
      availability: 'In Stock',
      deliveryTime: 'Ships in 2-3 weeks',
      category: 'consumer'
    },
    {
      id: 'oscar-3d-files',
      name: 'OscarAI 3D Models',
      price: 100,
      description: 'Complete 3D printable files package. Print your own Oscar at home or makerspace.',
      features: [
        'Complete STL file package',
        'Detailed assembly guide',
        'Parts list & sourcing guide',
        'Print settings recommendations',
        'Community forum access',
        'Lifetime file updates'
      ],
      image: '/OscarAI 3D Printed Models $100.png',
      availability: 'Digital Download',
      deliveryTime: 'Instant Download',
      category: 'business'
    },
    {
      id: 'oscar-production',
      name: 'OscarAI Production Model',
      price: 550,
      description: 'Full working production model - our flagship AI-powered waste sorting system.',
      features: [
        '99.7% sorting accuracy',
        'Advanced AI classification',
        'Real-time analytics',
        'Mobile app integration',
        '2-year full warranty',
        'Professional installation'
      ],
      image: '/Prototype 4 Shot.jpg',
      availability: 'Limited Production',
      deliveryTime: 'Ships in 6-8 weeks',
      category: 'enterprise'
    }
  ];



  const handleQuantityChange = (productId: string, change: number) => {
    setQuantity(prev => ({
      ...prev,
      [productId]: Math.max(0, prev[productId] + change)
    }));
  };

  const calculateOrderSummary = (): OrderSummary => {
    const subtotal = products.reduce((sum, product) => {
      return sum + (product.price * quantity[product.id]);
    }, 0);
    
    const discount = products.reduce((sum, product) => {
      if (product.originalPrice) {
        return sum + ((product.originalPrice - product.price) * quantity[product.id]);
      }
      return sum;
    }, 0);
    
    const shipping = subtotal > 1000 ? 0 : 49;
    const total = subtotal + shipping;

    return { subtotal, discount, shipping, total };
  };

  const orderSummary = calculateOrderSummary();
  const hasItems = Object.values(quantity).some(q => q > 0);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'consumer': return '#22c55e';
      case 'business': return '#3b82f6';
      case 'enterprise': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'consumer': return 'Lite Edition';
      case 'business': return 'DIY Kit';
      case 'enterprise': return 'Production Model';
      default: return 'Product';
    }
  };

  return (
    <div className="preorder" id="preorder">
      {/* Hero Section */}
      <section className="preorder-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="preorder-hero-content"
          >
            <h1 className="preorder-title">
              <span className="title-line">Pre-Order Oscar AI</span>
            </h1>


          </motion.div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="product-selection">
        <div className="container">


          <div className="products-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                onClick={() => setSelectedProduct(product.id)}
              >
                <div 
                  className="product-category"
                  style={{ color: getCategoryColor(product.category) }}
                >
                  {getCategoryLabel(product.category)}
                </div>
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">{product.availability}</div>
                </div>
                
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="product-pricing">
                    <div className="price-section">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="delivery-info">{product.deliveryTime}</div>
                  </div>
                  
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(product.id, -1);
                      }}
                      disabled={quantity[product.id] === 0}
                    >
                      -
                    </button>
                    <span className="quantity-display">{quantity[product.id]}</span>
                    <button 
                      className="quantity-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(product.id, 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Summary */}
      {hasItems && (
        <motion.section 
          className="order-summary-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <div className="order-summary-card">
              <h3 className="summary-title">Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal}</span>
                </div>
                
                {orderSummary.discount > 0 && (
                  <div className="summary-row discount">
                    <span>Early Bird Discount</span>
                    <span>-${orderSummary.discount}</span>
                  </div>
                )}
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping}`}</span>
                </div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${orderSummary.total}</span>
                </div>
              </div>
              
              <button 
                className="btn btn-primary checkout-btn"
              >
                Proceed to Checkout
              </button>
              
              <p className="checkout-note">
                Secure checkout • No payment until shipping • 30-day return policy
              </p>
            </div>
          </div>
        </motion.section>
      )}



      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-header"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">What's the difference between the three versions?</h4>
              <p className="faq-answer">
                Lite is a ready-to-ship 3D printed unit ($150), 3D Models are files you print yourself ($100), and Production is our full working system ($550).
              </p>
            </div>
            
            <div className="faq-item">
              <h4 className="faq-question">Do the 3D printed versions work the same?</h4>
              <p className="faq-answer">
                The Lite version has basic functionality. The Production model has advanced AI and full features. 3D files let you build your own version.
              </p>
            </div>
            
            <div className="faq-item">
              <h4 className="faq-question">Can I upgrade from Lite to Production later?</h4>
              <p className="faq-answer">
                Yes! We offer upgrade paths and will credit your Lite purchase toward a Production model purchase.
              </p>
            </div>
            
            <div className="faq-item">
              <h4 className="faq-question">What do I need to print the 3D files myself?</h4>
              <p className="faq-answer">
                Access to a 3D printer (or service), basic tools, and electronic components listed in our sourcing guide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreOrder;