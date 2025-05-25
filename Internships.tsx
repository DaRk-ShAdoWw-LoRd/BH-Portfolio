import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const Internships: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="internships" className="py-20 bg-dark-500">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Looking to reach out to me?
          </h2>
          
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green rounded-full font-medium hover:bg-neon-green hover:text-dark-700 transition-all duration-300 text-lg shadow-[0_0_15px_rgba(124,255,87,0.3)] hover:shadow-[0_0_25px_rgba(124,255,87,0.5)]"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;