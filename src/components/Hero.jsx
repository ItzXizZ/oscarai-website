import React from 'react'
import { motion } from 'framer-motion'
import { Play, Award, Star, TrendingUp } from 'lucide-react'

const Hero = () => {
  const stats = [
    { value: '81%', label: 'Sorting Accuracy' },
    { value: '26.5%', label: 'Better Than Humans' },
    { value: '<$150', label: 'Affordable Price' },
    { value: '100%', label: 'Universal Design' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-transparent to-secondary-green/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-blue/20"
            >
              <Award className="h-4 w-4 text-accent-orange" />
              <span className="text-sm font-medium text-text-dark">Award-Winning Innovation</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Meet{' '}
              <span className="text-gradient">OscarAI</span>
              <br />
              The Future of{' '}
              <span className="text-secondary-green">Waste Sorting</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-gray max-w-2xl leading-relaxed"
            >
              Intelligent waste sorting system that retrofits to any bin. 
              <strong className="text-text-dark"> 81% accuracy, universal design, under $150.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#preorder" className="btn-primary text-lg px-8 py-4">
                Pre-Order Now - Early Bird $99
              </a>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo Video</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-blue">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-gray font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Video/Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Video Placeholder */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden animate-float">
              <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-secondary-green/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full inline-block">
                    <Play className="h-12 w-12 text-primary-blue" />
                  </div>
                  <div className="text-text-dark font-semibold">
                    Watch OscarAI in Action
                  </div>
                  <div className="text-neutral-gray text-sm">
                    See 81% accuracy live demo
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-green text-white p-3 rounded-full shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-orange text-white p-3 rounded-full shadow-lg">
                <Star className="h-6 w-6" />
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-6 mt-8"
            >
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <div className="text-xs text-neutral-gray">Featured in</div>
                <div className="font-semibold text-text-dark">TechCrunch</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <div className="text-xs text-neutral-gray">Winner</div>
                <div className="font-semibold text-text-dark">Innovation Award</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <div className="text-xs text-neutral-gray">Backed by</div>
                <div className="font-semibold text-text-dark">Top VCs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 