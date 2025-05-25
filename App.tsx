import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schooling from './components/Schooling';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorTrail from './components/CursorTrail';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark-700">
      <CustomCursor />
      <CursorTrail />
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Schooling />
          <Internships />
          <Achievements />
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App