"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const increment = (to - from) / (duration * 60); // 60fps
    let current = from;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US");
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-black text-2xl md:text-3xl">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </span>
    </motion.div>
  );
}
