"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  metric: string;
  multiplier: string;
  description: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    company: "TechFlow Commerce",
    industry: "E-Commerce",
    metric: "€340K → €1.2M",
    multiplier: "3.5x",
    description:
      "Online retail brand scaling revenue through conversion optimization and paid advertising.",
    results: [
      "3.5x revenue increase",
      "180% improvement in conversion rate",
      "€12 customer acquisition cost",
      "€340K additional annual revenue",
    ],
  },
  {
    id: "2",
    company: "CloudScale SaaS",
    industry: "SaaS",
    metric: "€180K → €920K",
    multiplier: "5.1x",
    description:
      "B2B platform tripling ARR through performance marketing and customer retention.",
    results: [
      "5.1x ARR growth",
      "62% increase in product signups",
      "€45 CAC",
      "920% improvement in lifetime value",
    ],
  },
  {
    id: "3",
    company: "Premier Health Clinic",
    industry: "Healthcare",
    metric: "€95K → €640K",
    multiplier: "6.7x",
    description:
      "Medical practice expanding patient acquisition through local SEO and digital marketing.",
    results: [
      "6.7x revenue growth",
      "1,200+ new patients",
      "€32 patient acquisition cost",
      "97% patient retention rate",
    ],
  },
  {
    id: "4",
    company: "LuxBrand Agency",
    industry: "Agency Services",
    metric: "€250K → €1.1M",
    multiplier: "4.4x",
    description:
      "Marketing agency scaling client services through strategic positioning and lead generation.",
    results: [
      "4.4x revenue increase",
      "24 enterprise clients acquired",
      "€15K average contract value",
      "89% client retention",
    ],
  },
  {
    id: "5",
    company: "RealEstate Pro",
    industry: "Real Estate",
    metric: "€120K → €580K",
    multiplier: "4.8x",
    description:
      "Real estate brokerage growing transactions through digital marketing and CRM automation.",
    results: [
      "4.8x transaction growth",
      "340 new property listings",
      "€1.2M average deal value",
      "Expanded to 3 new markets",
    ],
  },
  {
    id: "6",
    company: "FinanceFlow",
    industry: "Finance",
    metric: "€210K → €890K",
    multiplier: "4.2x",
    description:
      "Financial services firm growing AUM through content marketing and thought leadership.",
    results: [
      "4.2x AUM growth",
      "€850M under management",
      "450+ new clients",
      "Industry authority established",
    ],
  },
  {
    id: "7",
    company: "LegalShield",
    industry: "Legal Services",
    metric: "€175K → €520K",
    multiplier: "3x",
    description:
      "Law firm growing practice areas through SEO and local marketing strategies.",
    results: [
      "3x revenue growth",
      "280+ new clients",
      "€28K average case value",
      "Top 5 ranking for 12 keywords",
    ],
  },
  {
    id: "8",
    company: "FitnessPro Digital",
    industry: "Fitness & Wellness",
    metric: "€85K → €450K",
    multiplier: "5.3x",
    description:
      "Fitness platform scaling membership base through social advertising and content.",
    results: [
      "5.3x member growth",
      "2,400 active members",
      "€18 CAC",
      "92% monthly retention",
    ],
  },
];

// Hero Section
function CaseStudiesHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-32 pb-16 px-4 md:px-8">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-5xl md:text-7xl font-black mb-6 text-[#FAFAFA]"
          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
          Real Results. Real Businesses.
          <br />
          <span className="text-[#F97316]">Real Revenue.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto">
          These aren't case studies. They're revenue transformations. Real
          clients. Real growth. Real money.
        </p>
      </motion.div>
    </section>
  );
}

// Filter Component
interface FilterProps {
  industries: string[];
  selected: string | null;
  onSelect: (industry: string | null) => void;
}

function IndustryFilter({ industries, selected, onSelect }: FilterProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center mb-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
          selected === null
            ? "bg-[#F97316] text-[#0A0A0A]"
            : "bg-[#141414] text-[#A3A3A3] border border-[#262626] hover:border-[#F97316]"
        }`}
      >
        <Filter className="w-4 h-4" />
        All Industries
      </button>

      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() => onSelect(selected === industry ? null : industry)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            selected === industry
              ? "bg-[#F97316] text-[#0A0A0A]"
              : "bg-[#141414] text-[#A3A3A3] border border-[#262626] hover:border-[#F97316]"
          }`}
        >
          {industry}
        </button>
      ))}
    </motion.div>
  );
}

// Case Study Card Component
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <div className="h-full p-8 border border-[#262626] rounded-xl bg-gradient-to-br from-[#141414] to-[#0a0a0a] backdrop-blur-sm group-hover:border-[#F97316] transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-[#F97316]/20 rounded-full mb-4">
            <p className="text-xs font-semibold text-[#F97316] uppercase tracking-wide">
              {study.industry}
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2 group-hover:text-[#F97316] transition-colors">
            {study.company}
          </h3>

          <p className="text-[#A3A3A3]">{study.description}</p>
        </div>

        {/* Metric */}
        <div className="mb-6 py-6 border-y border-[#262626]">
          <p className="text-sm text-[#A3A3A3] mb-2">Revenue Growth</p>
          <div className="flex items-end gap-4">
            <h4 className="text-3xl md:text-4xl font-black text-[#F97316]">
              {study.multiplier}
            </h4>
            <p className="text-lg text-[#A3A3A3] mb-1">{study.metric}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex-grow">
          <p className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wide mb-3">
            Key Results
          </p>
          <ul className="space-y-2">
            {study.results.map((result, idx) => (
              <li key={idx} className="text-sm text-[#A3A3A3] flex items-start gap-2">
                <span className="text-[#F97316] mt-1 flex-shrink-0">+</span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          className="text-[#F97316] font-semibold text-sm flex items-center group-hover:text-[#FAFAFA] transition-colors"
          whileHover={{ x: 4 }}
        >
          Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Grid Section
function CaseStudiesGrid({ filtered }: { filtered: CaseStudy[] }) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {filtered.map((study, index) => (
        <CaseStudyCard key={study.id} study={study} index={index} />
      ))}
    </motion.div>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "€2.4M+", label: "Total Revenue Generated" },
    { number: "47+", label: "Industries Served" },
    { number: "150+", label: "Successful Projects" },
    { number: "4.9", label: "Average Client Rating" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="text-center p-6 border border-[#262626] rounded-lg bg-[#141414]/50"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-black text-[#F97316] mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-[#A3A3A3]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
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
          className="text-4xl md:text-5xl font-black mb-6 text-[#FAFAFA]"
          style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
          Your Success Story Starts Here
        </h2>

        <p className="text-lg text-[#A3A3A3] mb-10">
          See how we can transform your business. Get a free audit and
          personalized growth plan.
        </p>

        <Button size="lg" variant="primary" href="#contact">
          Book Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}

// Main Page Component
export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));
  const filtered = selectedIndustry
    ? caseStudies.filter((cs) => cs.industry === selectedIndustry)
    : caseStudies;

  return (
    <main className="w-full">
      <CaseStudiesHero />

      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <IndustryFilter
            industries={industries}
            selected={selectedIndustry}
            onSelect={setSelectedIndustry}
          />

          <CaseStudiesGrid filtered={filtered} />
        </div>
      </section>

      <StatsSection />
      <CTASection />
    </main>
  );
}
