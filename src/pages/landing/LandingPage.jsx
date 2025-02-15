import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, MessageCircle, Users, Brain, ArrowRight, Mic, MessageSquare, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Lottie from 'react-lottie';
import HomeLottie from '../../assets/home_lottie1.json';
import { motion } from 'framer-motion';

// Features and Team Data (Unchanged)
const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: 'Real-time Analytics',
    description: 'Get instant insights from your social media data with advanced sentiment analysis.'
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    title: 'Multi-platform Support',
    description: 'Analyze sentiments across multiple social media platforms simultaneously.'
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: 'AI-Powered Insights',
    description: 'Leverage advanced AI algorithms for accurate sentiment classification.'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: 'Team Collaboration',
    description: 'Work together with your team to analyze and respond to sentiment trends.'
  }
];

const teamMembers = [
  {
    name: "Harsh Agarwal",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Leading the vision for next-generation sentiment analysis.",
  },
  {
    name: "Arjun Verma",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Architecting innovative solutions in AI and machine learning.",
  },
  {
    name: "Divyanshu Mishra",
    role: "AI-ML Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Crafting intuitive user experiences for complex data analysis.",
  },
  {
    name: "Bharat Kushwaha",
    role: "App Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Crafting intuitive user experiences for complex data analysis.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: HomeLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="bg-white">
      {/* Landing Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Understand Your Social Media Impact
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl mx-auto lg:mx-0">
                Transform your social media data into actionable insights with our advanced sentiment analysis platform.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/chatbot')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Try Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center mt-8 lg:mt-0"
            >
              <div className="w-56 sm:w-80 md:w-96 lg:w-[400px] lg:h-[400px]">
                <Lottie options={defaultOptions} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              Powerful Features for Deep Insights
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to understand and act on social sentiment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 transition-all duration-300 ease-in-out group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300 ease-in-out">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700">
              The experts behind our sentiment analysis platform
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-48 overflow-hidden rounded-t-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-500">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Intelligent Chatbot Assistant
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Get instant answers about your social media sentiment analysis with our AI-powered chatbot. Supports both text and voice interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/chatbot")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-transform transform hover:scale-105 shadow-md"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chat
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg flex items-center transition-transform transform hover:scale-105 shadow-md">
                  <Mic className="mr-2 h-5 w-5" />
                  Try Voice
                </button>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">AI Assistant</p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end">
                    <div className="bg-blue-50 rounded-lg p-3 max-w-xs shadow">
                      <p className="text-sm text-gray-900">
                        Hello! How can I help you analyze your social media sentiment today?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-end">
                    <div className="bg-blue-600 rounded-lg p-3 max-w-xs shadow">
                      <p className="text-sm text-white">
                        I need to analyze Twitter sentiment for my brand.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <div className="bg-blue-50 rounded-lg p-3 max-w-xs shadow">
                      <p className="text-sm text-gray-900">
                        Great! Let's get started. Please enter your Twitter handle or keywords.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}