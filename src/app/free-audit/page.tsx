'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, ChevronDown, CheckCircle2, Clock, BarChart3, Zap } from 'lucide-react';

interface FormData {
  companyName: string;
  websiteUrl: string;
  industry: string;
  monthlyRevenue: string;
  marketingChannels: string[];
  monthlyBudget: string;
  marketingChallenge: string;
  primaryGoal: string;
  revenueGoal: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  bestTimeToCall: string;
}

const initialFormData: FormData = {
  companyName: '',
  websiteUrl: '',
  industry: '',
  monthlyRevenue: '',
  marketingChannels: [],
  monthlyBudget: '',
  marketingChallenge: '',
  primaryGoal: '',
  revenueGoal: '',
  timeline: '',
  fullName: '',
  email: '',
  phone: '',
  preferredContact: 'Email',
  bestTimeToCall: '',
};

// Step 1: About Your Business
function Step1Form({ data, onChange }: { data: FormData; onChange: (data: FormData) => void }) {
  const isComplete = data.companyName && data.websiteUrl && data.industry && data.monthlyRevenue;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Company Name</label>
        <input
          type="text"
          value={data.companyName}
          onChange={(e) => onChange({ ...data, companyName: e.target.value })}
          placeholder="Your company name"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Website URL</label>
        <input
          type="url"
          value={data.websiteUrl}
          onChange={(e) => onChange({ ...data, websiteUrl: e.target.value })}
          placeholder="https://example.com"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Industry</label>
        <select
          value={data.industry}
          onChange={(e) => onChange({ ...data, industry: e.target.value })}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
        >
          <option value="">Select your industry</option>
          <option value="ecommerce">E-commerce</option>
          <option value="saas">SaaS</option>
          <option value="local">Local Business</option>
          <option value="professional">Professional Services</option>
          <option value="realestate">Real Estate</option>
          <option value="health">Health & Wellness</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Monthly Revenue Range</label>
        <select
          value={data.monthlyRevenue}
          onChange={(e) => onChange({ ...data, monthlyRevenue: e.target.value })}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
        >
          <option value="">Select revenue range</option>
          <option value="under-10k">Under 10k EUR</option>
          <option value="10k-50k">10k - 50k EUR</option>
          <option value="50k-200k">50k - 200k EUR</option>
          <option value="200k-500k">200k - 500k EUR</option>
          <option value="500k-plus">500k+ EUR</option>
        </select>
      </div>

      {!isComplete && (
        <p className="text-sm text-[#A3A3A3] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#F97316] rounded-full"></span>
          Please fill in all fields to continue
        </p>
      )}
    </motion.div>
  );
}

