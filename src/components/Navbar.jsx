import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
  };

  return (
    <motion.div 
      className={`w-full sticky top-0 z-40 border-b hover:bg-white ${
        isScrolled ? 'bg-white border-b-[#f2f2f2]' : 'bg-[#ffe6c9] border-b-transparent'
      } transition-all duration-300 ease-in-out`}
      initial={false}
      animate={{
        paddingTop: isScrolled ? '0.75rem' : '1.5rem',
        paddingBottom: isScrolled ? '0.75rem' : '1.5rem'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-48 2xl:px-96">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div title='Company Logo'
            className="text-2xl cursor-pointer font-black text-[#212121]"
          >
            notion.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold hover:bg-[#f2f2f2] p-2 px-3 rounded-lg transition-colors duration-200 text-[#212121]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <motion.a
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#f8f8f8",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  duration: 0.2
                }}
                href="#"
                className="font-semibold border-2 py-2 px-3 rounded-lg border-gray-200 bg-white hover:bg-gray-100 cursor-pointer text-[#212121] transition-colors duration-200"
              >
                Request a Demo
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  duration: 0.2
                }}
                href="#"
                className="font-semibold border py-2 px-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors duration-200"
              >
                Get Notion Free
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                ''
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed inset-0 bg-white z-50 pt-20 px-6"
            >
               {/* Close Button - Fixed position at top right */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-4 mt-8">
                  <motion.a
                    href="#"
                    className="border-2 py-3 px-4 rounded-lg border-gray-200 bg-white hover:bg-gray-100 text-center font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request a Demo
                  </motion.a>
                  <motion.a
                    href="#"
                    className="border py-3 px-4 rounded-lg bg-black text-white hover:bg-gray-800 text-center font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Notion Free
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Navbar;