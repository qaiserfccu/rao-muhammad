'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section = ({ children, className = '', delay = 0 }: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`py-16 px-4 sm:px-6 relative overflow-hidden rounded-2xl my-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm shadow-xl ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
      }}
    >
      {children}
    </motion.section>
  );
};

export default Section;