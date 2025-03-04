import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio with smooth animations',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    },
  ];

  // Skills data
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'UI/UX Design', level: 80 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              Portfolio
            </motion.div>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setActiveSection(item)}
                    className={`capitalize ${
                      activeSection === item
                        ? 'text-blue-400 font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Home section */}
          {activeSection === 'home' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col justify-center"
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                <span className="text-blue-400">Hello,</span> I'm
                <br />
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Your Name
                </span>
              </motion.h1>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl text-gray-300 mb-8"
              >
                Frontend Developer & UI/UX Designer
              </motion.h2>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full font-medium"
                  onClick={() => setActiveSection('contact')}
                >
                  Contact Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 py-3 px-8 rounded-full font-medium"
                  onClick={() => setActiveSection('projects')}
                >
                  View Projects
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* About section */}
          {activeSection === 'about' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen py-16"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center"
              >
                About <span className="text-blue-400">Me</span>
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-96"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-3"></div>
                  <div className="absolute inset-0 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-gray-400">Your Photo</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Frontend Developer & UI/UX Designer
                  </h3>
                  <p className="text-gray-300 mb-6">
                    I'm a passionate web developer specializing in creating
                    beautiful, functional, and user-centered digital experiences.
                    With a background in design and development, I bring a unique
                    perspective to every project.
                  </p>
                  <p className="text-gray-300 mb-8">
                    My goal is to build applications that are not only
                    aesthetically pleasing but also provide real value to users.
                    I enjoy working on challenging projects that push me to learn
                    new skills and technologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">
                        Education
                      </h4>
                      <p className="text-gray-300">
                        B.S. Computer Science
                        <br />
                        University Name, 2018-2022
                      </p>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium mb-2">
                        Experience
                      </h4>
                      <p className="text-gray-300">
                        3+ years in web development
                        <br />
                        1+ years in UI/UX design
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Projects section */}
          {activeSection === 'projects' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen py-16"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center"
              >
                My <span className="text-blue-400">Projects</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
                  >
                    <div className="h-48 bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 py-3 px-8 rounded-full font-medium"
                >
                  View All Projects
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* Skills section */}
          {activeSection === 'skills' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen py-16"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center"
              >
                My <span className="text-blue-400">Skills</span>
              </motion.h2>
              <div className="max-w-3xl mx-auto">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {skills.map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'Git', 'Figma'].map(
                    (tech) => (
                      <div
                        key={tech}
                        className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-center"
                      >
                        <span>{tech}</span>
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Contact section */}
          {activeSection === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen py-16"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center"
              >
                Contact <span className="text-blue-400">Me</span>
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Feel free to reach out if you're looking for a developer,
                    have a question, or just want to connect.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                        <span className="text-blue-400">📧</span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">Email</h4>
                        <p>your.email@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                        <span className="text-blue-400">📱</span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">Phone</h4>
                        <p>+1 (123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-4">
                        <span className="text-blue-400">📍</span>
                      </div>
                      <div>
                        <h4 className="text-gray-400">Location</h4>
                        <p>San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex space-x-4">
                    {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map(
                      (platform) => (
                        <motion.a
                          key={platform}
                          href="#"
                          whileHover={{ y: -5 }}
                          className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"
                        >
                          <span className="text-sm">{platform[0]}</span>
                        </motion.a>
                      )
                    )}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <form className="space-y-6">
                    <div>
                      <label className="block mb-2 text-gray-300">
                        Your Name
                      </label>
                      <motion.input
                        whileFocus={{ borderColor: '#60a5fa' }}
                        type="text"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-300">
                        Your Email
                      </label>
                      <motion.input
                        whileFocus={{ borderColor: '#60a5fa' }}
                        type="email"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-300">Subject</label>
                      <motion.input
                        whileFocus={{ borderColor: '#60a5fa' }}
                        type="text"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-gray-300">Message</label>
                      <motion.textarea
                        whileFocus={{ borderColor: '#60a5fa' }}
                        rows="5"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
                      ></motion.textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-medium"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-xl font-bold">Your Name</div>
              <div className="text-gray-400 text-sm">
                © 2025 All Rights Reserved
              </div>
            </div>
            <div className="flex space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;