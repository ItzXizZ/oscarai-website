import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Cloud, Zap, CheckCircle, ArrowRight } from 'lucide-react'

const Solution = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Item Detection',
      description: 'Item dropped → AI detection → Picture taken',
      details: 'Advanced computer vision instantly captures and analyzes waste items'
    },
    {
      number: '02',
      icon: Cloud,
      title: 'AI Classification',
      description: 'Cloud processing → AI classification → Decision made',
      details: 'Powerful cloud AI processes images and determines correct sorting category'
    },
    {
      number: '03',
      icon: Zap,
      title: 'Smart Sorting',
      description: 'Motor triggered → Item sorted → Perfect bin',
      details: 'Precision motors direct items to the correct compartment with 81% accuracy'
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: '81% Accuracy',
      description: 'Outperforms human sorting by 26.5% in real-world conditions'
    },
    {
      icon: CheckCircle,
      title: 'Universal Design',
      description: 'Retrofits to any existing bin - no infrastructure changes needed'
    },
    {
      icon: CheckCircle,
      title: 'Dual Detection',
      description: 'Computer vision + capacitive sensing for maximum reliability'
    },
    {
      icon: CheckCircle,
      title: 'Cloud Processing',
      description: 'Continuously learning AI model improves accuracy over time'
    }
  ]

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-secondary-green/5 to-primary-blue/5">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-secondary-green/10 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-5 w-5 text-secondary-green" />
            <span className="text-secondary-green font-medium">The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            How <span className="text-gradient">OscarAI</span> Solves This
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered waste sorting that transforms any bin into an intelligent sorting system. 
            Simple installation, powerful results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary-blue" />
                  </div>
                )}

                <div className="card text-center h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary-blue/20 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-primary-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-10 w-10 text-primary-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text-dark mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg font-medium text-primary-blue mb-4">
                    {step.description}
                  </p>

                  <p className="text-neutral-gray leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Why OscarAI Works
            </h3>
            <p className="text-lg text-neutral-gray">
              Advanced technology meets practical design for real-world results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-secondary-green/10 p-3 rounded-xl flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-secondary-green" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-text-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-blue to-secondary-green rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">
              Proven Performance Metrics
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">81%</div>
                <div className="text-lg opacity-90">Real-world accuracy</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">26.5%</div>
                <div className="text-lg opacity-90">Better than humans</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Universal compatibility</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-gray mb-6">
            Ready to revolutionize your waste management?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-primary">
              See Pricing Options
            </a>
            <a href="#technology" className="btn-secondary">
              Learn More About Technology
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution 