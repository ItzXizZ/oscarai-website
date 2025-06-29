import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingBag, TrendingUp, Globe, DollarSign, Users, Target, Sparkles, Award } from 'lucide-react'

const DesignIntro = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: ShoppingBag,
      title: "Retail Ready",
      description: "Perfect for commercial spaces, offices, and retail environments"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solution",
      description: "Designed for high-volume commercial waste processing"
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Fits seamlessly into existing commercial infrastructure"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Under $300 manufacturing cost with premium finish"
    }
  ]

  return (
    <section ref={ref} className="apple-section bg-black">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 mb-8"
          >
            <Sparkles className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium text-green-400">Commercial Grade</span>
          </motion.div>
          
          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Commercial Design
          </h2>
          <p className="apple-subtitle">Versatile & Accessible: Perfect for Schools, Homes & Events</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
              <img 
                src="/Adobe Express - file (1).png" 
                alt="Commercial Design" 
                className="hero-image w-full h-auto transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-lg animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-10"
          >
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-2xl">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                  Universal Compatibility
                </h3>
              </motion.div>
              <p className="text-2xl text-gray-300 font-light mb-8" style={{ letterSpacing: '-0.01em' }}>
                Attaches to Any Garbage Bin in the World
              </p>
              <p className="text-lg text-gray-400 mb-8" style={{ letterSpacing: '-0.01em' }}>
                Designed for one-at-a-time sorting, perfect for schools, homes, and events. Simply attach to your existing garbage bin and watch it intelligently sort each item as it's placed.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    className="glass-card text-left hover:scale-105 transform transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300" style={{ letterSpacing: '-0.01em' }}>
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DesignIntro 