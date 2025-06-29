import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingCart, Check } from 'lucide-react'

const ECommerce = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const products = [
    {
      name: "OscarAI Home",
      price: "$199",
      originalPrice: "$249",
      features: [
        "Universal bin compatibility",
        "81% sorting accuracy",
        "Mobile app integration",
        "One-year warranty"
      ],
      badge: "Early Bird",
      popular: false
    },
    {
      name: "OscarAI Pro",
      price: "$299",
      originalPrice: "$399",
      features: [
        "All Home features",
        "Advanced analytics",
        "Multi-bin management",
        "Priority support",
        "Commercial grade"
      ],
      badge: "Most Popular",
      popular: true
    },
    {
      name: "OscarAI Enterprise",
      price: "Custom",
      originalPrice: "",
      features: [
        "Bulk deployment",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Training & onboarding"
      ],
      badge: "For Schools",
      popular: false
    }
  ]

  return (
    <section ref={ref} className="apple-section bg-black">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">Choose Your OscarAI</h2>
          <p className="apple-subtitle">Waste sorting revolutionized for every need</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`glass-card relative ${product.popular ? 'ring-2 ring-green-400' : ''}`}
            >
              {product.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${
                  product.popular ? 'bg-green-400 text-black' : 'bg-white/20 text-white'
                }`}>
                  {product.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-3xl font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full flex items-center justify-center space-x-2 ${
                product.popular ? 'btn-apple' : 'btn-apple-outline'
              }`}>
                <ShoppingCart className="w-5 h-5" />
                <span>{product.price === "Custom" ? "Contact Sales" : "Pre-Order Soon"}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ECommerce 