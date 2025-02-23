// SectionWrapper.tsx
"use client";

import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode | ReactNode[];
  bgColor: string;
  titleColor?: string;
}

export default function SectionWrapper({ title, children, bgColor, titleColor }: SectionProps) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <section className={`min-h-screen ${bgColor} w-full py-8 md:py-20`}>
      <div className="w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/2">
            {/* Title with adaptable font-size  */}
            <h2 className={`text-6xl md:text-9xl font-bold mb-4 ${titleColor || ""}`}> {title} </h2>
            {Array.isArray(children) && children[0]}
          </div>
          <div className="md:w-1/2">
            {Array.isArray(children) ? children[1] : children}
          </div>
        </div>
      </div>
    </section>
  );
}
