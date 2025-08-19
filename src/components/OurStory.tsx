import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'prototype-1',
    date: 'January 2025',
    title: 'Prototype 1',
    description: 'The spark. First working prototype.',
    image: '/Prototype 1 Shot.jpg',
    metrics: [
      { value: 'First', label: 'Breakthrough' },
      { value: 'Vision', label: 'Born' }
    ]
  },
  {
    id: 'prototype-2',
    date: 'February 2025',
    title: 'Prototype 2',
    description: 'Enhanced AI recognition. Precision redefined.',
    image: '/Prototype 2 Shot.PNG',
    metrics: [
      { value: 'Smart', label: 'Recognition' },
      { value: 'Enhanced', label: 'Precision' }
    ]
  },
  {
    id: 'prototype-2-5',
    date: 'March 2025',
    title: 'Prototype 2.5',
    description: 'Optimized performance. Vision crystallized.',
    image: '/Prototype 2.5 Shot.PNG',
    metrics: [
      { value: 'Refined', label: 'Engineering' },
      { value: 'Peak', label: 'Performance' }
    ]
  },
  {
    id: 'ingenious-award',
    date: 'April 2025',
    title: 'Ingenious $1,000 Award',
    description: 'Innovation recognized. Vision validated.',
    image: '/Ingenious_Regional_Winner_1000.jpeg',
    metrics: [
      { value: '$1,000', label: 'Award' },
      { value: 'Validated', label: 'Innovation' }
    ]
  },
  {
    id: 'science-fair-regionals',
    date: 'May 2025',
    title: 'Regional Science Fair',
    description: 'Excellence showcased. Champions emerged.',
    image: '/Regional Science Fair.jpg',
    metrics: [
      { value: 'Regional', label: 'Champions' },
      { value: 'Excellence', label: 'Recognized' }
    ]
  },
  {
    id: 'prototype-3',
    date: 'June 2025',
    title: 'Prototype 3',
    description: 'Advanced capabilities. Potential unleashed.',
    image: '/Prototype 3 Shot.jpg',
    metrics: [
      { value: 'Advanced', label: 'Technology' },
      { value: 'Proven', label: 'Concept' }
    ]
  },
  {
    id: 'nationals',
    date: 'July 2025',
    title: 'National Science Fair',
    description: 'Ultimate stage. Legends born.',
    image: '/National Science Fair Shot.JPG',
    metrics: [
      { value: 'National', label: 'Stage' },
      { value: 'Legend', label: 'Status' }
    ]
  },
  {
    id: 'prototype-4',
    date: 'August 2025',
    title: 'Prototype 4',
    description: 'Engineering pinnacle. Revolution ready.',
    image: '/Prototype 4 Shot.jpg',
    metrics: [
      { value: 'Ultimate', label: 'Design' },
      { value: 'Ready', label: 'For Impact' }
    ]
  },
  {
    id: 'oscar-ai-founding',
    date: 'September 2025',
    title: 'Founding of OscarAI',
    description: 'Vision becomes reality. Company born.',
    image: '/OscarAI_logo.png',
    metrics: [
      { value: 'Company', label: 'Founded' },
      { value: 'Future', label: 'Begins' }
    ]
  }
];






const OurStory: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;
      
      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on scroll position
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (rect.height + windowHeight)
      ));
      
      // Update CSS custom property
      timeline.style.setProperty('--timeline-progress', `${progress * 100}%`);
      

    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="our-story" id="story">
      {/* Majestic Header */}
      <div className="story-hero">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="container"
        >
          <div className="story-hero-content">
            <h2 className="story-hero-title">
              <span className="title-line">Our Story</span>
            </h2>

          </div>
        </motion.div>
      </div>

      {/* Epic Timeline Gallery */}
      <div className="story-gallery">
        <div className="gallery-container">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="gallery-image-container">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="gallery-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="image-fallback-gallery" style={{ display: 'none' }}>
                  <span>{event.title}</span>
                </div>
                <div className="gallery-overlay">
                  <div className="gallery-date">{event.date}</div>
                  <h3 className="gallery-title">{event.title}</h3>
                  <p className="gallery-description">{event.description}</p>
                  <div className="gallery-metrics">
                    {event.metrics?.map((metric, idx) => (
                      <div key={idx} className="gallery-metric">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default OurStory;
