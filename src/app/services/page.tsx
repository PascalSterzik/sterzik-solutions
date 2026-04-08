'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Code2,
  Search,
  TrendingUp,
  Zap,
  Mail,
  Lightbulb,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Service Deep-Dive Component
function ServiceSection({
  title,
  subtitle,
  description,
  keyPoints,
  technologies,
  results,
  icon: Icon,
  imagePosition = 'left',
}: {
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  technologies?: string[];
  results?: string;
  icon: React.ComponentType<{ className?: string }>;
  imagePosition?: 'left' | 'right';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contentVariants = {
    hidden: { opacity: 0, x: imagePosition === 'left' ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imagePosition === 'left' ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 border-t border-[#262626]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image Placeholder */}
          <motion.div
            className={`order-2 ${imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="bg-gradient-to-br from-[#F97316]/20 to-[#F97316]/5 rounded-lg h-80 md:h-96 flex items-center justify-center border border-[#262626]">
              <Icon className="w-24 h-24 text-[#F97316]/40" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={`order-1 ${imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Service
            </motion.p>

            <h3
              className="text-3xl md:text-4xl font-black mb-4 text-[#FAFAFA]"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            >
              {title}
            </h3>

            <p className="text-lg text-[#F97316] font-semibold mb-4">
              {subtitle}
            </p>

            <p className="text-[#A3A3A3] text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {/* Key Points */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#FAFAFA] uppercase tracking-wide mb-4">
                Key Capabilities
              </p>
              <ul className="space-y-3">
                {keyPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <Check className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-[#A3A3A3]">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Results */}
            {results && (
              <div className="bg-[#141414] border border-[#262626] rounded-lg p-4 mb-8">
                <p className="text-sm text-[#A3A3A3] mb-1">Average Results</p>
                <p className="text-2xl font-bold text-[#F97316]">{results}</p>
              </div>
            )}

            {/* Technologies */}
            {technologies && (
              <div>
                <p className="text-sm font-semibold text-[#FAFAFA] uppercase tracking-wide mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-[#141414] border border-[#262626] rounded text-sm text-[#A3A3A3]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Process Step Component
function ProcessStep({
  number,
  title,
  description,
  delay = 0,
}: {
  number: number;
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#F97316]/80 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-2xl font-black text-[#0A0A0A]">{number}</span>
          </motion.div>
        </div>
        <div className="flex-1 pt-1">
          <h4 className="text-xl font-bold text-[#FAFAFA] mb-2">{title}</h4>
          <p className="text-[#A3A3A3] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Services Page
export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="w-full bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Marketing That Actually Drives Revenue
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From first click to final sale, we build and optimize every touchpoint in your customer journey.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Deep-Dives */}
      <ServiceSection
        title="Web Design & Development"
        subtitle="Websites That Work As Hard As You Do"
        description="Fast, conversion-optimized sites built on modern frameworks that turn visitors into customers. Every pixel is purposeful, every interaction is tested."
        keyPoints={[
          'Mobile-first responsive design',
          'Sub-2 second load times',
          'Conversion-optimized layouts',
          'A/B tested call-to-action buttons',
          'Advanced analytics integration',
          'Accessibility compliance (WCAG)',
        ]}
        technologies={['Next.js', 'React', 'Tailwind CSS', 'Vercel']}
        results="+156% average increase in conversion rate"
        icon={Code2}
        imagePosition="left"
      />

      <ServiceSection
        title="SEO & Content Marketing"
        subtitle="Get Found by Customers Who Are Ready to Buy"
        description="Strategic content that ranks, converts, and builds authority. We combine technical SEO with compelling storytelling to dominate search rankings and drive qualified traffic."
        keyPoints={[
          'Technical SEO audits and optimization',
          'Keyword research and strategy',
          'Content creation and optimization',
          'Link building and outreach',
          'Local SEO for multi-location businesses',
          'Monthly performance reporting',
        ]}
        technologies={['SEMrush', 'Ahrefs', 'Google Search Console']}
        results="312% average increase in organic traffic within 6 months"
        icon={Search}
        imagePosition="right"
      />

      <ServiceSection
        title="Paid Advertising"
        subtitle="Every Euro Tracked. Every Campaign Profitable."
        description="Full-funnel paid strategy across Google, Meta, LinkedIn, and TikTok. We obsess over ROAS, scale winners, and kill losers. Transparent reporting weekly."
        keyPoints={[
          'Google Ads (Search, Display, Shopping)',
          'Meta Ads (Facebook, Instagram, Threads)',
          'LinkedIn Ads for B2B',
          'Audience segmentation and lookalikes',
          'Creative testing and optimization',
          'Real-time campaign monitoring',
        ]}
        technologies={['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager']}
        results="4.2x average ROAS across all client campaigns"
        icon={TrendingUp}
        imagePosition="left"
      />

      <ServiceSection
        title="Conversion Rate Optimization"
        subtitle="Turn More Visitors Into Customers"
        description="Data-driven testing that transforms browsers into buyers. We analyze user behavior, test hypotheses, and incrementally improve every step of your funnel."
        keyPoints={[
          'Heatmap and session recording analysis',
          'A/B testing and multivariate testing',
          'Landing page optimization',
          'Checkout flow optimization',
          'Form field optimization',
          'Copy and messaging testing',
        ]}
        technologies={['Hotjar', 'Unbounce', 'Optimizely']}
        results="+87% average increase in conversion rate"
        icon={Zap}
        imagePosition="right"
      />

      <ServiceSection
        title="Email Marketing & Automation"
        subtitle="Automated Revenue While You Sleep"
        description="Behavioral triggers, segmentation, and personalization that turn subscribers into repeat customers. We build sequences that feel human, perform like machines."
        keyPoints={[
          'Welcome series that engage',
          'Abandoned cart recovery',
          'Re-engagement campaigns',
          'Newsletter strategy and design',
          'Segmentation and personalization',
          'Deliverability optimization',
        ]}
        technologies={['Klaviyo', 'Mailchimp', 'ConvertKit']}
        results="38% average increase in email revenue"
        icon={Mail}
        imagePosition="left"
      />

      <ServiceSection
        title="Marketing Funnels & Strategy"
        subtitle="The Complete Customer Journey, Engineered"
        description="Full-funnel strategy from awareness to retention. We map your customer journey, identify friction, and build systems that scale. This is the foundation everything else builds on."
        keyPoints={[
          'Customer journey mapping',
          'Lead magnet creation and deployment',
          'Nurture sequence design',
          'Upsell and cross-sell paths',
          'Retention strategies',
          'Full-funnel attribution modeling',
        ]}
        technologies={['HubSpot', 'ActiveCampaign', 'Zapier']}
        icon={Lightbulb}
        imagePosition="right"
      />

      {/* How We Work Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            heading="How We Work"
            description="4 steps to sustainable growth"
            centered={true}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Discovery & Audit"
              description="We dive deep into your business, market, competitors, and current performance. This is free and usually worth thousands in insights."
              delay={0}
            />
            <ProcessStep
              number={2}
              title="Strategy & Roadmap"
              description="Based on findings, we design a 90-day roadmap with clear priorities, expected outcomes, and success metrics aligned to your revenue goals."
              delay={0.1}
            />
            <ProcessStep
              number={3}
              title="Execute & Optimize"
              description="We implement campaigns, run tests, and optimize relentlessly. Weekly check-ins, transparent reporting, and data-driven decisions every step."
              delay={0.2}
            />
            <ProcessStep
              number={4}
              title="Scale & Grow"
              description="Once we find what works, we scale it. We double down on winners and build predictable systems for long-term sustainable growth."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ref} className="py-20 px-4 md:px-8 border-t border-[#262626]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          >
            Ready to See What's Possible?
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
