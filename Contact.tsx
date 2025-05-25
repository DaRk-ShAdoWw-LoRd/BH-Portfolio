import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import SectionTitle from './ui/SectionTitle';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, you would send this data to your backend or a service like Formspree
    setIsSubmitted(true);
    reset();
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-500">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Contact Information" 
          alignment="right"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-400 rounded-xl shadow-[0_4px_20px_rgba(124,255,87,0.1)] p-8 border border-neon-green/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-neon-green mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Email</h4>
                    <a 
                      href="mailto:binishhari@gmail.com" 
                      className="text-neon-aqua hover:text-neon-green transition-colors"
                    >
                      binishhari@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-neon-green mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Phone</h4>
                    <a 
                      href="tel:+918089602075" 
                      className="text-neon-aqua hover:text-neon-green transition-colors"
                    >
                      +91 80896 02075
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-neon-green mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Location</h4>
                    <p className="text-gray-400">
                      Kollam,Kerala<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-300 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/binish-b-470027341/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-neon-green hover:bg-dark-200 hover:text-neon-aqua transition-colors border border-neon-green/20 hover:border-neon-green/50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/binish__hari/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-neon-green hover:bg-dark-200 hover:text-neon-aqua transition-colors border border-neon-green/20 hover:border-neon-green/50"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-400 rounded-xl shadow-[0_4px_20px_rgba(124,255,87,0.1)] p-8 border border-neon-green/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-dark-300 border border-neon-green text-neon-green px-4 py-3 rounded-lg">
                  Thank you for your message! I'll get back to you as soon as possible.
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 bg-dark-300 border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors text-white ${errors.name ? 'border-red-500' : 'border-neon-green/20'}`}
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 bg-dark-300 border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors text-white ${errors.email ? 'border-red-500' : 'border-neon-green/20'}`}
                      placeholder="Your email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 bg-dark-300 border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors text-white ${errors.subject ? 'border-red-500' : 'border-neon-green/20'}`}
                      placeholder="Message subject"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 bg-dark-300 border rounded-lg focus:ring-2 focus:ring-neon-green focus:border-neon-green outline-none transition-colors text-white ${errors.message ? 'border-red-500' : 'border-neon-green/20'}`}
                      placeholder="Your message"
                      {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-transparent border-2 border-neon-green text-neon-green rounded-lg font-medium hover:bg-neon-green hover:text-dark-700 transition-all duration-300 shadow-[0_0_15px_rgba(124,255,87,0.3)] hover:shadow-[0_0_25px_rgba(124,255,87,0.5)]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;