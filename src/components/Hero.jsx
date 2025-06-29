import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative px-4 py-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5"
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
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8 leading-tight"
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
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg"
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 