// Step 2: Your Current Marketing
function Step2Form({ data, onChange }: { data: FormData; onChange: (data: FormData) => void }) {
  const isComplete = data.monthlyBudget && data.marketingChallenge && data.marketingChannels.length > 0;

  const channelOptions = [
    { id: 'google', label: 'Google Ads' },
    { id: 'meta', label: 'Meta Ads' },
    { id: 'seo', label: 'SEO' },
    { id: 'email', label: 'Email Marketing' },
    { id: 'social', label: 'Social Media' },
    { id: 'content', label: 'Content Marketing' },
    { id: 'none', label: 'None' },
  ];

  const toggleChannel = (id: string) => {
    const channels = data.marketingChannels.includes(id)
      ? data.marketingChannels.filter((c) => c !== id)
      : [...data.marketingChannels, id];
    onChange({ ...data, marketingChannels: channels });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-3">Current Marketing Channels</label>
        <div className="grid grid-cols-2 gap-3">
          {channelOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => toggleChannel(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-lg border-2 transition-all text-left font-medium ${
                data.marketingChannels.includes(option.id)
                  ? 'border-[#F97316] bg-[#F97316]/10 text-[#FAFAFA]'
                  : 'border-[#262626] bg-[#141414] text-[#A3A3A3] hover:border-[#F97316]/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded border-2 transition-colors ${
                    data.marketingChannels.includes(option.id)
                      ? 'border-[#F97316] bg-[#F97316]'
                      : 'border-[#666666]'
                  }`}
                >
                  {data.marketingChannels.includes(option.id) && (
                    <Check className="w-3 h-3 text-[#0A0A0A]" />
                  )}
                </div>
                {option.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Monthly Marketing Budget</label>
        <select
          value={data.monthlyBudget}
          onChange={(e) => onChange({ ...data, monthlyBudget: e.target.value })}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
        >
          <option value="">Select budget range</option>
          <option value="under-1k">Under 1k EUR</option>
          <option value="1k-5k">1k - 5k EUR</option>
          <option value="5k-20k">5k - 20k EUR</option>
          <option value="20k-plus">20k+ EUR</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Biggest Marketing Challenge</label>
        <textarea
          value={data.marketingChallenge}
          onChange={(e) => onChange({ ...data, marketingChallenge: e.target.value })}
          placeholder="What's your biggest marketing pain point right now?"
          rows={4}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors resize-none"
        />
      </div>

      {!isComplete && (
        <p className="text-sm text-[#A3A3A3] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#F97316] rounded-full"></span>
          Please fill in all fields to continue
        </p>
      )}
    </motion.div>
  );
}

// Step 3: Your Goals
function Step3Form({ data, onChange }: { data: FormData; onChange: (data: FormData) => void }) {
  const isComplete = data.primaryGoal && data.revenueGoal && data.timeline;

  const goalOptions = [
    { id: 'leads', label: 'More leads' },
    { id: 'sales', label: 'More sales' },
    { id: 'roi', label: 'Better ROI' },
    { id: 'awareness', label: 'Brand awareness' },
    { id: 'newmarket', label: 'Enter new market' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-3">What is your primary goal?</label>
        <div className="space-y-2">
          {goalOptions.map((option) => (
            <motion.label
              key={option.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-3 rounded-lg border-2 border-[#262626] bg-[#141414] cursor-pointer hover:border-[#F97316]/50 transition-all"
            >
              <input
                type="radio"
                name="goal"
                value={option.id}
                checked={data.primaryGoal === option.id}
                onChange={(e) => onChange({ ...data, primaryGoal: e.target.value })}
                className="w-4 h-4 accent-[#F97316]"
              />
              <span className="ml-3 text-[#FAFAFA] font-medium">{option.label}</span>
            </motion.label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Revenue Goal (Next 12 months)</label>
        <input
          type="text"
          value={data.revenueGoal}
          onChange={(e) => onChange({ ...data, revenueGoal: e.target.value })}
          placeholder="e.g., 500k EUR"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Timeline</label>
        <select
          value={data.timeline}
          onChange={(e) => onChange({ ...data, timeline: e.target.value })}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
        </select>
      </div>

      {!isComplete && (
        <p className="text-sm text-[#A3A3A3] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#F97316] rounded-full"></span>
          Please fill in all fields to continue
        </p>
      )}
    </motion.div>
  );
}

// Step 4: Contact Details
function Step4Form({ data, onChange }: { data: FormData; onChange: (data: FormData) => void }) {
  const isComplete =
    data.fullName && data.email && data.phone && data.preferredContact && data.bestTimeToCall;

  const timeOptions = [
    { id: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { id: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { id: 'evening', label: 'Evening (5 PM - 8 PM)' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Full Name</label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          placeholder="Your name"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Email Address</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Phone Number</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          placeholder="+49 123 456789"
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] placeholder-[#666666] focus:outline-none focus:border-[#F97316] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-3">Preferred Contact Method</label>
        <div className="space-y-2">
          {['Email', 'Phone', 'WhatsApp'].map((method) => (
            <motion.label
              key={method}
              whileHover={{ scale: 1.02 }}
              className="flex items-center p-3 rounded-lg border-2 border-[#262626] bg-[#141414] cursor-pointer hover:border-[#F97316]/50 transition-all"
            >
              <input
                type="radio"
                name="contact"
                value={method}
                checked={data.preferredContact === method}
                onChange={(e) => onChange({ ...data, preferredContact: e.target.value })}
                className="w-4 h-4 accent-[#F97316]"
              />
              <span className="ml-3 text-[#FAFAFA] font-medium">{method}</span>
            </motion.label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#FAFAFA] mb-2">Best Time to Call</label>
        <select
          value={data.bestTimeToCall}
          onChange={(e) => onChange({ ...data, bestTimeToCall: e.target.value })}
          className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg text-[#FAFAFA] focus:outline-none focus:border-[#F97316] transition-colors appearance-none"
        >
          <option value="">Select preferred time</option>
          {timeOptions.map((time) => (
            <option key={time.id} value={time.id}>
              {time.label}
            </option>
          ))}
        </select>
      </div>

      {!isComplete && (
        <p className="text-sm text-[#A3A3A3] flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#F97316] rounded-full"></span>
          Please fill in all fields to continue
        </p>
      )}
    </motion.div>
  );
}

// Thank You Screen
function ThankYouScreen() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12 space-y-8"
    >
      {/* Animated checkmark */}
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        <motion.div
          className="relative w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <CheckCircle2 className="w-12 h-12 text-[#0A0A0A]" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-black text-[#FAFAFA]">Your Free Audit Is On Its Way</h2>
        <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto">
          We will review your marketing within 24 hours and reach out with a personalized action plan.
        </p>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        {[
          { num: '1', title: 'We analyze your current marketing', subtitle: 'Within 24 hours' },
          { num: '2', title: 'We prepare your custom growth plan', subtitle: 'Detailed roadmap' },
          { num: '3', title: 'We schedule your strategy call', subtitle: '30-min deep dive' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-lg border border-[#262626] bg-[#141414]"
          >
            <div className="text-3xl font-black text-[#F97316] mb-3">{item.num}</div>
            <p className="font-semibold text-[#FAFAFA] mb-1">{item.title}</p>
            <p className="text-sm text-[#A3A3A3]">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>

      {/* Follow CTA */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <p className="text-[#A3A3A3] mb-4">While you wait, check out our recent case studies</p>
        <Button href="/case-studies" variant="primary">
          See Our Work
        </Button>
      </motion.div>
    </motion.div>
  );
}

// Main Page Component
export default function FreeAuditPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const pageRef = useRef(null);

  const steps = [
    { title: 'About Your Business', component: Step1Form },
    { title: 'Your Current Marketing', component: Step2Form },
    { title: 'Your Goals', component: Step3Form },
    { title: 'Your Contact Details', component: Step4Form },
  ];

  const getStepCompletion = (step: number) => {
    switch (step) {
      case 1:
        return formData.companyName && formData.websiteUrl && formData.industry && formData.monthlyRevenue;
      case 2:
        return formData.monthlyBudget && formData.marketingChallenge && formData.marketingChannels.length > 0;
      case 3:
        return formData.primaryGoal && formData.revenueGoal && formData.timeline;
      case 4:
        return (
          formData.fullName &&
          formData.email &&
          formData.phone &&
          formData.preferredContact &&
          formData.bestTimeToCall
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1]?.component;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <ThankYouScreen />
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0A0A0A] pt-20 pb-16 px-4 md:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#F97316] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#FAFAFA] leading-tight">
            Get Your Free Marketing Audit
          </h1>
          <p className="text-lg md:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            In 30 minutes, we will show you exactly where you are leaving money on the table and how to fix
            it. No commitment. No BS.
          </p>
          <p className="flex items-center justify-center gap-2 text-[#F97316] font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            Join 200+ businesses that have transformed their marketing
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#141414] border border-[#262626] rounded-xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#FAFAFA]">
                    Step {currentStep} of {steps.length}
                  </span>
                  <span className="text-xs text-[#A3A3A3]">{Math.round((currentStep / steps.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#F97316]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Step Title */}
              <motion.h2
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-[#FAFAFA] mb-8"
              >
                {steps[currentStep - 1]?.title}
              </motion.h2>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                {CurrentStepComponent && (
                  <CurrentStepComponent key={currentStep} data={formData} onChange={setFormData} />
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-[#262626]">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-[#0A0A0A] text-[#666666] cursor-not-allowed'
                      : 'bg-[#262626] text-[#FAFAFA] hover:bg-[#333333]'
                  }`}
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={getStepCompletion(currentStep) ? { scale: 1.02 } : {}}
                  whileTap={getStepCompletion(currentStep) ? { scale: 0.98 } : {}}
                  onClick={handleNext}
                  disabled={!getStepCompletion(currentStep)}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    getStepCompletion(currentStep)
                      ? 'bg-[#F97316] text-[#0A0A0A] hover:bg-[#f97316]/90'
                      : 'bg-[#F97316]/50 text-[#0A0A0A]/50 cursor-not-allowed'
                  }`}
                >
                  {currentStep === steps.length ? 'Get Your Audit' : 'Next'}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* What You'll Get */}
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-[#FAFAFA] text-lg">What You'll Get In Your Audit</h3>
              <ul className="space-y-3">
                {[
                  'Complete website performance analysis',
                  'SEO gap analysis vs. competitors',
                  'Paid ad account audit (if applicable)',
                  'Conversion rate assessment',
                  'Custom growth roadmap with prioritized actions',
                  '30-minute strategy call to review findings',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-[#A3A3A3]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#F97316]/20 rounded-xl p-6">
              <p className="text-sm text-[#FAFAFA] font-semibold mb-2">Our Guarantee</p>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                If you don't find the audit valuable, we'll send you a 50 EUR Amazon gift card for wasting your time.
              </p>
            </div>

            {/* Mini Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-[#141414] border border-[#262626] rounded-xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F97316]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#A3A3A3] italic mb-3">
                "Within the first month of implementing their recommendations, we saw a 40% increase in qualified leads. Worth every penny."
              </p>
              <p className="text-xs font-semibold text-[#FAFAFA]">Sarah M., E-commerce CEO</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
