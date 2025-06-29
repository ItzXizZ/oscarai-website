import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, BarChart3, Bell, Shield } from 'lucide-react'

const ComingSoon = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const appFeatures = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your school's waste diversion rates and sorting statistics in real-time"
    },
    {
      icon: Bell,
      title: "Technician Alerts",
      description: "Instant notifications when bins need attention or maintenance is required"
    },
    {
      icon: Shield,
      title: "Impact Tracking",
      description: "Monitor environmental impact with detailed reports on waste saved from landfills"
    },
    {
      icon: Smartphone,
      title: "Student Engagement",
      description: "Gamify recycling with leaderboards and achievement badges for students"
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
          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">Coming Soon</h2>
          <p className="apple-subtitle">The OscarAI School Dashboard App</p>
          <p className="apple-text mb-16">
            Empowering schools with comprehensive waste tracking, real-time analytics, 
            and actionable insights to maximize their environmental impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-gray-800 rounded-[3rem] p-4 mx-auto max-w-sm shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-8 h-[600px] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center text-white text-sm mb-8">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="text-center text-white space-y-6">
                    <h3 className="text-2xl font-bold">Lincoln High School</h3>
                    <div className="bg-green-500/20 rounded-2xl p-6">
                      <div className="text-4xl font-bold text-green-400">2,847</div>
                      <div className="text-sm text-gray-300">lbs diverted this month</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-emerald-500/20 rounded-xl p-4">
                        <div className="text-2xl font-bold text-emerald-400">94%</div>
                        <div className="text-xs text-gray-300">Accuracy</div>
                      </div>
                      <div className="bg-teal-500/20 rounded-xl p-4">
                        <div className="text-2xl font-bold text-teal-400">12</div>
                        <div className="text-xs text-gray-300">Active Bins</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - changed to green theme */}
              <div className="absolute -top-4 -right-4 bg-green-500 p-3 rounded-full animate-float">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-emerald-500 p-3 rounded-full animate-float" style={{animationDelay: '1s'}}>
                <Bell className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {appFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="glass-card flex items-start space-x-4"
                  >
                    <div className="bg-green-500/20 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
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

export default ComingSoon 