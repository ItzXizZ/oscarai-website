import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ShoppingCart, Check, AlertCircle, Mail, Phone, User, MapPin } from 'lucide-react'

const PreOrderForm = () => {
  const [selectedModel, setSelectedModel] = useState('commercial')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const models = [
    {
      id: 'commercial',
      name: 'Commercial',
      price: 149,
      originalPrice: 199,
      description: 'Perfect for homes, offices, and small businesses',
      features: ['Universal mounting', '4-hour battery', 'LED indicators', 'Cloud processing']
    },
    {
      id: 'industrial',
      name: 'Industrial',
      price: 299,
      originalPrice: 399,
      description: 'High-volume processing for facilities and institutions',
      features: ['Heavy-duty mounting', '8-hour battery', 'Advanced display', 'Priority processing']
    }
  ]

  const quantities = [
    { value: '1', label: '1 Unit', discount: 0 },
    { value: '2-5', label: '2-5 Units', discount: 10 },
    { value: '6-10', label: '6-10 Units', discount: 15 },
    { value: '11+', label: '11+ Units', discount: 20 }
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', { ...data, model: selectedModel })
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
  }

  const selectedModelData = models.find(model => model.id === selectedModel)

  if (isSubmitted) {
    return (
      <section id="preorder" className="section-padding bg-gradient-to-br from-secondary-green/5 to-primary-blue/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="bg-secondary-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-secondary-green" />
              </div>
              
              <h2 className="text-3xl font-bold text-text-dark mb-4">
                Pre-Order Confirmed!
              </h2>
              
              <p className="text-lg text-neutral-gray mb-8">
                Thank you for your pre-order! We've sent a confirmation email with your order details. 
                You'll receive updates on our progress and shipping information.
              </p>
              
              <div className="bg-background-light rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-text-dark mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                    <span className="text-neutral-gray">Confirmation email sent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                    <span className="text-neutral-gray">Monthly development updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                    <span className="text-neutral-gray">Shipping notification (Q2 2024)</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
              >
                Place Another Order
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="preorder" className="section-padding bg-gradient-to-br from-secondary-green/5 to-primary-blue/5">
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
            <ShoppingCart className="h-5 w-5 text-secondary-green" />
            <span className="text-secondary-green font-medium">Pre-Order Now</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Reserve Your <span className="text-gradient">OscarAI</span>
          </h2>
          
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Secure your OscarAI with early bird pricing. Limited time offer - 
            save up to $100 and get priority shipping.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-dark mb-6">
                Choose Your Model
              </h3>
              
              <div className="space-y-4">
                {models.map((model) => (
                  <div
                    key={model.id}
                    className={`card cursor-pointer transition-all duration-300 ${
                      selectedModel === model.id 
                        ? 'ring-2 ring-secondary-green bg-secondary-green/5' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <input
                          type="radio"
                          name="model"
                          value={model.id}
                          checked={selectedModel === model.id}
                          onChange={() => setSelectedModel(model.id)}
                          className="w-5 h-5 text-secondary-green"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-text-dark">
                            OscarAI {model.name}
                          </h4>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-blue">
                              ${model.price}
                            </div>
                            <div className="text-sm text-neutral-gray line-through">
                              ${model.originalPrice}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-neutral-gray mb-4">
                          {model.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {model.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-secondary-green" />
                              <span className="text-sm text-neutral-gray">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-text-dark mb-4">Order Summary</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-gray">
                    OscarAI {selectedModelData?.name}
                  </span>
                  <span className="font-medium text-text-dark">
                    ${selectedModelData?.price}
                  </span>
                </div>
                
                <div className="flex justify-between text-secondary-green">
                  <span>Early Bird Savings</span>
                  <span>-${selectedModelData?.originalPrice - selectedModelData?.price}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-text-dark">
                    <span>Total</span>
                    <span className="text-xl">${selectedModelData?.price}</span>
                  </div>
                  <div className="text-sm text-neutral-gray mt-1">
                    + shipping (calculated at checkout)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pre-Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6">
              Your Information
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Full name is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Quantity
                  </label>
                  <select
                    {...register('quantity')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    {quantities.map((qty) => (
                      <option key={qty.value} value={qty.value}>
                        {qty.label} {qty.discount > 0 && `(${qty.discount}% discount)`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  {...register('company')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Your Company Name"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Shipping Address *
                </label>
                <textarea
                  {...register('address', { required: 'Shipping address is required' })}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Street address, city, province, postal code"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Special Requirements or Notes
                </label>
                <textarea
                  {...register('notes')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Installation requirements, delivery preferences, etc."
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  {...register('terms', { required: 'You must agree to the terms' })}
                  className="mt-1 w-5 h-5 text-secondary-green"
                />
                <div className="text-sm">
                  <label className="text-neutral-gray">
                    I agree to the{' '}
                    <a href="#" className="text-primary-blue hover:underline">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-blue hover:underline">
                      Privacy Policy
                    </a>
                    . I understand this is a pre-order with expected delivery in Q2 2024.
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.terms.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-success text-lg py-4 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Reserve Now - $${selectedModelData?.price}`
                )}
              </button>

              <p className="text-sm text-neutral-gray text-center">
                Secure checkout • No payment required until shipping • 30-day money-back guarantee
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PreOrderForm 