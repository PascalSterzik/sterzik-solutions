'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Trophy,
  Users,
  Target,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

// Value Card Component
function ValueCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="bg-[#141414] border border-[#262626] rounded-lg p-8 hover:border-[#F97316]/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="mb-4"
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="w-12 h-12 text-[#F97316]" />
      </motion.div>
      <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">
        {title}
      </h3>
      <p className="text-[#A3A3A3] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string | number;
  label: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.p
        className="text-5xl md:text-6xl font-black text-[#F97316] mb-2"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
      >
        {typeof value === 'string' ? value : value}
      </motion.p>
      <p className="text-[#A3A3A3] text-lg">{label}</p>
    </motion.div>
  );
}

// Team Member Card Component
function TeamMemberCard({
  name,
  role,
  delay = 0,
}: {
  name: string;
  role: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#F97316]/30 to-[#F97316]/10 rounded-lg flex items-center justify-center border border-[#262626]"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-6xl">👤</div>
      </motion.div>
      <h4 className="text-xl font-bold text-[#FAFAFA] mb-1">{name}</h4>
      <p className="text-[#A3A3A3]">{role}</p>
    </motion.div>
  );
}

// Main About Page
export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <div className="w-full bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Us
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're Not Another Agency. We're Your Growth Partner.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Founded on a simple belief: marketing agencies should only get paid when they deliver results.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-4">
                Pascal's Story
              </p>

              <h2
                className="text-4xl md:text-5xl font-black mb-6 text-[#FAFAFA]"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                Built from Frustration
              </h2>

              <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed">
                <p>
                  I built Sterzik Solutions because I was tired of seeing businesses waste money on marketing that didn't work. During my early years as a freelance developer, I watched smart founders get ripped off by agencies pushing vanity metrics, long contracts, and inflated invoices.
                </p>

                <p>
                  Every strategy we build is tied to one metric: your revenue. Not impressions. Not clicks. Not email opens. Real, measurable business growth.
                </p>

                <p>
                  We charge fairly. We report transparently. We move fast. And we only win when you win.
                </p>
              </div>
            </motion.div>

            {/* Founder Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#F97316]/30 to-[#F97316]/10 rounded-lg h-96 md:h-[500px] flex items-center justify-center border border-[#262626]">
                <div className="text-8xl">👨‍💼</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our Values"
            heading="What We Stand For"
            description="These aren't just words on our website. They're how we operate every day."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              title="Results Over Retainers"
              description="We earn our keep every month. No long-term contracts you're locked into. Prove value or we get fired. That's how it should work."
              delay={0}
            />
            <ValueCard
              icon={Zap}
              title="Radical Transparency"
              description="Real-time dashboards, weekly reports, no hidden fees. You know exactly what's working, what we're testing, and why we're testing it."
              delay={0.1}
            />
            <ValueCard
              icon={Users}
              title="Speed of Execution"
              description="We move fast because your revenue depends on it. Strategy finalized in days, not weeks. Campaigns live in hours, not months."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section ref={statsRef} className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="By The Numbers"
            heading="Our Impact"
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCard
              value="€2.4M+"
              label="Revenue Generated for Clients"
              delay={0}
            />
            <StatCard
              value="47+"
              label="Industries Served"
              delay={0.1}
            />
            <StatCard
              value="94%"
              label="Client Retention Rate"
              delay={0.2}
            />
            <StatCard
              value="4.9"
              label="Average Client Rating"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our Team"
            heading="Meet the Team Behind Your Growth"
            description="A small, focused group obsessed with your success."
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              name="Pascal Sterzik"
              role="Founder & CEO"
              delay={0}
            />
            <TeamMemberCard
              name="Sarah Mueller"
              role="Head of Strategy"
              delay={0.1}
            />
            <TeamMemberCard
              name="Marco Bianchi"
              role="Lead Developer"
              delay={0.2}
            />
            <TeamMemberCard
              name="Elena Fischer"
              role="Analytics & Optimization"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-4 text-center">
              Our Philosophy
            </p>

            <h2
              className="text-4xl md:text-5xl font-black mb-8 text-center text-[#FAFAFA]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              No Vanity Metrics. Only Real Growth.
            </h2>

            <div className="bg-[#141414] border border-[#262626] rounded-lg p-8 md:p-12">
              <p className="text-lg text-[#A3A3A3] leading-relaxed mb-6">
                Every strategy, every campaign, every page is built to convert. We measure success in revenue, leads, and customer lifetime value. Not impressions. Not vanity metrics that sound good in PowerPoint but don't move the needle.
              </p>

              <p className="text-lg text-[#A3A3A3] leading-relaxed">
                Our team combines decades of digital marketing expertise with obsessive attention to detail. We stay ahead of algorithm changes, platform updates, and market trends so you don't have to. Your only job is to focus on running your business. We'll handle the growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Join Our Success Stories
          </h2>
          <p className="text-lg text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
            Let's start with a free audit. No pitch. No pressure. Just honest feedback about your marketing and clear opportunities to grow.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              href="/free-audit"
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              Get Your Free Audit <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
