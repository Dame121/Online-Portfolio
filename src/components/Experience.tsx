'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const internship = {
    title: 'Web Development Intern',
    company: 'Meghalaya Technology Parks Society',
    location: 'Shillong, Meghalaya',
    period: 'Jun 2025 – Jul 2025',
    achievements: [
      'Redesigned the official Meghalaya IT website, modernizing its interface and improving user experience, reducing bounce rates by 25%',
      'Collaborated in a multi-person development team ensuring GIGW 3.0 compliance, accessibility, and security',
      'Developed an interactive chatbot, Power BI dashboard, and new service modules, improving citizen engagement using AI-driven insights',
      'Presented weekly demos to senior stakeholders for progress tracking and cross-team collaboration',
    ],
  };

  const achievements = [
    {
      icon: FaTrophy,
      title: 'Pull Shark Achievement',
      description: 'Actively contributing to open source projects with meaningful pull requests',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FaCode,
      title: 'Quickdraw Achievement',
      description: 'Fast at code review and contributions, demonstrating quick problem-solving skills',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaUsers,
      title: '64+ Contributions',
      description: 'Consistently contributing to various projects throughout the year',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FaLightbulb,
      title: '19+ Repositories',
      description: 'Diverse portfolio spanning AI/ML, web development, and automation',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const competencies = [
    {
      category: 'Software Development',
      skills: [
        'Full-Stack Web Development (Frontend + Backend)',
        'RESTful API Design & Development',
        'Database Design & Management',
        'Web Scraping & Data Processing',
        'Authentication & Security',
      ],
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        'Large Language Models (LLMs) Integration',
        'Retrieval-Augmented Generation (RAG)',
        'Vector Databases & Semantic Search',
        'Natural Language Processing',
        'Computer Vision (Stable Diffusion)',
      ],
    },
    {
      category: 'Development Practices',
      skills: [
        'Clean Code & Best Practices',
        'Version Control (Git & GitHub)',
        'API Integration & Third-party Services',
        'Error Handling & Logging',
        'Performance Optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Highlighting my journey, accomplishments, and technical expertise
          </p>
        </motion.div>

        {/* Internship Experience */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl p-8 shadow-2xl text-white">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{internship.title}</h3>
                <p className="text-lg font-semibold opacity-90 mb-1">{internship.company}</p>
                <p className="opacity-80">{internship.location}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {internship.period}
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {internship.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                >
                  <span className="text-yellow-300 text-xl flex-shrink-0">✓</span>
                  <p className="text-sm leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark-800 dark:text-dark-100">
                  {achievement.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-dark-800 dark:text-dark-100">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.category}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                  {competency.category}
                </h4>
                <ul className="space-y-3">
                  {competency.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start text-dark-600 dark:text-dark-300 text-sm"
                    >
                      <span className="text-primary-600 mr-2 mt-1">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Working On */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-16 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6 text-white text-center">
            What I'm Working On
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
            {[
              '🚀 Building scalable web applications with modern frameworks',
              '🤖 Integrating AI/ML capabilities into production systems',
              '🔧 Developing intelligent automation tools and bots',
              '☁️ Learning cloud infrastructure and deployment strategies',
              '🌐 Contributing to open-source projects',
              '📊 Exploring data visualization and analytics',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
