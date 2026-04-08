'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FAQ } from '@/components/sections/FAQ';
import {
  ArrowRight,
  TrendingUp,
  Lock,
  AlertCircle,
  Code2,
  Search,
  Zap,
  ShoppingCart,
  Mail,
  Lightbulb,
  Star,
  CheckCircle,
  Globe,
  BarChart3,
} from 'lucide-react';

// Hero Section Component
function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-20 pb-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={containerRef}
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-white"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
          variants={itemVariants}
        >
          {t.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.a
            href="/free-audit"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition-colors text-lg inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta} <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#services"
            className="px-8 py-4 border-2 border-gray-700 hover:border-orange-500 text-white font-bold rounded transition-colors text-lg inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          variants={itemVariants}
        >
          {[
            { label: t.stats.avgGrowth, value: t.stats.avgGrowthValue },
            { label: t.stats.clientsServed, value: t.stats.clientsServedValue },
            { label: t.stats.campaignsLaunched, value: t.stats.campaignsLaunchedValue },
            { label: t.stats.avgROI, value: t.stats.avgROIValue },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm"
              whileHover={{ borderColor: '#F97316', y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Trust Bar Component
function TrustBar() {
  const logos = [
    "Technology",
    "E-Commerce",
    "Healthcare",
    "Finance",
    "SaaS",
    "Real Estate",
    "Legal",
    "Marketing",
  ];

  return (
    <section className="py-12 md:py-16 border-y border-[#262626] overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-sm text-[#A3A3A3]">
          Trusted by businesses in 47+ industries
        </p>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="px-6 py-3 border border-[#262626] rounded-lg bg-[#141414] whitespace-nowrap text-[#A3A3A3] font-medium flex-shrink-0"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section Component
function ProblemSection() {
  const problems = [
    {
      icon: TrendingUp,
      title: "You're paying for vanity metrics",
      description:
        "Agencies show traffic, not revenue. We show you what actually matters: conversions and real business growth.",
    },
    {
      icon: Lock,
      title: "You're locked into contracts with no results",
      description:
        "12-month contracts with results that show up in month 2. We guarantee performance or you don't pay.",
    },
    {
      icon: AlertCircle,
      title: "You've been burned before",
      description:
        "Agencies that promise the world and deliver a brochure. We deliver revenue. Period.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          heading="Growing a Business Is Hard. Most Marketing Agencies Make It Harder."
          description="The status quo is broken. Here's what we see every day."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="p-8 border border-[#262626] rounded-xl bg-[#141414]/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  borderColor: "#F97316",
                  backgroundColor: "rgba(249, 115, 22, 0.05)",
                }}
              >
                <Icon className="w-12 h-12 text-[#F97316] mb-4" />
                <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#A3A3A3] leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Solution Section Component
function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-8 text-[#FAFAFA]"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            We Only Win When You Win.
          </h2>

          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              className="p-8 border border-[#F97316] rounded-xl bg-[#F97316]/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#FAFAFA] mb-4">
                Our Guarantee
              </h3>
              <p className="text-lg text-[#A3A3A3] leading-relaxed mb-6">
                If we don't hit the agreed-upon targets, you don't pay. Period.
              </p>
              <p className="text-[#A3A3A3]">
                We don't charge for guesses. We charge for results. That's why
                we're so confident in what we do.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" variant="primary" href="#contact">
              Get Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Web Design & Development",
      description:
        "High-converting websites built for revenue, not just aesthetics. Performance-optimized, SEO-ready, conversion-focused.",
      span: "md:col-span-2",
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description:
        "Dominate search results. Rank for high-intent keywords that bring qualified traffic and actual customers.",
    },
    {
      icon: Zap,
      title: "Paid Advertising",
      description:
        "Google, Meta, LinkedIn. We manage your ad spend to maximize ROI, not just impressions.",
    },
    {
      icon: ShoppingCart,
      title: "CRO & Analytics",
      description:
        "Every element tested. Every conversion tracked. Every visitor analyzed for maximum revenue extraction.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Automated sequences that convert. Your most valuable channel, optimized for lifetime value.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Funnels",
      description:
        "End-to-end marketing strategy. From awareness to advocacy. We map it. We build it. We optimize it.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What We Do"
          heading="Services"
          description="Everything you need to grow revenue, delivered with precision."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className={`p-8 border border-[#262626] rounded-xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] backdrop-blur-sm flex flex-col justify-between group cursor-pointer overflow-hidden ${
                  service.span || ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  borderColor: "#F97316",
                  y: -4,
                  backgroundColor: "rgba(249, 115, 22, 0.05)",
                }}
              >
                <div>
                  <Icon className="w-10 h-10 text-[#F97316] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A3A3A3] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                <motion.div
                  className="mt-4 text-[#F97316] font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Results Section Component
function ResultsSection() {
  const caseStudies = [
    {
      industry: "E-Commerce",
      metric: "€340K → €1.2M",
      description: "Online retail brand scaling revenue 3.5x in 8 months",
    },
    {
      industry: "SaaS",
      metric: "€180K → €920K",
      description: "B2B platform tripling ARR through performance marketing",
    },
    {
      industry: "Healthcare",
      metric: "€95K → €640K",
      description: "Medical practice expanding patient acquisition 6.7x",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Proof"
          heading="Results That Speak Louder Than Promises"
          description="Real revenue. Real growth. Real businesses."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="p-8 border border-[#262626] rounded-xl bg-[#141414]/50 backdrop-blur-sm group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  borderColor: "#F97316",
                  y: -4,
                }}
              >
                <div className="inline-block px-3 py-1 bg-[#F97316]/20 rounded-full mb-4">
                  <p className="text-xs font-semibold text-[#F97316] uppercase tracking-wide">
                    {study.industry}
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-[#F97316] mb-4">
                  {study.metric}
                </h3>

                <p className="text-[#A3A3A3] mb-6">{study.description}</p>

                <motion.a
                  href="/case-studies"
                  className="text-[#F97316] font-semibold text-sm flex items-center group-hover:text-[#FAFAFA] transition-colors"
                  whileHover={{ x: 4 }}
                >
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Sterzik Solutions didn't just build us a website, they built us a revenue machine. Our conversion rate tripled in 6 months.",
      author: "Sarah Chen",
      title: "Founder & CEO",
      company: "TechFlow Commerce",
      rating: 5,
      result: "Revenue increased 3.2x",
    },
    {
      quote:
        "We tried three agencies before Sterzik. None of them cared about actual ROI. These guys live and breathe revenue growth.",
      author: "Michael Rodriguez",
      title: "Marketing Director",
      company: "Premium Health Services",
      rating: 5,
      result: "1,200+ new patients acquired",
    },
    {
      quote:
        "The guarantee sealed it for us. No results, no payment. But they crushed it anyway. We're doubling our contract next year.",
      author: "Lisa Wong",
      title: "CEO",
      company: "Digital Agency Network",
      rating: 5,
      result: "€450K additional revenue",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Social Proof"
          heading="What Our Clients Say"
          description="Results backed by real people who trusted us with their businesses."
          centered
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="p-8 border border-[#262626] rounded-xl bg-[#141414]/50 backdrop-blur-sm flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  borderColor: "#F97316",
                  y: -4,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>

                <p className="text-lg text-[#FAFAFA] mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                <div className="mb-4 pt-4 border-t border-[#262626]">
                  <p className="font-semibold text-[#FAFAFA] text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#A3A3A3]">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>

                <div className="inline-block px-3 py-1 bg-[#F97316]/20 rounded-full w-fit">
                  <p className="text-xs font-semibold text-[#F97316]">
                    {testimonial.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Guarantee Section Component
function GuaranteeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const guarantees = [
    "Performance-based pricing",
    "No results, no payment",
    "Transparent reporting",
    "Dedicated account manager",
    "24/7 support",
    "Money-back guarantee",
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="p-12 md:p-16 border border-[#F97316] rounded-2xl bg-gradient-to-br from-[#F97316]/10 to-[#0a0a0a] backdrop-blur-sm text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-6 text-[#FAFAFA]"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Our Promise
          </h2>

          <p className="text-xl text-[#F97316] mb-8">
            Results or You Don't Pay
          </p>

          <p className="text-lg text-[#A3A3A3] mb-8 leading-relaxed">
            We're not interested in vanity metrics or long-term contracts with
            no accountability. We're paid based on one thing: revenue. If we
            don't hit the targets we agree to, you don't pay us. It's that
            simple.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-[#141414]/50 rounded-lg border border-[#262626]"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <p className="text-[#A3A3A3]">{guarantee}</p>
              </motion.div>
            ))}
          </div>

          <Button size="lg" variant="primary" href="#contact">
            Get Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const faqItems = [
    {
      question: "How does the performance-based pricing work?",
      answer:
        "We agree on specific revenue targets upfront. We're only paid when those targets are hit. No results, no payment. It's that simple and aligns our incentives with yours.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with businesses across 47+ industries: E-commerce, SaaS, healthcare, finance, legal, real estate, and more. If it generates revenue, we can help grow it.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients see meaningful results within 60-90 days. We're not interested in quick wins. We build sustainable, long-term revenue growth.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Absolutely. We provide dedicated account management, 24/7 support, and continuous optimization. You get a true partner, not a vendor.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "Our guarantee covers this. If we don't hit the agreed-upon targets, you don't pay. We only succeed when you succeed.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Revenue. Not traffic, not clicks, not impressions. We measure everything down to the revenue impact. Every decision is data-driven and ROI-focused.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Questions"
          heading="Frequently Asked"
          centered
          className="mb-16"
        />

        <FAQ items={faqItems} />
      </div>
    </section>
  );
}

// Final CTA Section Component
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 border-t border-[#262626]">
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#FAFAFA]"
          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
          Ready to Stop Guessing and Start Growing?
        </h2>

        <p className="text-lg md:text-xl text-[#A3A3A3] mb-8">
          Get a free, no-obligation audit of your current marketing. We'll
          identify exactly what's broken and show you how to fix it.
        </p>

        <p className="text-[#A3A3A3] mb-10">
          No commitment. No BS. Just a clear plan to grow your business.
        </p>

        <Button size="lg" variant="primary" href="#contact">
          Book Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}

// Main Export
export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
