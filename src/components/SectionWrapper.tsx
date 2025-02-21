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
    <section className={`min-h-screen ${bgColor} w-full relative px-20 py-20`}>
      {/* Contenitore per titolo + toggle */}
      <div className="flex flex-col w-1/2">
        <h2 className="text-9xl font-bold text-white">{title}</h2>
        <div className="mt-12">{childrenArray[0]}</div> {/* Qui mettiamo i toggle */}
      </div>

      {/* Contenitore per la lista delle skills */}
      <div className="w-1/2 flex items-center">{childrenArray[1]}</div>
    </section>
  );
}

