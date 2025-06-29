import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trash2, School, Users, Leaf } from 'lucide-react'

const Statistics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Trash2,
      number: "2.5M",
      label: "Pounds of Waste Diverted from Landfills",
      color: "text-green-400"
    },
    {
      icon: School,
      number: "150+",
      label: "Schools Using OscarAI",
      color: "text-blue-400"
    },
    {
      icon: Users,
      number: "50K+",
      label: "Students Empowered",
      color: "text-purple-400"
    },
    {
      icon: Leaf,
      number: "94%",
      label: "Sorting Accuracy Rate",
      color: "text-pink-400"
    }
  ]

  return (
    <section ref={ref} className="apple-section bg-gradient-to-b from-gray-900 to-black">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="apple-title">Making a Real Impact</h2>
          <p className="apple-subtitle">The numbers speak for themselves</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="glass-card hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex p-4 rounded-full mb-6 ${stat.color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`stat-number ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              26.5% Better Than Human Classification
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our AI doesn't just match human performance — it surpasses it. 
              With continuous learning and real-time adaptation, OscarAI gets better every day.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">81.5%</div>
                <div className="text-gray-400">Real-World Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-gray-400">Lab Test Results</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">55%</div>
                <div className="text-gray-400">Human Baseline</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics 