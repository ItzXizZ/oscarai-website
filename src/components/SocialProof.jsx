import React from 'react'
import { motion } from 'framer-motion'
import { Award, Star, Quote, Users, TrendingUp, Globe } from 'lucide-react'

const SocialProof = () => {
  const awards = [
    {
      title: 'Innovation Excellence Award',
      organization: 'Tech Innovation Summit 2024',
      description: 'Recognized for breakthrough AI waste sorting technology'
    },
    {
      title: 'Sustainability Champion',
      organization: 'Green Tech Awards',
      description: 'Leading the charge in environmental technology solutions'
    },
    {
      title: 'Best AI Application',
      organization: 'AI & Machine Learning Conference',
      description: 'Outstanding application of AI in environmental sustainability'
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Environmental Scientist',
      company: 'University of Toronto',
      content: 'OscarAI represents a paradigm shift in waste management. The 81% accuracy rate we observed in our trials is unprecedented.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Facilities Manager',
      company: 'GreenTech Corp',
      content: 'We\'ve been beta testing OscarAI for 6 months. The reduction in contamination has saved us thousands in processing costs.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Lisa Thompson',
      role: 'Sustainability Director',
      company: 'EcoBuilding Solutions',
      content: 'Finally, a waste sorting solution that actually works. Our recycling rates have improved by 40% since installation.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ]

  const mediaLogos = [
    { name: 'TechCrunch', logo: '/api/placeholder/120/40' },
    { name: 'Wired', logo: '/api/placeholder/120/40' },
    { name: 'Fast Company', logo: '/api/placeholder/120/40' },
    { name: 'MIT Technology Review', logo: '/api/placeholder/120/40' },
    { name: 'Forbes', logo: '/api/placeholder/120/40' },
    { name: 'The Verge', logo: '/api/placeholder/120/40' }
  ]

  const stats = [
    { value: '10,000+', label: 'Beta Testers', icon: Users },
    { value: '95%', label: 'Satisfaction Rate', icon: Star },
    { value: '40%', label: 'Recycling Improvement', icon: TrendingUp },
    { value: '15+', label: 'Countries Interested', icon: Globe }
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
          <div className="inline-flex items-center space-x-2 bg-accent-orange/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-5 w-5 text-accent-orange" />
            <span className="text-accent-orange font-medium">Recognition & Trust</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            OscarAI has earned recognition from top organizations and the trust of 
            thousands of beta users worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-blue" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-accent-orange/5 to-primary-blue/5 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Award-Winning Innovation
            </h3>
            <p className="text-lg text-neutral-gray">
              Recognized by leading organizations for technological excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="bg-accent-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-orange" />
                </div>
                
                <h4 className="text-xl font-bold text-text-dark mb-2">
                  {award.title}
                </h4>
                
                <div className="text-primary-blue font-medium mb-3">
                  {award.organization}
                </div>
                
                <p className="text-neutral-gray text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              What Our Beta Users Say
            </h3>
            <p className="text-lg text-neutral-gray">
              Real feedback from professionals testing OscarAI in the field
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary-blue/30 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-orange fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-neutral-gray leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary-blue">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-gray">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-8">
            Featured In
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {mediaLogos.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-12"
              >
                <div className="bg-neutral-gray/20 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-neutral-gray text-sm">
                    {media.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-blue to-secondary-green rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Thousands of Satisfied Users
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the waste sorting revolution. Pre-order your OscarAI today 
              and join the community of forward-thinking organizations.
            </p>
            <a href="#preorder" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Pre-Order Now - Limited Time Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof 