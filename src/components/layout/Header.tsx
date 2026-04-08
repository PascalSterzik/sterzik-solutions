'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.caseStudies, href: '#case-studies' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      style={{
        borderBottomColor: isScrolled ? 'rgba(38, 38, 38, 0.5)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-black text-xl md:text-2xl text-white tracking-tight">
              STERZIK
            </span>
            <span className="font-light text-lg md:text-xl text-gray-400 group-hover:text-orange-500 transition-colors">
              SOLUTIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="px-3 py-2 text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors border border-gray-600 hover:border-orange-500 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </motion.button>

            {/* Primary CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/free-audit"
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded transition-colors"
              >
                {t.header.getAudit}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="px-2.5 py-1.5 text-xs font-semibold text-gray-400 hover:text-orange-500 transition-colors border border-gray-600 hover:border-orange-500 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-orange-500 transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label={t.common.menu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur border-t border-gray-700/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 rounded transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <motion.div
                className="pt-2 border-t border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/free-audit"
                  onClick={handleNavClick}
                  className="block w-full px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm text-center rounded transition-colors"
                >
                  {t.header.getAudit}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
