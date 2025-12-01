'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiFlask, SiMysql,
  SiMongodb, SiGit, SiDocker, SiHtml5, SiCss3, SiTailwindcss,
  SiBootstrap, SiFirebase, SiHeroku, SiPostman, SiGo,
  SiTensorflow, SiPytorch, SiGooglecloud, SiTypescript, SiCplusplus,
  SiC, SiPhp, SiGnubash,
  SiOpenapiinitiative, SiChartdotjs, SiLinux,
  SiPycharm, SiIntellijidea, SiEclipseide, SiGithub, SiPhpmyadmin,
  SiJson, SiHuggingface, SiYoutube
} from 'react-icons/si';
import { FaDatabase, FaJava, FaServer, FaAws, FaWindows, FaCloud } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Go', icon: SiGo, color: '#00ADD8' },
        { name: 'C#', icon: SiCplusplus, color: '#239120' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Bash/Shell', icon: SiGnubash, color: '#4EAA25' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'Flask', icon: SiFlask, color: '#000000' },
        { name: 'Java Servlet', icon: FaServer, color: '#007396' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'phpMyAdmin', icon: SiPhpmyadmin, color: '#6C78AF' },
        { name: 'JSON', icon: SiJson, color: '#000000' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Azure', icon: FaCloud, color: '#0078D4' },
        { name: 'Pinecone', icon: FaDatabase, color: '#000000' },
      ],
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Power BI', icon: null, color: '#F2C811' },
        { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
      ],
    },
    {
      title: 'API & Integration',
      skills: [
        { name: 'RESTful APIs', icon: SiOpenapiinitiative, color: '#6BA539' },
        { name: 'Twitter API', icon: null, color: '#1DA1F2' },
        { name: 'YouTube API', icon: SiYoutube, color: '#FF0000' },
        { name: 'OpenAI', icon: null, color: '#412991' },
        { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
      ],
    },
    {
      title: 'AI/ML & NLP',
      skills: [
        { name: 'Large Language Models', icon: null, color: '#8B5CF6' },
        { name: 'Sentiment Analysis', icon: null, color: '#EC4899' },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'VS Code', icon: DiVisualstudio, color: '#007ACC' },
        { name: 'PyCharm', icon: SiPycharm, color: '#000000' },
        { name: 'IntelliJ', icon: SiIntellijidea, color: '#000000' },
        { name: 'Eclipse', icon: SiEclipseide, color: '#2C2255' },
      ],
    },
    {
      title: 'Platforms/OS',
      skills: [
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
        { name: 'Unix', icon: null, color: '#000000' },
        { name: 'Windows', icon: FaWindows, color: '#0078D6' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My technical toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-dark-100 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    {skill.icon ? (
                      <skill.icon
                        size={48}
                        style={{ color: skill.color }}
                        className="mb-3 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className="mb-3 group-hover:scale-110 transition-transform duration-300 text-2xl font-semibold"
                        style={{ color: skill.color }}
                        aria-hidden="true"
                      >
                        {skill.name[0]}
                      </div>
                    )}
                    <span className="text-sm font-medium text-dark-700 dark:text-dark-200 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-dark-100">
            Specialized Knowledge
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'LangChain', 'Ollama', 'RAG Systems', 'Vector DBs', 'Stable Diffusion',
              'Beautiful Soup', 'PRAW', 'Web Scraping', 'Session Management',
              'Authentication', 'UI/UX Design', 'GIGW 3.0 Compliance',
              'Accessibility', 'Chatbot Development', 'React', 'Tailwind CSS',
              'Node.js', 'Docker', 'TensorFlow', 'PyTorch'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
