"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#F97316] text-[#0A0A0A] font-bold hover:bg-[#f97316]/90 active:bg-[#f97316]/80",
  secondary:
    "bg-[#141414] text-[#FAFAFA] border border-[#262626] font-semibold hover:bg-[#1a1a1a] hover:border-[#3a3a3a]",
  ghost:
    "bg-transparent text-[#F97316] border border-[#F97316] font-semibold hover:bg-[#F97316]/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = "transition-all duration-200 inline-flex items-center justify-center font-medium";
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel}>
        <motion.button
          className={combinedStyles}
          disabled={disabled}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {content}
    </motion.button>
  );
}
