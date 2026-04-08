'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, Mail, Calendar, Zap } from 'lucide-react';

export default function ThankYouPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/3 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#F97316] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={containerRef}
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Animated Checkmark */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="relative w-24 h-24 bg-gradient-to-br from-[#F97316] to-[#f97316]/80 rounded-full flex items-center justify-center shadow-2xl"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              <CheckCircle2 className="w-14 h-14 text-[#0A0A0A]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FAFAFA] mb-4 leading-tight"
        >
          Your Free Audit Is On Its Way
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We will review your marketing within 24 hours and reach out with a personalized action plan. Get ready for some eye-opening insights.
        </motion.p>

        {/* Timeline Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-wide mb-8">What Happens Next</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '1',
                title: 'We analyze your current marketing',
                description: 'Within 24 hours, our team reviews your website, ads, SEO, and overall marketing performance.',
                icon: Zap,
              },
              {
                number: '2',
                title: 'We prepare your custom growth plan',
                description:
                  'We create a detailed, prioritized roadmap with specific recommendations tailored to your business.',
                icon: Calendar,
              },
              {
                number: '3',
                title: 'We schedule your strategy call',
                description: 'A 30-minute deep dive where we walk you through the findings and answer all your questions.',
                icon: Mail,
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Connector line for desktop */}
                  {i < 2 && (
                    <div className="absolute left-full top-8 w-6 h-0.5 bg-gradient-to-r from-[#262626] to-transparent hidden md:block"></div>
                  )}

                  <div className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#F97316]/50 transition-all">
                    {/* Step Number */}
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-[#F97316] text-[#0A0A0A] rounded-full font-bold text-lg mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <Icon className="w-6 h-6 text-[#F97316] mb-4" />

                    {/* Title */}
                    <h3 className="font-bold text-[#FAFAFA] text-lg mb-2 text-left">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-[#A3A3A3] text-left leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 border border-[#F97316]/20 rounded-xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-3">While You Wait...</h2>
          <p className="text-[#A3A3A3] mb-6 leading-relaxed">
            Explore our case studies and see how we have helped similar businesses transform their marketing and scale revenue.
          </p>
          <Button href="/case-studies" variant="primary" size="lg">
            See Our Recent Case Studies <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Trust Signals */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wide">You are in good company</p>
          <p className="text-lg text-[#FAFAFA] font-semibold">200+ businesses have transformed their marketing with us</p>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              {
                quote:
                  'Within the first month, we saw a 40% increase in qualified leads. The audit was incredibly detailed.',
                author: 'Sarah M.',
                role: 'E-commerce CEO',
              },
              {
                quote:
                  'We were losing money on ads we didn\'t even know we were running. This saved us 15k EUR in the first month.',
                author: 'Marcus K.',
                role: 'SaaS Founder',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#141414] border border-[#262626] rounded-lg p-6 hover:border-[#F97316]/30 transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#F97316]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#A3A3A3] italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-[#FAFAFA]">{testimonial.author}</p>
                  <p className="text-xs text-[#666666]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={itemVariants} className="mt-12 pt-12 border-t border-[#262626]">
          <p className="text-[#A3A3A3] mb-4">Have questions while you wait?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-[#F97316] border border-[#F97316] rounded-lg font-bold hover:bg-[#F97316]/10 transition-all inline-flex items-center justify-center gap-2 text-lg"
            >
              Follow Us on LinkedIn <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
