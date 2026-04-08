"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="border border-[#262626] rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-[#FAFAFA] text-left">
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 ml-4"
            >
              <ChevronDown className="w-5 h-5 text-[#F97316]" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-[#262626] px-6 py-4 bg-[#0a0a0a]/50"
              >
                <p className="text-[#A3A3A3] leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
