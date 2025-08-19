import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  level: number;
  image: string;
  bio: string;
  achievements: string[];
  connections: string[];
}

const Leadership: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [activeDepartment, setActiveDepartment] = useState<string>('all');

const leadershipData: LeadershipMember[] = [
    // Level 1 - Department Heads
    {
      id: 'management-head',
      name: 'Ethan Curtis',
      title: 'Head of Management',
      role: 'Strategic Leadership',
      department: 'Management',
      level: 1,
      image: '/ethan.jpg',
      bio: 'Leading OscarAI\'s strategic vision and operational excellence.',
      achievements: ['Founded OscarAI', 'Strategic Visionary', 'Innovation Leader'],
      connections: ['management-chapter-1', 'management-chapter-2']
    },
    {
      id: 'engineering-head',
      name: 'Elmond Aphiwetsa',
      title: 'Head of Engineering',
      role: 'Technical Leadership',
      department: 'Engineering',
      level: 1,
      image: '/elmond.jpg',
      bio: 'Driving cutting-edge AI development and technical innovation.',
      achievements: ['AI Architecture Expert', 'Full-Stack Development', 'Technical Innovation'],
      connections: ['engineering-chapter-1', 'engineering-chapter-2']
    },
    {
      id: 'marketing-head',
      name: 'Tanjim Chowdhury',
      title: 'Head of Marketing',
      role: 'Brand & Growth',
      department: 'Marketing',
      level: 1,
      image: '/tanjim.png',
      bio: 'Building OscarAI\'s brand and driving market expansion.',
      achievements: ['Digital Marketing Expert', 'Brand Strategy', 'Growth Hacking'],
      connections: ['marketing-chapter-1', 'marketing-chapter-2']
    },
    // Finance head temporarily hidden
    // {
    //   id: 'finance-head',
    //   name: 'TBD',
    //   title: 'Head of Finance',
    //   role: 'Financial Strategy',
    //   department: 'Finance',
    //   level: 1,
    //   image: '/generic.png',
    //   bio: 'Position open for an experienced financial leader.',
    //   achievements: ['Position Available', 'Join Our Team', 'Shape the Future'],
    //   connections: ['finance-chapter-1']
    // },
    
    // Level 2 - Chapter Heads
    {
      id: 'management-chapter-1',
      name: 'TBD',
      title: 'Chapter Head - Operations',
      role: 'Operational Excellence',
      department: 'Management',
      level: 2,
      image: '/generic.png',
      bio: 'Leading operational strategy and process optimization.',
      achievements: ['Position Available', 'Operations Expert Needed', 'Growth Opportunity'],
      connections: []
    },
    {
      id: 'management-chapter-2',
      name: 'TBD',
      title: 'Chapter Head - Strategy',
      role: 'Strategic Planning',
      department: 'Management',
      level: 2,
      image: '/generic.png',
      bio: 'Developing long-term strategic initiatives and partnerships.',
      achievements: ['Position Available', 'Strategy Expert Needed', 'Leadership Role'],
      connections: []
    },
    
    {
      id: 'engineering-chapter-1',
      name: 'TBD',
      title: 'Chapter Head - AI/ML',
      role: 'AI Development',
      department: 'Engineering',
      level: 2,
      image: '/generic.png',
      bio: 'Leading AI research and machine learning development.',
      achievements: ['Position Available', 'AI Expert Needed', 'Innovation Focus'],
      connections: ['eng-team-1', 'eng-team-2']
    },
    {
      id: 'engineering-chapter-2',
      name: 'TBD',
      title: 'Chapter Head - Platform',
      role: 'Platform Development',
      department: 'Engineering',
      level: 2,
      image: '/generic.png',
      bio: 'Building scalable systems and infrastructure.',
      achievements: ['Position Available', 'Platform Expert Needed', 'Technical Leadership'],
      connections: ['eng-team-3', 'eng-team-4']
    },
    
    {
      id: 'marketing-chapter-1',
      name: 'TBD',
      title: 'Chapter Head - Digital',
      role: 'Digital Marketing',
      department: 'Marketing',
      level: 2,
      image: '/generic.png',
      bio: 'Leading digital marketing campaigns and online presence.',
      achievements: ['Position Available', 'Digital Expert Needed', 'Growth Focus'],
      connections: ['marketing-team-1', 'marketing-team-2']
    },
    {
      id: 'marketing-chapter-2',
      name: 'TBD',
      title: 'Chapter Head - Brand',
      role: 'Brand Strategy',
      department: 'Marketing',
      level: 2,
      image: '/generic.png',
      bio: 'Developing brand identity and strategic partnerships.',
      achievements: ['Position Available', 'Brand Expert Needed', 'Creative Leadership'],
      connections: ['marketing-team-3']
    },
    
    // Finance chapter head temporarily hidden
    // {
    //   id: 'finance-chapter-1',
    //   name: 'TBD',
    //   title: 'Chapter Head - Operations',
    //   role: 'Financial Operations',
    //   department: 'Finance',
    //   level: 2,
    //   image: '/generic.png',
    //   bio: 'Managing financial operations and strategic planning.',
    //   achievements: ['Position Available', 'Finance Expert Needed', 'Strategic Role'],
    //   connections: []
    // },
    
    // Level 3 - Team Members
    {
      id: 'eng-team-1',
      name: 'Alex Thompson',
      title: 'Senior AI Engineer',
      role: 'Computer Vision',
      department: 'Engineering',
      level: 3,
      image: '/generic.png',
      bio: 'Developing advanced computer vision algorithms for waste classification.',
      achievements: ['Computer Vision Expert', 'Published Researcher', 'Innovation Driver'],
      connections: []
    },
    {
      id: 'eng-team-2',
      name: 'Sarah Chen',
      title: 'ML Engineer',
      role: 'Machine Learning',
      department: 'Engineering',
      level: 3,
      image: '/generic.png',
      bio: 'Building and optimizing machine learning models.',
      achievements: ['ML Specialist', 'Data Science Expert', 'Model Optimization'],
      connections: []
    },
    {
      id: 'eng-team-3',
      name: 'David Kumar',
      title: 'Full Stack Developer',
      role: 'Platform Development',
      department: 'Engineering',
      level: 3,
      image: '/generic.png',
      bio: 'Creating scalable web applications and user interfaces.',
      achievements: ['Full Stack Expert', 'UI/UX Focus', 'Scalable Systems'],
      connections: []
    },
    {
      id: 'eng-team-4',
      name: 'Maria Rodriguez',
      title: 'DevOps Engineer',
      role: 'Infrastructure',
      department: 'Engineering',
      level: 3,
      image: '/generic.png',
      bio: 'Managing cloud infrastructure and deployment pipelines.',
      achievements: ['DevOps Expert', 'Cloud Architecture', 'Automation Focus'],
      connections: []
    },
    
    {
      id: 'marketing-team-1',
      name: 'Jessica Park',
      title: 'Digital Marketing Specialist',
      role: 'Social Media & Content',
      department: 'Marketing',
      level: 3,
      image: '/generic.png',
      bio: 'Creating engaging content and managing social media presence.',
      achievements: ['Content Creator', 'Social Media Expert', 'Brand Storyteller'],
      connections: []
    },
    {
      id: 'marketing-team-2',
      name: 'Ryan Liu',
      title: 'Growth Marketing Analyst',
      role: 'Data & Analytics',
      department: 'Marketing',
      level: 3,
      image: '/generic.png',
      bio: 'Analyzing marketing performance and driving growth strategies.',
      achievements: ['Data Analytics', 'Growth Hacking', 'Performance Optimization'],
      connections: []
    },
    {
      id: 'marketing-team-3',
      name: 'Emily Zhang',
      title: 'Brand Designer',
      role: 'Visual Identity',
      department: 'Marketing',
      level: 3,
      image: '/generic.png',
      bio: 'Designing visual identity and brand materials.',
      achievements: ['Visual Design', 'Brand Identity', 'Creative Direction'],
      connections: []
    }
  ];

  const departments = ['all', 'Management', 'Engineering', 'Marketing'];

  const getLevelMembers = (level: number) => {
    const levelMembers = leadershipData.filter(member => member.level === level);
    if (activeDepartment === 'all') {
      return levelMembers;
    }
    return levelMembers.filter(member => member.department === activeDepartment);
  };

  const getFilteredMembers = () => {
    if (activeDepartment === 'all') {
      return leadershipData;
    }
    return leadershipData.filter(member => member.department === activeDepartment);
  };

  const handleMemberClick = (memberId: string) => {
    setSelectedMember(selectedMember === memberId ? null : memberId);
  };

  const handleLevelHover = (level: number) => {
    setActiveLevel(level);
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Management': return '#10b981'; // Emerald-500
      case 'Engineering': return '#3b82f6'; // Blue-500  
      case 'Marketing': return '#f59e0b'; // Amber-500
      case 'Finance': return '#ef4444'; // Red-500
      default: return '#6b7280'; // Gray-500
    }
  };

  return (
    <div className="leadership" id="leadership">
      {/* Hero Section */}
      <section className="leadership-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="leadership-hero-content"
          >
            <h1 className="leadership-title">
              <span className="title-line">Our Team</span>
            </h1>
            
            {/* Department Toggles */}
            <div className="department-toggles">
              {departments.map((dept) => (
                <button 
                  key={dept}
                  className={`dept-toggle ${activeDepartment === dept ? 'active' : ''}`}
                  onClick={() => setActiveDepartment(dept)}
                  style={{
                    '--dept-color': dept === 'all' ? '#22c55e' : getDepartmentColor(dept)
                  } as React.CSSProperties}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                  </button>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="team-section">
        <div className="container">
          <div className="team-container">
            {/* Level 1 - Department Heads */}
            {getLevelMembers(1).length > 0 && (
              <motion.div
                className={`team-level level-1 ${activeLevel === 1 ? 'active' : ''}`}
                onMouseEnter={() => handleLevelHover(1)}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="level-label">Department Heads</div>
                <div className="members-row">
                  {getLevelMembers(1).map((member, index) => (
                    <motion.div
                      key={member.id}
                      className={`member-card head-card ${selectedMember === member.id ? 'selected' : ''}`}
                      onClick={() => handleMemberClick(member.id)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      style={{
                        '--member-color': getDepartmentColor(member.department)
                      } as React.CSSProperties}
                    >
                      <div className="member-image">
                        <img src={member.image} alt={member.name} />
                        <div className="member-glow"></div>
                      </div>
                      <div className="member-info">
                        <div className="member-department">{member.department}</div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-title">{member.title}</p>
                        <p className="member-role">{member.role}</p>
                  </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Level 2 - Chapter Heads */}
            {getLevelMembers(2).length > 0 && (
              <motion.div 
                className={`team-level level-2 ${activeLevel === 2 ? 'active' : ''}`}
                onMouseEnter={() => handleLevelHover(2)}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="level-label">Chapter Heads</div>
                <div className="members-row">
                  {getLevelMembers(2).map((member, index) => (
                    <motion.div
                      key={member.id}
                      className={`member-card chapter-card ${selectedMember === member.id ? 'selected' : ''}`}
                      onClick={() => handleMemberClick(member.id)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      style={{
                        '--member-color': getDepartmentColor(member.department)
                      } as React.CSSProperties}
                    >
                      <div className="member-image">
                        <img src={member.image} alt={member.name} />
                        <div className="member-glow"></div>
                      </div>
                      <div className="member-info">
                        <div className="member-department">{member.department}</div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-title">{member.title}</p>
                        <p className="member-role">{member.role}</p>
                      </div>
                    </motion.div>
                          ))}
                        </div>
              </motion.div>
            )}

            {/* Level 3 - Team Members */}
            {getLevelMembers(3).length > 0 && (
              <motion.div 
                className={`team-level level-3 ${activeLevel === 3 ? 'active' : ''}`}
                onMouseEnter={() => handleLevelHover(3)}
                onMouseLeave={() => setActiveLevel(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="level-label">Team Members</div>
                <div className="members-row">
                  {getLevelMembers(3).map((member, index) => (
                    <motion.div
                      key={member.id}
                      className={`member-card team-card ${selectedMember === member.id ? 'selected' : ''}`}
                      onClick={() => handleMemberClick(member.id)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                      style={{
                        '--member-color': getDepartmentColor(member.department)
                      } as React.CSSProperties}
                    >
                      <div className="member-image">
                        <img src={member.image} alt={member.name} />
                        <div className="member-glow"></div>
                        </div>
                      <div className="member-info">
                        <div className="member-department">{member.department}</div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-title">{member.title}</p>
                        <p className="member-role">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
        {selectedMember && (
          <motion.div
            className="member-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="member-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
            {(() => {
              const member = leadershipData.find(m => m.id === selectedMember);
              if (!member) return null;
              
              return (
                <>
              <button 
                className="modal-close"
                onClick={() => setSelectedMember(null)}
              >
                ×
              </button>
                  <div className="modal-content">
              <div className="modal-header">
                      <div className="modal-image">
                        <img src={member.image} alt={member.name} />
                </div>
                <div className="modal-info">
                        <h2 className="modal-name">{member.name}</h2>
                        <p className="modal-title">{member.title}</p>
                        <p className="modal-department">{member.department}</p>
                  </div>
                </div>
                    <div className="modal-body">
                      <p className="modal-bio">{member.bio}</p>
                      <div className="modal-achievements">
                  <h4>Key Achievements</h4>
                        <ul>
                          {member.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
          </motion.div>
        )}

      {/* Discord Recruitment Card */}
      <section className="discord-recruitment">
        <div className="container">
          <motion.div
            className="discord-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="discord-content">
              <div className="discord-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <div className="discord-info">
                <h3 className="discord-title">Join Our Team</h3>
                <p className="discord-subtitle">
                  Ready to make a difference? Join our Discord community and help us revolutionize waste management with AI.
                </p>
              </div>
              <motion.a
                href="https://discord.gg/5JnztBEMFW"
                target="_blank"
                rel="noopener noreferrer"
                className="discord-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="button-text">Join Discord</span>
                <span className="button-arrow">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;