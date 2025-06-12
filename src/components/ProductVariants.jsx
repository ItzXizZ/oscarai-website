import React from 'react'
import { motion } from 'framer-motion'
import { Home, Building2, Check, X } from 'lucide-react'

const ProductVariants = () => {
  const variants = [
    {
      name: 'Commercial',
      icon: Home,
      price: '$149',
      originalPrice: '$199',
      description: 'Perfect for homes, offices, and small businesses',
      image: '/api/placeholder/400/300',
      features: [
        'Universal mounting system',
        '4-hour battery life',
        'LED sorting indicators',
        'Cloud AI processing',
        'Mobile app integration',
        'Basic analytics dashboard'
      ],
      specs: {
        'Dimensions': '12" x 8" x 6"',
        'Weight': '3.2 lbs',
        'Battery': '4 hours continuous',
        'Connectivity': 'WiFi + Bluetooth',
        'Capacity': 'Up to 50 items/hour'
      }
    },
    {
      name: 'Industrial',
      icon: Building2,
      price: '$299',
      originalPrice: '$399',
      description: 'High-volume processing for facilities and institutions',
      image: '/api/placeholder/400/300',
      features: [
        'Heavy-duty mounting',
        '8-hour battery life',
        'Advanced LED display',
        'Priority cloud processing',
        'Advanced analytics suite',
        'Multi-bin coordination'
      ],
      specs: {
        'Dimensions': '16" x 12" x 8"',
        'Weight': '5.8 lbs',
        'Battery': '8 hours continuous',
        'Connectivity': 'WiFi + Ethernet',
        'Capacity': 'Up to 200 items/hour'
      }
    }
  ]

  const comparisonFeatures = [
    { feature: 'AI Sorting Accuracy', commercial: '81%', industrial: '81%' },
    { feature: 'Universal Mounting', commercial: true, industrial: true },
    { feature: 'Battery Life', commercial: '4 hours', industrial: '8 hours' },
    { feature: 'Processing Speed', commercial: '50/hour', industrial: '200/hour' },
    { feature: 'Mobile App', commercial: true, industrial: true },
    { feature: 'Advanced Analytics', commercial: false, industrial: true },
    { feature: 'Multi-bin Coordination', commercial: false, industrial: true },
    { feature: 'Priority Support', commercial: false, industrial: true }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Product Variants</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Choose Your <span className="text-gradient">OscarAI</span> Model
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            From home offices to industrial facilities, we have the perfect OscarAI solution 
            for your waste sorting needs.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {variants.map((variant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card relative overflow-hidden ${
                variant.name === 'Commercial' ? 'ring-2 ring-secondary-green' : ''
              }`}
            >
              {/* Popular Badge */}
              {variant.name === 'Commercial' && (
                <div className="absolute top-4 right-4 bg-secondary-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Product Image Placeholder */}
              <div className="bg-gradient-to-br from-primary-blue/10 to-secondary-green/10 h-48 rounded-xl mb-6 flex items-center justify-center">
                <variant.icon className="h-16 w-16 text-primary-blue" />
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-dark mb-2">
                  OscarAI {variant.name}
                </h3>
                <p className="text-neutral-gray mb-4">
                  {variant.description}
                </p>
                
                {/* Pricing */}
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-primary-blue">
                    {variant.price}
                  </span>
                  <span className="text-lg text-neutral-gray line-through">
                    {variant.originalPrice}
                  </span>
                </div>
                <div className="text-sm text-secondary-green font-medium">
                  Early Bird Pricing
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {variant.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-secondary-green flex-shrink-0" />
                    <span className="text-neutral-gray">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div className="bg-background-light rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-text-dark mb-3">Specifications</h4>
                <div className="space-y-2">
                  {Object.entries(variant.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-neutral-gray">{key}:</span>
                      <span className="text-text-dark font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a 
                href="#preorder" 
                className={`w-full text-center block ${
                  variant.name === 'Commercial' ? 'btn-success' : 'btn-primary'
                }`}
              >
                Pre-Order {variant.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-background-light to-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Detailed Comparison
            </h3>
            <p className="text-lg text-neutral-gray">
              Compare features to find the perfect OscarAI for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary-blue/20">
                  <th className="text-left py-4 px-4 font-semibold text-text-dark">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-text-dark">
                    Commercial
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-text-dark">
                    Industrial
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-text-dark">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof item.commercial === 'boolean' ? (
                        item.commercial ? (
                          <Check className="h-5 w-5 text-secondary-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-neutral-gray mx-auto" />
                        )
                      ) : (
                        <span className="text-text-dark font-medium">
                          {item.commercial}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof item.industrial === 'boolean' ? (
                        item.industrial ? (
                          <Check className="h-5 w-5 text-secondary-green mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-neutral-gray mx-auto" />
                        )
                      ) : (
                        <span className="text-text-dark font-medium">
                          {item.industrial}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-gray mb-6">
            Need help choosing? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#preorder" className="btn-success">
              Start Pre-Order Process
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Sales Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductVariants 