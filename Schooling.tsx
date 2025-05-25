import React from 'react';
import { motion } from 'framer-motion';
import { School, Calendar, MapPin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

// Education data
const education = [
  {
    id: 1,
    degree: "Schooling",
    institution: "Sree Narayana Trusts Central School ",
    location: "Kollam,Kerala,India",
    period: "10th-12th",
  },
  {
    id: 2,
    degree: "Btech in Mechanical Engineering",
    institution: "Indian Institute Of Technology Hyderabad",
    location: "Hyderabad,Telangana,India",
    period: "2024 - 2028",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Schooling: React.FC = () => {
  return (
    <section id="schooling" className="py-20 bg-dark-600">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Academic Background" subtitle="My Educational Journey" />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neon-green/30 transform -translate-x-1/2 shadow-[0_0_10px_rgba(124,255,87,0.3)]"></div>
          
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              variants={item}
              className={`mb-12 md:mb-24 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'} md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-neon-green border-4 border-dark-700 shadow-[0_0_10px_rgba(124,255,87,0.5)] left-1/2 transform -translate-x-1/2"></div>
              
              <div className="bg-dark-400 rounded-xl shadow-[0_4px_20px_rgba(124,255,87,0.1)] p-6 border-l-4 border-neon-green hover:shadow-[0_8px_30px_rgba(124,255,87,0.2)] transition-all duration-300">
                <div className="flex items-center mb-3">
                  <School className="text-neon-green mr-2" size={20} />
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                </div>
                
                <h4 className="text-lg font-medium text-neon-aqua mb-2">{edu.institution}</h4>
                
                <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4">
                  <span className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1 text-neon-yellow" />
                    {edu.period}
                  </span>
                  <span className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1 text-neon-yellow" />
                    {edu.location}
                  </span>
                </div>
                
                {edu.description && (
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                )}
                
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="font-medium text-white mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="hover:text-neon-green transition-colors duration-300">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schooling;