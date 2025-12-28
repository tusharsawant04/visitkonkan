// src/components/ScrollReveal.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollReveal.module.css";

type Props = {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "zoom";
  delay?: number; // ms
  className?: string;
};

export default function ScrollReveal({ children, animation = "fade-up", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animClass = (styles as any)[animation] ?? (styles as any)["fade-up"];
  const style: React.CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <div ref={ref as any} className={`${styles.reveal} ${visible ? styles.visible : ""} ${animClass} ${className}`} style={style}>
      {children}
    </div>
  );
}