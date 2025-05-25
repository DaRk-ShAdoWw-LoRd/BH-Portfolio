import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSchooling = () => {
    const schoolingSection = document.getElementById('schooling');
    if (schoolingSection) {
      schoolingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center bg-dark-700 text-white pt-16 overflow-hidden"
    >
      {/* Space Background with Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Star Field */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#111_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#7CFF57_1px,_transparent_1px)] bg-[length:30px_30px] opacity-10 animate-twinkle"></div>
        </div>

        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>

        {/* Spaceships */}
        <div className="absolute top-[10%] -left-20 w-40 h-20 bg-gradient-to-r from-neon-green/20 to-transparent skew-x-12 animate-spaceship-left"></div>
        <div className="absolute top-[20%] -right-20 w-40 h-20 bg-gradient-to-l from-neon-aqua/20 to-transparent -skew-x-12 animate-spaceship-right"></div>

        {/* Digital Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-aqua rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-yellow rounded-full animate-float delay-2000"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-dark-700/50 via-dark-700/80 to-dark-700/95"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing Frame */}
          <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-neon-green/30 shadow-[0_0_30px_rgba(124,255,87,0.1)] overflow-hidden">
            {/* Digital Circuit Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green animate-pulse"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-aqua animate-pulse delay-100"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-yellow animate-pulse delay-200"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-green animate-pulse delay-300"></div>

            {/* Content */}
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-neon-aqua to-neon-yellow"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Binish Hari's Academic Excellence & Professional Growth
              </motion.h1>

              <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* Growth Metrics Panel */}
                <div className="w-full md:w-1/2 h-40 relative overflow-hidden rounded-lg bg-dark-600/80 backdrop-blur-sm border border-neon-green/20">
                  <div className="absolute inset-0 flex items-end justify-around p-4">
                    <div className="relative w-1/4 h-[80%] bg-gradient-to-t from-neon-green/80 to-neon-green/40 rounded-t-lg animate-metric-1">
                      <div className="absolute -top-2 left-1/2 w-4 h-4 bg-neon-green rounded-full blur-sm animate-pulse"></div>
                    </div>
                    <div className="w-1/4 h-[60%] bg-gradient-to-t from-neon-aqua/80 to-neon-aqua/40 rounded-t-lg animate-metric-2"></div>
                    <div className="w-1/4 h-[90%] bg-gradient-to-t from-neon-yellow/80 to-neon-yellow/40 rounded-t-lg animate-metric-3"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-600/90 to-transparent"></div>
                  <span className="absolute top-4 left-4 text-neon-green font-medium">Growth Metrics</span>
                </div>

                {/* Performance Trends Panel */}
                <div className="w-full md:w-1/2 h-40 relative overflow-hidden rounded-lg bg-dark-600/80 backdrop-blur-sm border border-neon-green/20">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-neon-aqua to-transparent trend-line"></div>
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-20 transform -translate-y-1/2">
                      <div className="relative w-full h-full">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-neon-green trend-line"
                            style={{
                              left: `${i * 10}%`,
                              top: `${Math.max(0, 80 - i * 8)}%`,
                              animation: `glowingLine ${2 + i * 0.2}s infinite`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-600/90 to-transparent"></div>
                  <span className="absolute top-4 left-4 text-neon-aqua font-medium">Performance Trends</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to Action Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
              onClick={scrollToSchooling}
              className="group relative px-8 py-4 bg-dark-600/50 rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center text-neon-green font-medium group-hover:text-dark-700 transition-colors duration-300">
                Explore My Journey
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-neon-green rounded-full"></div>
              <div className="absolute -inset-px bg-gradient-to-r from-neon-green via-neon-aqua to-neon-yellow opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;