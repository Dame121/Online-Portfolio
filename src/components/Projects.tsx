'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiFlask, SiHtml5 } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'NexNote - AI-Powered Study Assistant',
      description: 'Production-ready Flask application implementing RAG with Pinecone & Ollama. Features document querying, quiz generation, flashcards, intelligent summaries, semantic search, chat history, and Google Calendar integration.',
      tags: ['Python', 'Flask', 'Ollama', 'Pinecone', 'RAG', 'Vector DB', 'LLM'],
      github: 'https://github.com/Dame121/NexNote-AI-Assistant',
      demo: null,
      icon: SiFlask,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Image Generator',
      description: 'Text-to-image generation using Stable Diffusion 2.1 & 3.5 with custom GUI built using CustomTkinter. Features prompt-based image generation with support for both CPU and GPU acceleration.',
      tags: ['Python', 'Stable Diffusion', 'PyTorch', 'CustomTkinter', 'CUDA'],
      github: 'https://github.com/Dame121/AI-Image-Generator',
      demo: null,
      icon: SiPython,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'X-Bot - Automated Quote Poster',
      description: 'Intelligent bot that posts daily inspirational quotes on X (Twitter). Features automated scheduling, quote database management, and engagement tracking.',
      tags: ['Python', 'Twitter API', 'Automation', 'Scheduling'],
      github: 'https://github.com/Dame121/X-Bot',
      demo: null,
      icon: SiPython,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Local AI Agent',
      description: 'RAG-based Q&A system using Langchain + Ollama for answering questions about a pizza restaurant using real reviews. Demonstrates advanced RAG architecture with local LLM deployment.',
      tags: ['Python', 'LangChain', 'Ollama', 'RAG', 'Vector Search'],
      github: 'https://github.com/Dame121/Local_AI_Agent',
      demo: null,
      icon: SiPython,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'MindCare',
      description: 'Web-based mental health support platform providing resources and interactive features for mental wellness. Built with modern web technologies for an accessible user experience.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      github: 'https://github.com/Dame121/MindCare',
      demo: null,
      icon: SiHtml5,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Mini AI Agent',
      description: 'Lightweight AI agent demonstrating core concepts of autonomous systems and intelligent decision-making. A learning project exploring AI agent architectures.',
      tags: ['Python', 'AI', 'Automation'],
      github: 'https://github.com/Dame121/Mini-AI-Agent',
      demo: null,
      icon: SiPython,
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A showcase of my best work in AI/ML, Full-Stack Development, and Automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white text-3xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-dark-800 dark:text-dark-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 dark:bg-dark-700 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-dark-200 dark:border-dark-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Dame121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <FaGithub size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
