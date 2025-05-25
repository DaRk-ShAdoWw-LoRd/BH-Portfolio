import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

// Achievements data
const achievements = [
  {
    id: 1,
    title: "JEE Mains 2024",
    organization: "National Testing Agency",
    year: "2024",
    description: "Secured All India Rank 9561 in JEE Mains examination.",
    icon: Trophy
  },
  {
    id: 2,
    title: "JEE Advanced 2024",
    organization: "IIT Madras",
    year: "2024",
    description: "Secured All India Rank 8859 in JEE Advanced examination.",
    icon: Award
  },
  {
    id: 3,
    title: "KEAM 2024",
    organization: "Commissioner of Entrance Examinations Kerala",
    year: "2024",
    description: "Secured State Rank 147 in Kerala Engineering Architecture Medical entrance examination.",
    icon: Medal
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-dark-600">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Recognitions" subtitle="Awards & Achievements" />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div key={achievement.id} variants={item}>
                <div className="bg-dark-400 rounded-xl shadow-[0_4px_20px_rgba(124,255,87,0.1)] p-6 h-full hover:shadow-[0_0_25px_rgba(124,255,87,0.2)] transition-all duration-300 border border-neon-green/10 hover:border-neon-green/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center mr-4 border border-neon-green/20">
                      <Icon size={24} className="text-neon-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-white line-clamp-2">{achievement.title}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-3">
                    <Calendar size={16} className="text-neon-yellow mr-2" />
                    <span>{achievement.year}</span>
                  </div>
                  
                  <h4 className="text-neon-aqua font-medium mb-3">{achievement.organization}</h4>
                  
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;