import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import Typewriter from 'typewriter-effect';

const About: React.FC = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section id="about" className="py-20 bg-dark-600">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About Me" subtitle="Get to Know Me Better" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 relative mb-6">
              <img
                src="/PHOTO_!!!.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl shadow-[0_4px_20px_rgba(124,255,87,0.2)] border-2 border-neon-green"
              />
            </div>
          </motion.div>

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-dark-400 rounded-xl p-6 shadow-[0_4px_20px_rgba(124,255,87,0.1)] border-2 border-neon-green relative overflow-hidden"
          >
            <div className="prose prose-invert max-w-none">
              {isInView && (
                <Typewriter
                  options={{
                    delay: 30,
                    cursor: '|'
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`Hi, I'm Binish Hari and I am currently pursuing B.Tech in Mechanical Engineering from Indian Institute of Technology Hyderabad(IITH). I'm somebody who's just naturally interested in understanding how things work — machines, systems, just ideas in general.`)
                      .pauseFor(500)
                      .typeString(`\n\nMechanical engineering suited me because it's hands-on, general, and it teaches you the means to actually make things. But I'm also not one to stay strictly in the one lane — I enjoy venturing off the main syllabus. That might be playing around with random side projects, experimenting with new tools, or just diving down internet rabbit holes on completely non-course-related subjects (but that are cool in themselves anyway).`)
                      .pauseFor(500)
                      .typeString(`\n\nAnyways i am pretty much a chill guy, looking to explore new fields/ learn something new whilst pursuing my degree. If you have any internship offers for me, please feel free to reach out to me.`)
                      .start();
                  }}
                />
              )}
            </div>
            <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-green via-neon-aqua to-neon-green opacity-30 blur-sm -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;