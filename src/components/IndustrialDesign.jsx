import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cog, Zap, Shield, Wrench, Factory, Settings, Cpu, Battery } from 'lucide-react'

const IndustrialDesign = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const industrialFeatures = [
    {
      icon: Factory,
      title: "Heavy-Duty Construction",
      description: "Built for demanding industrial environments with reinforced materials"
    },
    {
      icon: Zap,
      title: "High-Performance Processing",
      description: "Advanced AI processing capable of handling massive waste volumes"
    },
    {
      icon: Shield,
      title: "Industrial Grade Protection",
      description: "IP65 rated with chemical resistance and extreme temperature tolerance"
    },
    {
      icon: Battery,
      title: "Extended Operation",
      description: "Long-lasting power systems designed for continuous industrial use"
    }
  ]

  const specs = [
    { label: "Processing Capacity", value: "2000+ items/hour" },
    { label: "Accuracy Rate", value: "99.7%" },
    { label: "Operating Temperature", value: "-20°C to 60°C" },
    { label: "Power Consumption", value: "< 50W" }
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
            <Cog className="w-6 h-6 text-green-400 animate-spin-slow" />
            <span className="text-lg font-medium text-green-400">Industrial Grade</span>
          </motion.div>
          
          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Industrial Design
          </h2>
          <p className="apple-subtitle">Enterprise-Grade: Engineered for High-Volume Batch Processing</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-2xl border border-green-400/20">
                  <Wrench className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                  Enterprise Excellence
                </h3>
              </motion.div>
              <p className="text-2xl text-gray-300 font-light mb-8" style={{ letterSpacing: '-0.01em' }}>
                Built for High-Traffic Environments: Malls, Factories, and Enterprise Facilities
              </p>
              <p className="text-lg text-gray-400 mb-8" style={{ letterSpacing: '-0.01em' }}>
                Designed for continuous operation with batch processing capabilities. Perfect for areas with many people where large volumes of waste need efficient, automated sorting.
              </p>
            </div>
            
            <div className="grid gap-6">
              {industrialFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-green-400/20 rounded-3xl p-6 hover:bg-white/10 hover:border-green-400/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-2xl border border-green-400/30 group-hover:scale-110 transition-all duration-300">
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500">
              <img 
                src="/Adobe Express - file (23).png" 
                alt="Industrial Design" 
                className="hero-image w-full h-auto transform group-hover:scale-105 transition-all duration-700 filter contrast-110 brightness-90"
              />
              
              {/* Industrial accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-lg animate-pulse-slow border border-green-400/20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-lg animate-pulse-slow border border-green-400/20" style={{animationDelay: '2s'}}></div>
              
              {/* Corner detail elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400/40"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400/40"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400/40"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400/40"></div>
            </div>
            
            {/* Floating tech elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 -left-8 w-16 h-16 border-2 border-green-400/30 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Cpu className="w-8 h-8 text-green-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustrialDesign 