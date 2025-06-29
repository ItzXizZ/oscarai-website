import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Users, Award, ChevronRight, Video, School, CheckCircle, Gift, Leaf } from 'lucide-react'
import GoogleDocsService from '../services/googleDocs'

const AmbassadorProgram = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    grade: '',
    description: '',
    agreesToTerms: false
  })

  const [wordCount, setWordCount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (wordCount < 80 || wordCount > 120) {
      alert('Please ensure your description is between 80-120 words.')
      return
    }
    if (!formData.agreesToTerms) {
      alert('Please agree to the program terms and conditions.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Create Google Doc with application data
      const googleDocsService = new GoogleDocsService()
      await googleDocsService.initialize()
      
      const result = await googleDocsService.createApplicationDocument(formData)
      
      if (result.success) {
        alert(`Thank you for your application! Your application has been saved to Google Docs and we'll review it within 1-2 weeks.`)
        console.log('Application saved to Google Docs:', result)
      } else {
        alert('Your application was received but there was an issue saving to Google Docs. We have your information and will review it within 1-2 weeks.')
        console.error('Google Docs creation failed:', result.error)
      }
      
      // Reset form
      setFormData({ name: '', email: '', school: '', grade: '', description: '', agreesToTerms: false })
      setWordCount(0)
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Thank you for your application! We\'ll review it and get back to you within 1-2 weeks.')
      
      // Reset form even if there's an error
      setFormData({ name: '', email: '', school: '', grade: '', description: '', agreesToTerms: false })
      setWordCount(0)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

    if (name === 'description') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0)
      setWordCount(words.length)
    }
  }

  const expectations = [
    {
      icon: School,
      title: "Model Deployment",
      description: "Receive and install your FREE OscarAI unit at your school with our technical support"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Submit 5 videos per week showcasing OscarAI in action at your school"
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Lead sustainability initiatives and educate peers about smart waste sorting"
    },
    {
      icon: CheckCircle,
      title: "Impact Documentation",
      description: "Track and report sorting accuracy and environmental impact metrics"
    }
  ]

  return (
    <section ref={ref} className="apple-section bg-black" id="ambassadors">
      <div className="apple-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 mb-8"
          >
            <Users className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium text-green-400">Student Leadership</span>
          </motion.div>

          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            School Ambassador Program
          </h2>
          <p className="apple-subtitle">Empowering the next generation of environmental leaders</p>
          
          {/* Enhanced FREE Product Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/30 rounded-3xl px-10 py-8 inline-block mt-8 group-hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center justify-center space-x-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-2xl border border-green-400/30">
                  <Gift className="w-10 h-10 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">FREE OscarAI Unit</div>
                  <div className="text-xl text-gray-300 font-light">For accepted student ambassadors</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-10"
          >
            <div className="glass-card text-left">
              <h3 className="text-3xl font-semibold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Program Responsibilities
              </h3>
              
              <div className="space-y-8">
                {expectations.map((expectation, index) => {
                  const IconComponent = expectation.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-green-500/20 p-3 rounded-2xl flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2" style={{ letterSpacing: '-0.01em' }}>
                          {expectation.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {expectation.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="glass-card text-left"
            >
              <h4 className="text-2xl font-semibold mb-4" style={{ letterSpacing: '-0.01em' }}>
                📱 Social Media Engagement
              </h4>
              <div className="space-y-3 text-gray-300">
                <p>• Document weekly progress with 5 engaging videos</p>
                <p>• Tag @OscarAI and use #WasteSortingRevolution</p>
                <p>• Share measurable environmental impact data</p>
                <p>• Participate in monthly ambassador community calls</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="glass-card">
              <h3 className="text-3xl font-semibold mb-8 text-center" style={{ letterSpacing: '-0.02em' }}>
                Apply to Become an Ambassador
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="school"
                    placeholder="School Name & Location"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select Grade Level</option>
                    <option value="9">9th Grade</option>
                    <option value="10">10th Grade</option>
                    <option value="11">11th Grade</option>
                    <option value="12">12th Grade</option>
                    <option value="college">College</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="description"
                    placeholder="Why do you want to lead environmental change at your school? Describe your passion for sustainability, technology, and community leadership. How will this initiative align with your goals? (100 words)"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  />
                  <div className={`text-sm mt-2 ${
                    wordCount < 80 ? 'text-red-400' : 
                    wordCount > 120 ? 'text-red-400' : 
                    'text-green-400'
                  }`}>
                    {wordCount}/100 words {
                      wordCount < 80 ? '(minimum 80)' : 
                      wordCount > 120 ? '(maximum 120)' : 
                      '✓'
                    }
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreesToTerms"
                    checked={formData.agreesToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-green-600 bg-white/10 border-white/20 rounded focus:ring-green-500"
                  />
                  <label className="text-sm text-gray-300 leading-relaxed">
                    I agree to the program requirements including weekly video submissions, 
                    social media engagement, and granting my school rights to be featured in 
                    OscarAI marketing materials. I understand this is a 6-month commitment to 
                    environmental leadership and technology innovation.
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-apple w-full flex items-center justify-center space-x-3 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                  {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                  {isSubmitting && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AmbassadorProgram 