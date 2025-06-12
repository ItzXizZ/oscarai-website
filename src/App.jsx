import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import ProductVariants from './components/ProductVariants'
import Technology from './components/Technology'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import PreOrderForm from './components/PreOrderForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background-light text-text-dark font-inter">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ProductVariants />
        <Technology />
        <SocialProof />
        <Pricing />
        <PreOrderForm />
      </main>
      <Footer />
    </div>
  )
}

export default App 