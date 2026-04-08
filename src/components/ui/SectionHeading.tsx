"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerClass = centered ? "text-center" : "text-left";

  return (
    <motion.div
      ref={ref}
      className={`${containerClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <motion.p
          className="text-sm font-semibold text-[#F97316] tracking-wide uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {heading}
      </motion.h2>

      {description && (
        <motion.p
          className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
