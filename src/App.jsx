import React from 'react'
import { motion } from 'framer-motion'
// import Header from './components/Header'
import Hero from './components/Hero'
import DesignIntro from './components/DesignIntro'
import IndustrialDesign from './components/IndustrialDesign'
import LeadershipStructure from './components/LeadershipStructure'
import ECommerce from './components/ECommerce'
// import Statistics from './components/Statistics'
import ComingSoon from './components/ComingSoon'

function App() {
  return (
    <div className="bg-black text-white font-sf-pro overflow-x-hidden">
      {/* <Header /> */}
      <main>
        <Hero />
        <DesignIntro />
        <IndustrialDesign />
        <LeadershipStructure />
        <ECommerce />
        {/* <Statistics /> */}
        <ComingSoon />
      </main>
    </div>
  )
}

export default App
