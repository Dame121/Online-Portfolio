'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaArrowDown } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Dame121', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/damewan-bareh-64356a1a2', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/oLsVBJ3E84/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl animate-glow">
                <img
                  src="https://avatars.githubusercontent.com/u/155565167?v=4"
                  alt="Damewan Bareh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Damewan Bareh
            </h1>
            <div className="mb-4">
              <p className="text-2xl md:text-3xl text-dark-600 dark:text-dark-300 font-semibold">
                Software Developer | AI/ML Developer | Full-Stack Engineer
              </p>
              <p className="text-lg text-primary-600 dark:text-primary-400 mt-2">
                Web Development Intern @ Meghalaya Technology Parks Society
              </p>
            </div>
            <p className="text-lg md:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-8">
              Building intelligent solutions, one commit at a time 🚀
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-12"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-dark-400 hover:text-primary-600 transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <FaArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
