"use client";

import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode | ReactNode[];
  bgColor: string;
}

export default function SectionWrapper({ title, children, bgColor }: SectionProps) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <section className={`min-h-screen ${bgColor} w-full px-20 py-20`}>
      <div className="flex flex-row justify-between items-start h-full gap-20">
        <div className="w-1/2">
          <h2 className="text-9xl font-bold text-white">{title}</h2>
          {Array.isArray(children) && children[0]}
        </div>
        <div className="w-1/2 flex flex-col items-end">
          {Array.isArray(children) ? children[1] : children}
        </div>
      </div>
    </section>
  );
}

