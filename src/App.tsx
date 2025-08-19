import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Leadership from './components/Leadership';
import BusinessPlan from './components/BusinessPlan';
import PreOrder from './components/PreOrder';
import BackToTop from './components/BackToTop';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <Leadership />
        <BusinessPlan />
        <PreOrder />
      </main>
      <BackToTop />
    </div>
  );
};

export default App;
