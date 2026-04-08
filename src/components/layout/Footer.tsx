'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {/* Column 1: Logo & Description */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center gap-1 mb-4 group">
              <span className="font-black text-xl text-white tracking-tight">STERZIK</span>
              <span className="font-light text-lg text-gray-400 group-hover:text-orange-500 transition-colors">
                SOLUTIONS
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              <motion.a
                href="#linkedin"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="#twitter"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 9-5.6-.07-.2-.14-.4-.2-.6A7.62 7.62 0 0023 3z" />
                </svg>
              </motion.a>
              <motion.a
                href="#instagram"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t.footer.servicesHeader}
            </h3>
            <ul className="space-y-3">
              {t.footer.servicesLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t.footer.companyHeader}
            </h3>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-6">
              {t.footer.connectHeader}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors break-all"
                >
                  {t.footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.footer.phone.replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="text-gray-400 text-sm">{t.footer.address}</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-xs text-center md:text-left">{t.footer.copyright}</p>
            <div className="flex gap-6 items-center">
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 text-xs transition-colors"
              >
                {t.footer.legal.impressum}
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 text-xs transition-colors"
              >
                {t.footer.legal.datenschutz}
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 text-xs transition-colors"
              >
                {t.footer.legal.privacy}
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 text-xs transition-colors"
              >
                {t.footer.legal.terms}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
