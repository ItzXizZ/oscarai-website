import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  ChevronRight, 
  UserPlus, 
  X,
  Briefcase,
  Code,
  MapPin,
  Crown,
  ExternalLink
} from 'lucide-react'

const LeadershipStructure = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedPosition, setSelectedPosition] = useState(null)

  // Leadership hierarchy data
  const leadershipHierarchy = {
    marketing: {
      title: 'Marketing Leadership',
      color: 'from-green-500 to-emerald-600',
      positions: [
        {
          id: 'growth-trainee',
          title: 'Growth Trainee',
          subtitle: 'Trial Intern',
          icon: TrendingUp,
          description: 'Unofficial internship role designed for short-term evaluation',
          requirements: [
            '5,000+ impressions per week on LinkedIn',
            '3+ posts per week (including 1 AI Product Engineer Role ad)',
            'Must meet targets for 2 consecutive weeks'
          ],
          promotion: 'Qualifies for Official Growth Intern',
          level: 1
        },
        {
          id: 'growth-intern',
          title: 'Official Growth Intern',
          subtitle: 'Team Member',
          icon: UserPlus,
          description: 'Official team role focused on recruitment and outreach',
          requirements: [
            'Onboard at least 5 new team members',
            'Bring in 15+ new Discord members per week',
            'Secure 3+ engineering applicants per week'
          ],
          perks: [
            'Add OscarAI to LinkedIn experience',
            'Use official OscarAI profile banners'
          ],
          level: 2
        },
        {
          id: 'regional-officer',
          title: 'Regional Marketing Officer',
          subtitle: 'Regional Manager',
          icon: MapPin,
          description: 'Manages a group of Growth Interns and Trainees in a specific region',
          requirements: [
            'Announced after 4 weeks of performance',
            'Train, coordinate, and evaluate performance locally',
            'Manage regional growth initiatives'
          ],
          level: 3
        },
        {
          id: 'lead-officer',
          title: 'Lead Marketing Officer',
          subtitle: 'Senior Leadership',
          icon: Crown,
          description: 'Top-level marketing leader chosen based on performance & communication',
          requirements: [
            'Available when 100+ total marketing members',
            'Assist Head of Marketing and CMO',
            'Oversee multiple Regional Officers'
          ],
          level: 4
        }
      ]
    },
    engineering: {
      title: 'Engineering Leadership',
      color: 'from-blue-500 to-indigo-600',
      positions: [
        {
          id: 'software-engineer',
          title: 'Software Engineering Intern',
          subtitle: 'Technical Role',
          icon: Code,
          description: 'Work on AI-powered waste sorting technology',
          requirements: [
            'Programming experience (Python, JavaScript, etc.)',
            'Interest in AI/ML technologies',
            'Ability to work on collaborative projects'
          ],
          level: 1
        },
        {
          id: 'product-engineer',
          title: 'Product Engineering Intern',
          subtitle: 'Product Development',
          icon: Briefcase,
          description: 'Focus on product design and user experience',
          requirements: [
            'Product development experience',
            'Understanding of user-centered design',
            'Strong analytical skills'
          ],
          level: 1
        }
      ]
    }
  }

  const handlePositionClick = (categoryKey, position) => {
    setSelectedPosition({ category: categoryKey, ...position })
  }

  // Function to get the correct Google Form URL for each position
  const getFormUrl = (positionId) => {
    switch (positionId) {
      case 'growth-trainee':
      case 'growth-intern':
        return 'https://forms.gle/ohmPvUmn1rDYe6DU9';
      case 'software-engineer':
        return 'https://forms.gle/oWtyStV5hv6TQnQn7';
      case 'product-engineer':
        return 'https://forms.gle/qRDVEAMzxmALmLKb6';
      default:
        return null; // No form available for this position
    }
  }

  // Function to check if a position is actively accepting applications
  const isAcceptingApplications = (positionId) => {
    return getFormUrl(positionId) !== null;
  }

  return (
    <section ref={ref} className="apple-section bg-black" id="leadership">
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
            <span className="text-lg font-medium text-green-400">Join Our Team</span>
          </motion.div>

          <h2 className="apple-title bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Leadership Structure
          </h2>
          <p className="apple-subtitle">Build your career with OscarAI and make an environmental impact</p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(leadershipHierarchy).map(([categoryKey, category], categoryIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.2 }}
              className="glass-card p-8"
            >
              <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent text-center mb-8`}>
                <h3 className="text-3xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {category.positions.map((position, index) => {
                  const IconComponent = position.icon
                  return (
                    <motion.div
                      key={position.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="relative group cursor-pointer"
                      onClick={() => handlePositionClick(categoryKey, position)}
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                        <div className={`bg-gradient-to-r ${category.color} p-3 rounded-2xl inline-flex mb-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <h4 className="text-xl font-semibold mb-2" style={{ letterSpacing: '-0.01em' }}>
                          {position.title}
                        </h4>
                        <p className="text-green-400 text-sm font-medium mb-3">
                          {position.subtitle}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {position.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <h5 className="text-sm font-semibold text-white">Key Requirements:</h5>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {position.requirements.slice(0, 2).map((req, i) => (
                              <li key={i}>• {req}</li>
                            ))}
                          </ul>
                        </div>

                        {isAcceptingApplications(position.id) ? (
                          <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                            <span>Apply Now</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button className="w-full bg-gray-600 text-gray-300 px-4 py-2 rounded-xl font-medium text-sm cursor-not-allowed flex items-center justify-center space-x-2">
                            <span>Not Currently Hiring</span>
                          </button>
                        )}
                      </div>

                      {/* Level indicator */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Level {position.level}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Modal with Google Forms */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-white/20 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Apply for {selectedPosition.title}
                </h3>
                <p className="text-green-400 text-sm">{selectedPosition.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedPosition(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {getFormUrl(selectedPosition.id) ? (
              <iframe
                src={getFormUrl(selectedPosition.id)}
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Application Form"
                className="rounded-xl"
              ></iframe>
            ) : (
              <div className="text-center py-16">
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-8 mb-6">
                  <h4 className="text-xl font-semibold text-yellow-400 mb-4">Position Currently Unavailable</h4>
                  <p className="text-gray-300 mb-4">
                    We are not currently accepting applications for <strong>{selectedPosition.title}</strong>.
                  </p>
                  <p className="text-gray-400 text-sm">
                    This position may become available in the future based on team growth and performance milestones. 
                    Please check back later or apply for our currently open positions.
                  </p>
                </div>
                <div className="text-left">
                  <h5 className="text-lg font-semibold text-white mb-3">Currently Accepting Applications:</h5>
                  <ul className="text-green-400 space-y-2">
                    <li>• Growth Trainee (Marketing)</li>
                    <li>• Official Growth Intern (Marketing)</li>
                    <li>• Software Engineering Intern</li>
                    <li>• Product Engineering Intern</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default LeadershipStructure
