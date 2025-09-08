import React from 'react';
import './BusinessPlan.css';

interface StrategyPhase {
  id: string;
  name: string;
  timeline: string;
  stage: string;
  status: 'completed' | 'current' | 'upcoming';
  goals: string[];
  description: string;
  keyMetrics: string[];
  deliverables: string[];
}



const BusinessPlan: React.FC = () => {
  // Commented out unused variables for future roadmap feature
  // const [selectedPhase, setSelectedPhase] = useState<string | null>('phase-1');

  // const strategyPhases: StrategyPhase[] = [
    {
      id: 'phase-1',
      name: 'Advertising Strategy',
      timeline: 'Aug 1-21, 2025',
      stage: 'Foundation & Growth',
      status: 'current',
      goals: ['Discord Development', 'LinkedIn Advertising', 'Social Media Expansion', 'Engineering Intern Recruitment'],
      description: 'Building social media foundation through Discord and LinkedIn, then expanding to Instagram and TikTok for viral growth.',
      keyMetrics: ['50 Discord members by Aug 1st', '10 engineering interns by Aug 7th', '1,000+ followers by Aug 21st'],
      deliverables: ['Social media team of 15 members', 'UGC strategy implementation', 'Pre-order website launch']
    },
    {
      id: 'phase-2',
      name: 'Prototyping & Shipping',
      timeline: 'Aug 5 - Oct 2025',
      stage: 'Product Development',
      status: 'upcoming',
      goals: ['Design Finalization', 'Initial Shipping', 'Commercial Readiness', 'Cloud Integration'],
      description: 'Transitioning from prototype to market-ready product with cloud functionality and school partnerships.',
      keyMetrics: ['11 units shipped by Aug 31st', '25+ units by Sep 30th', '$10,000+ revenue by Dec 2025'],
      deliverables: ['Beta testing program', 'School app development', 'Factory production transition']
    },
    {
      id: 'phase-3',
      name: 'School Partnerships',
      timeline: 'Aug 25, 2025+',
      stage: 'Market Expansion',
      status: 'upcoming',
      goals: ['Email Outreach', 'Media Relations', 'Educational Services', 'Institutional Integration'],
      description: 'Establishing credibility through educational partnerships and comprehensive sustainability programming.',
      keyMetrics: ['100+ school emails by Aug 25th', '10+ official partnerships', 'Media coverage achieved'],
      deliverables: ['School signup portal', 'Workshop development', 'Lecture series creation']
    }
  ];





  // Commented out unused helper functions for future roadmap feature
  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'completed': return '#22c55e';
  //     case 'current': return '#3b82f6';
  //     case 'upcoming': return '#f59e0b';
  //     default: return '#6b7280';
  //   }
  // };

  // const getStatusLabel = (status: string) => {
  //   switch (status) {
  //     case 'completed': return 'Completed';
  //     case 'current': return 'In Progress';
  //     case 'upcoming': return 'Planned';
  //     default: return 'Unknown';
  //   }
  // };

  return (
    <div className="business-plan" id="fundraising">
      {/* Roadmap Section - Commented Out */}
      {/* <section className="business-plan-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="business-plan-hero-content"
          >
            <h1 className="business-plan-title">
              <span className="title-line">OscarAI RoadMap</span>
            </h1>

          </motion.div>
        </div>
      </section>

      <section className="strategy-timeline">
        <div className="container">


          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {strategyPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className={`timeline-item ${selectedPhase === phase.id ? 'selected' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
              >
                <div className="timeline-marker" style={{ backgroundColor: getStatusColor(phase.status) }}>
                  <div className="marker-inner"></div>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-card">
                    <div className="card-header">
                      <div className="round-info">
                        <h3 className="round-name">{phase.name}</h3>
                        <div className="round-details">
                          <span className="round-amount">{phase.stage}</span>
                          <span className="round-date">{phase.timeline}</span>
                        </div>
                      </div>
                      <div 
                        className="round-status"
                        style={{ color: getStatusColor(phase.status) }}
                      >
                        {getStatusLabel(phase.status)}
                      </div>
                    </div>
                    
                    <p className="round-description">{phase.description}</p>
                    
                    {selectedPhase === phase.id && (
                      <motion.div
                        className="round-details-expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="detail-section">
                          <h4>Strategic Goals</h4>
                          <div className="investors-list">
                            {phase.goals.map((goal, idx) => (
                              <span key={idx} className="investor-tag">{goal}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="detail-section">
                          <h4>Key Metrics</h4>
                          <ul className="use-of-funds">
                            {phase.keyMetrics.map((metric, idx) => (
                              <li key={idx}>{metric}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="detail-section">
                          <h4>Deliverables</h4>
                          <ul className="use-of-funds">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx}>{deliverable}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}




    </div>
  );
};

export default BusinessPlan;
