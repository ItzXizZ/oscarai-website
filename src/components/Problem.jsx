import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Trash2, TrendingDown } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      stat: '1/3',
      title: 'Incorrect Sorting',
      description: 'Of all bin contents are incorrectly sorted, causing massive contamination'
    },
    {
      icon: DollarSign,
      stat: '$1M+',
      title: 'Annual Costs',
      description: 'Municipalities spend millions annually dealing with contamination issues'
    },
    {
      icon: TrendingDown,
      stat: '30%',
      title: 'Recycling Rate',
      description: 'Canada\'s national recycling rate remains disappointingly low'
    },
    {
      icon: Trash2,
      stat: '75%',
      title: 'Landfill Waste',
      description: 'Of recyclable materials end up in landfills due to contamination'
    }
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
          <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span className="text-red-700 font-medium">Critical Problem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Canada's <span className="text-red-500">$1 Million</span> Contamination Crisis
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Current waste sorting systems are failing our communities and environment. 
            The cost of contamination is spiraling out of control.
          </p>
        </motion.div>

        {/* Problem Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                <problem.icon className="h-10 w-10 text-red-500" />
              </div>
              
              <div className="text-4xl font-bold text-red-500 mb-2">
                {problem.stat}
              </div>
              
              <h3 className="text-xl font-semibold text-text-dark mb-3">
                {problem.title}
              </h3>
              
              <p className="text-neutral-gray leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Current State */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-dark mb-6">
                Current Waste Sorting
              </h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Contaminated bins visualization */}
                  <div className="bg-red-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="bg-red-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="bg-green-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="text-sm text-neutral-gray">
                  2 out of 3 bins contaminated
                </div>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-neutral-gray">Human error prone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-neutral-gray">Inconsistent sorting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-neutral-gray">High contamination</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <div className="text-6xl text-neutral-gray">→</div>
            </div>

            {/* Future State */}
            <div className="text-center md:hidden">
              <div className="text-4xl text-neutral-gray mb-4">↓</div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-dark mb-6">
                With OscarAI
              </h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Clean bins visualization */}
                  <div className="bg-green-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="bg-green-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="bg-green-100 h-16 rounded-lg flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="text-sm text-neutral-gray">
                  3 out of 3 bins properly sorted
                </div>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-gray">AI-powered accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-gray">Consistent performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-gray">81% accuracy rate</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-gray mb-6">
            It's time for a solution that actually works.
          </p>
          <a href="#solution" className="btn-primary">
            See How OscarAI Solves This
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem 