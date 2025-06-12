import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Building2 } from 'lucide-react'

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Commercial',
      icon: Zap,
      price: 149,
      originalPrice: 199,
      savings: 50,
      description: 'Perfect for homes, offices, and small businesses',
      popular: true,
      features: [
        'Universal mounting system',
        '4-hour battery life',
        'LED sorting indicators',
        'Cloud AI processing',
        'Mobile app integration',
        'Basic analytics dashboard',
        'Email support',
        '1-year warranty'
      ],
      notIncluded: [
        'Advanced analytics suite',
        'Multi-bin coordination',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Industrial',
      icon: Building2,
      price: 299,
      originalPrice: 399,
      savings: 100,
      description: 'High-volume processing for facilities and institutions',
      popular: false,
      features: [
        'Heavy-duty mounting system',
        '8-hour battery life',
        'Advanced LED display',
        'Priority cloud processing',
        'Mobile app integration',
        'Advanced analytics suite',
        'Multi-bin coordination',
        'Priority phone support',
        '2-year warranty',
        'Custom integrations',
        'On-site installation',
        'Training included'
      ],
      notIncluded: []
    }
  ]

  const faqs = [
    {
      question: 'What\'s included in the pre-order?',
      answer: 'Your pre-order includes the OscarAI device, mounting hardware, setup guide, and 1-year cloud service subscription.'
    },
    {
      question: 'When will my OscarAI ship?',
      answer: 'We expect to begin shipping in Q2 2024. Pre-order customers will be prioritized and receive tracking information.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! We offer a 30-day money-back guarantee from the date of delivery if you\'re not completely satisfied.'
    },
    {
      question: 'Can I upgrade later?',
      answer: 'Absolutely! Commercial customers can upgrade to Industrial features through our software upgrade program.'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-background-light to-white">
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
            <Star className="h-5 w-5 text-secondary-green" />
            <span className="text-secondary-green font-medium">Early Bird Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Choose Your <span className="text-gradient">OscarAI</span>
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI waste sorting technology at an unbeatable pre-order price. 
            Limited time offer - save up to $100!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card relative overflow-hidden ${
                tier.popular ? 'ring-2 ring-secondary-green scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-secondary-green text-white px-6 py-2 rounded-bl-2xl">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span className="font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className="bg-primary-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tier.icon className="h-10 w-10 text-primary-blue" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-2">
                  OscarAI {tier.name}
                </h3>
                
                <p className="text-neutral-gray mb-6">
                  {tier.description}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-5xl font-bold text-primary-blue">
                      ${tier.price}
                    </span>
                    <div className="text-left">
                      <div className="text-lg text-neutral-gray line-through">
                        ${tier.originalPrice}
                      </div>
                      <div className="text-sm text-secondary-green font-medium">
                        Save ${tier.savings}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-neutral-gray">
                    Early Bird Pricing • Limited Time
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="#preorder" 
                  className={`w-full text-center block mb-8 ${
                    tier.popular ? 'btn-success' : 'btn-primary'
                  }`}
                >
                  Pre-Order {tier.name} - ${tier.price}
                </a>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-text-dark">What's Included:</h4>
                
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-secondary-green flex-shrink-0" />
                    <span className="text-neutral-gray">{feature}</span>
                  </div>
                ))}

                {tier.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-text-dark mt-6">Not Included:</h4>
                    {tier.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                        <div className="w-5 h-5 border-2 border-neutral-gray rounded flex-shrink-0"></div>
                        <span className="text-neutral-gray">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Why Pre-Order Now?
            </h3>
            <p className="text-lg text-neutral-gray">
              Limited-time benefits for early supporters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-green">$</span>
              </div>
              <h4 className="font-semibold text-text-dark mb-2">Save Up to $100</h4>
              <p className="text-neutral-gray text-sm">
                Early bird pricing won't last forever. Lock in your savings today.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-blue">1st</span>
              </div>
              <h4 className="font-semibold text-text-dark mb-2">Priority Shipping</h4>
              <p className="text-neutral-gray text-sm">
                Pre-order customers get first access when we start shipping in Q2 2024.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-orange" />
              </div>
              <h4 className="font-semibold text-text-dark mb-2">Exclusive Updates</h4>
              <p className="text-neutral-gray text-sm">
                Get behind-the-scenes development updates and beta access to new features.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text-dark mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-neutral-gray">
              Everything you need to know about your OscarAI pre-order
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h4 className="font-semibold text-text-dark mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-gray leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-blue to-secondary-green rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Waste Management?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations who have already pre-ordered their OscarAI. 
              Limited early bird pricing ends soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#preorder" className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Pre-Order Commercial - $149
              </a>
              <a href="#preorder" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                Pre-Order Industrial - $299
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 