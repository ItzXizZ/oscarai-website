import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative px-8 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-8"
              style={{ 
                lineHeight: '0.9', 
                letterSpacing: '-0.04em',
                fontWeight: 600 
              }}
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">OscarAI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-12 leading-tight"
              style={{ 
                letterSpacing: '-0.02em',
                fontWeight: 300 
              }}
            >
              The future of<br />waste sorting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-xl"
              style={{ 
                letterSpacing: '-0.01em',
                fontWeight: 400 
              }}
            >
              Smart. Universal. Affordable.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="/Oscar AI (1) (1).png" 
                alt="OscarAI Device" 
                className="w-full h-auto hero-image animate-float"
              />
              
              {/* Floating accent elements - changed to green theme */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500/15 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 