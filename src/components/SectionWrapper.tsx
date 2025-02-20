"use client";

import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  bgColor: string;
}

export default function SectionWrapper({ title, children, bgColor }: SectionProps) {
  return (
    <section className={`min-h-screen flex flex-col ${bgColor} w-full`}>
      <h2 className="text-9xl font-bold text-white mt-16 ml-10">{title}</h2>
      <div className="flex-grow flex justify-center items-center w-full">{children}</div>
    </section>
  );
}
