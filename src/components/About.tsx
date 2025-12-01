'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaRocket, FaBrain, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building responsive web applications with modern frameworks',
    },
    {
      icon: FaBrain,
      title: 'AI/ML Integration',
      description: 'Implementing intelligent solutions with LLMs and RAG systems',
    },
    {
      icon: FaRocket,
      title: 'Cloud Deployment',
      description: 'Deploying scalable applications on cloud platforms',
    },
    {
      icon: FaLaptopCode,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with clean, efficient code',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-dark-800 dark:text-dark-100">
              Hi, I&apos;m Damewan Bareh 👋
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
              <p>
                I&apos;m a passionate <span className="font-semibold text-primary-600">Software Developer</span> based in <span className="font-semibold">Bengaluru, India</span>, with expertise in Full-Stack Development, AI/ML Integration, and Cloud Technologies.
              </p>
              <p>
                I specialize in building <span className="font-semibold text-primary-600">scalable, production-ready applications</span> that leverage modern frameworks and cutting-edge AI capabilities to solve real-world problems. My journey in tech has been driven by curiosity and a desire to create meaningful impact through code.
              </p>
              <p>
                With a strong foundation in <span className="font-semibold">Python, JavaScript, TypeScript, Java, C#, C, SQL, PHP, and Bash/Shell</span>, I&apos;ve worked on diverse projects ranging from AI-powered study assistants to interactive web applications with modern UI/UX. During my internship at Meghalaya Technology Parks Society, I redesigned government websites, developed AI-driven chatbots, and improved citizen engagement through innovative solutions.
              </p>
              <p>
                I&apos;m constantly learning and exploring new technologies, currently focusing on Microservices Architecture, DevOps, and System Design while maintaining a strong emphasis on user experience and accessibility.
              </p>
              <p className="text-lg font-semibold text-primary-600">
                &ldquo;Building intelligent solutions, one commit at a time&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-4">
                  <item.icon className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-dark-800 dark:text-dark-100">
                  {item.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
