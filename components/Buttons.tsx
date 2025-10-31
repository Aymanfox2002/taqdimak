"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Buttons({
  children,
  href = "/",
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[12px]";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-[var(--teal-900)] text-white hover:cursor-pointer",
    outline: "secondary-btn",
  };

  const classes = `relative shadow-xl 
  overflow-hidden 
  ${base} 
  ${sizes[size]} 
  ${variants[variant]} 
  ${className}
 btn-animation
 group
  `;

  if (type) {
    return (
      <button onClick={onClick} className={classes} type={type}>
        <p className="z-2 group-hover:text-white transition-all duration-400">
          {children}
        </p>
      </button>
    );
  }

  return (
    <Link href={href} className={classes} type={type}>
      <p className="z-2 group-hover:text-white transition-all duration-400">
        {children}
      </p>
    </Link>
  );
}
