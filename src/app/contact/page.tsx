'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQ } from '@/components/sections/FAQ';
import { Mail, Phone, MapPin, Share2, ExternalLink, Send, ArrowRight, Calendar } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const faqItems = [
    {
      question: 'How quickly can you start working on my project?',
      answer:
        'We typically start new projects within 1-2 weeks. For urgent projects, we can accelerate the timeline. Let us know your requirements during our initial consultation.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer flexible engagement models including project-based fees, monthly retainers, and performance-based pricing. We will discuss the best option for your business needs.',
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Yes, we work with businesses across Europe and beyond. We have experience in multiple languages and understand different market dynamics.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'Success is measured through clear KPIs defined at the start of our engagement. This includes metrics like lead generation, conversion rates, ROI on ad spend, and revenue growth.',
    },
    {
      question: 'What if I have an existing marketing strategy?',
      answer:
        'We can audit and improve your existing strategy, or build a new one from scratch. We always start by understanding where you are and what has been tried.',
    },
    {
      question: 'How often will we communicate?',
      answer:
        'We provide weekly updates, bi-weekly strategy calls, and ongoing Slack communication. Your account manager is available for any urgent questions.',
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0A0A0A]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[#F97316] opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FAFAFA] mb-6 leading-tight">
            Let's Talk Growth
          </h1>
          <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific question or you want to discuss a bigger partnership, we are here to help.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#141414] border border-[#262626] rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#FAFAFA] mb-6">Send us a message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mb-4"
                >
                  <Send className="w-8 h-8 text-[#0A0A0A]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">Message received</h3>
                <p className="text-[#A3A3A3]">Thank you for reaching out. We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 123 456789"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or question"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-[#F97316] hover:bg-[#f97316]/90 text-[#0A0A0A] font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#FAFAFA] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@sterzik.com',
                    href: 'mailto:hello@sterzik.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+49 (89) 555-0123',
                    href: 'tel:+498955550123',
                  },
                  {
                    icon: MapPin,
                    label: 'Office',
                    value: 'Munich, Germany',
                    href: null,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <Icon className="w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wide">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#FAFAFA] font-semibold hover:text-[#F97316] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#FAFAFA] font-semibold">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#262626]">
                <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wide mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: Share2, href: '#', label: 'LinkedIn' },
                    { icon: ExternalLink, href: '#', label: 'Twitter' },
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-lg border border-[#262626] bg-[#0A0A0A] flex items-center justify-center text-[#F97316] hover:border-[#F97316] transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#F97316]/20 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <Calendar className="w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wide">Prefer a quick call?</p>
                  <h4 className="text-lg font-bold text-[#FAFAFA] mt-1">Book a 15-min consultation</h4>
                </div>
              </div>
              <p className="text-sm text-[#A3A3A3] mb-6 leading-relaxed">
                Schedule a quick call with our team to discuss your project. No sales pitch, just actionable insights.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full px-6 py-3 bg-[#F97316] hover:bg-[#f97316]/90 text-[#0A0A0A] font-bold rounded-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                Open Calendar <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 border-t border-[#262626]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeading
            heading="Frequently Asked Questions"
            description="Find answers to common questions about our services and process"
            centered
            eyebrow="Questions"
          />

          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#141414] border border-[#F97316]/20 rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">Not sure where to start?</h2>
          <p className="text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
            Try our free 30-minute marketing audit. We will analyze your current marketing and show you exactly where you can grow.
          </p>
          <Button href="/free-audit" variant="primary" size="lg">
            Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
