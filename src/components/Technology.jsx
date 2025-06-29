import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Eye, Zap, BarChart3, Cpu, Cloud } from 'lucide-react'

const Technology = () => {
  const [activeDemo, setActiveDemo] = useState('vision')

  const techFeatures = [
    {
      icon: Brain,
      title: 'Advanced AI Classification',
      description: 'Deep learning models trained on millions of waste images for accurate identification',
      details: [
        'Computer vision neural networks',
        'Real-time image processing',
        'Continuous learning algorithms',
        '99.2% object recognition accuracy'
      ]
    },
    {
      icon: Eye,
      title: 'Dual Detection System',
      description: 'Computer vision combined with capacitive sensing for maximum reliability',
      details: [
        'High-resolution camera system',
        'Capacitive touch sensing',
        'Material composition analysis',
        'Multi-modal verification'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Processing Power',
      description: 'Leverages cloud computing for instant classification and continuous improvement',
      details: [
        'Sub-second processing time',
        'Global model updates',
        'Edge computing optimization',
        'Offline backup processing'
      ]
    }
  ]

  const performanceData = [
    { category: 'Plastic Bottles', accuracy: 95, color: 'bg-blue-500' },
    { category: 'Paper/Cardboard', accuracy: 88, color: 'bg-green-500' },
    { category: 'Metal Cans', accuracy: 92, color: 'bg-yellow-500' },
    { category: 'Glass', accuracy: 85, color: 'bg-purple-500' },
    { category: 'Organic Waste', accuracy: 78, color: 'bg-orange-500' },
    { category: 'General Waste', accuracy: 83, color: 'bg-gray-500' }
  ]

  const demoItems = [
    { name: 'Plastic Bottle', confidence: 94, category: 'Recyclable', color: 'text-green-600' },
    { name: 'Coffee Cup', confidence: 87, category: 'Compost', color: 'text-orange-600' },
    { name: 'Aluminum Can', confidence: 96, category: 'Recyclable', color: 'text-green-600' },
    { name: 'Food Wrapper', confidence: 91, category: 'Waste', color: 'text-red-600' }
  ]

  return (
    <section id="technology" className="section-padding bg-gradient-to-br from-primary-blue/5 to-secondary-green/5">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-blue/10 px-4 py-2 rounded-full mb-6">
            <Cpu className="h-5 w-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Advanced Technology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            The <span className="text-gradient">AI Brain</span> Behind OscarAI
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Cutting-edge artificial intelligence and dual-detection technology working together 
            to deliver unprecedented sorting accuracy.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Live AI Classification Demo
            </h3>
            <p className="text-lg text-neutral-gray">
              See how OscarAI identifies and categorizes waste items in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo Interface */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-blue/10 to-secondary-green/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-text-dark">Camera Feed</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Live</span>
                  </div>
                </div>
                
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="h-12 w-12 text-primary-blue" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-neutral-gray mb-2">Processing Status</div>
                  <div className="bg-secondary-green/20 rounded-full h-2">
                    <div className="bg-secondary-green h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Demo Controls */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveDemo('vision')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    activeDemo === 'vision' 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-gray-100 text-neutral-gray hover:bg-gray-200'
                  }`}
                >
                  Computer Vision
                </button>
                <button
                  onClick={() => setActiveDemo('capacitive')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    activeDemo === 'capacitive' 
                      ? 'bg-primary-blue text-white' 
                      : 'bg-gray-100 text-neutral-gray hover:bg-gray-200'
                  }`}
                >
                  Capacitive Sensing
                </button>
              </div>
            </div>

            {/* Classification Results */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-dark mb-4">
                Recent Classifications
              </h4>
              
              {demoItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background-light rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-text-dark">{item.name}</span>
                    <span className={`font-semibold ${item.color}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-blue h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-text-dark">
                      {item.confidence}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="bg-primary-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-10 w-10 text-primary-blue" />
              </div>
              
              <h3 className="text-2xl font-bold text-text-dark mb-4">
                {feature.title}
              </h3>
              
              <p className="text-neutral-gray mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2 text-left">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                    <span className="text-sm text-neutral-gray">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Performance Charts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Category-Specific Performance
            </h3>
            <p className="text-lg text-neutral-gray">
              OscarAI's accuracy across different waste categories
            </p>
          </div>

          <div className="space-y-6">
            {performanceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-32 text-right">
                  <span className="font-medium text-text-dark">{item.category}</span>
                </div>
                
                <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.accuracy}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${item.color} h-4 rounded-full`}
                  ></motion.div>
                </div>
                
                <div className="w-16 text-left">
                  <span className="font-bold text-text-dark">{item.accuracy}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-secondary-green/10 px-4 py-2 rounded-full">
              <BarChart3 className="h-5 w-5 text-secondary-green" />
              <span className="text-secondary-green font-medium">
                Overall Accuracy: 81% (26.5% better than human sorting)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-blue to-secondary-green rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Technical Specifications
            </h3>
            <p className="text-lg opacity-90">
              Enterprise-grade technology in a consumer-friendly package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">&lt; 500ms</div>
              <div className="opacity-90">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.2%</div>
              <div className="opacity-90">Object Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Cloud Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">256-bit</div>
              <div className="opacity-90">Encryption</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology 