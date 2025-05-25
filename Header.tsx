import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap as Graduation, Briefcase, Award, Mail, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-300/90 backdrop-blur-sm shadow-[0_0_15px_rgba(124,255,87,0.15)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-end items-center h-16">
          <nav className="hidden md:flex items-center space-x-4">
            {[
              { id: 'about', icon: <User size={18} />, label: 'About' },
              { id: 'schooling', icon: <Graduation size={18} />, label: 'Schooling' },
              { id: 'internships', icon: <Briefcase size={18} />, label: 'Internships' },
              { id: 'achievements', icon: <Award size={18} />, label: 'Achievements' },
              { id: 'contact', icon: <Mail size={18} />, label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm rounded-lg text-neon-green border border-neon-green/20 hover:bg-neon-green hover:text-dark-700 transition-all duration-300 flex items-center space-x-2 shadow-[0_0_10px_rgba(124,255,87,0.1)] hover:shadow-[0_0_15px_rgba(124,255,87,0.3)]"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-white hover:text-neon-green transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-300/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { id: 'about', icon: <User size={18} />, label: 'About' },
                { id: 'schooling', icon: <Graduation size={18} />, label: 'Schooling' },
                { id: 'internships', icon: <Briefcase size={18} />, label: 'Internships' },
                { id: 'achievements', icon: <Award size={18} />, label: 'Achievements' },
                { id: 'contact', icon: <Mail size={18} />, label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center w-full py-3 px-4 bg-dark-300/50 backdrop-blur-sm rounded-lg text-neon-green border border-neon-green/20 hover:bg-neon-green hover:text-dark-700 transition-all duration-300"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;