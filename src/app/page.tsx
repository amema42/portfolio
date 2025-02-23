// Home.tsx
"use client";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import FAQ from "@/components/FAQ";
import SkillsList from "@/components/SkillsList";
import SkillsToggle from "@/components/SkillsToggle";
import Projects from "@/components/Projects";

export default function Home() {
  // Stato per i filtri
  const [filters, setFilters] = useState({
    frontend: true,
    backend: false,
    tools: false,
  });

  return (
    <main className="flex flex-col w-full">
      <SectionWrapper title="About"  bgColor="bg-rich-black" titleColor="text-white">
        <FAQ />
      </SectionWrapper>

      <SectionWrapper title="Skills" bgColor="bg-green-yellow" titleColor="text-black">
        <SkillsToggle onToggle={(newFilters) => setFilters(newFilters)} />

        <SkillsList activeFilters={filters} />
      </SectionWrapper>
      <SectionWrapper title="Projects" bgColor="bg-rich-black" titleColor="text-white">
        <Projects />
      </SectionWrapper>
    </main>
  );
}
