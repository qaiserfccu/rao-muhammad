'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';

interface MemberHeaderProps {
  name: string;
  role: string;
  navigationItems: Array<{
    name: string;
    href: string;
  }>;
}

const MemberHeader = ({ name, role, navigationItems }: MemberHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-blue-600/90 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-100 transition-colors">
            <FaHome className="inline-block mr-2" />
            Back to Family
          </Link>

          {/* Member Name */}
          <div className="hidden md:block">
            <div className="text-white">
              <div className="text-xl font-semibold">{name}</div>
              <div className="text-sm text-white/80">{role}</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4"
          >
            <div className="py-2 space-y-1 bg-white/10 backdrop-blur-md rounded-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/20 transition-colors rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default MemberHeader;