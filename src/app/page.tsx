// Home.tsx
"use client";

import SectionWrapper from "@/components/SectionWrapper";
import FAQ from "@/components/FAQ";
import SkillsList from "@/components/SkillsList";
import SkillsToggle from "@/components/SkillsToggle";
import { useState } from "react";

export default function Home() {
  // Stato per i filtri
  const [filters, setFilters] = useState({
    frontend: true,
    backend: false,
    tools: false,
  });

  return (
    <main className="flex flex-col w-full">
      {/* About */}
      <SectionWrapper title="About" bgColor="bg-gray-900">
        <FAQ />
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper title="Skills?" bgColor="bg-green-500">
        {/* UN SOLO TOGGLE */}
        <SkillsToggle onToggle={(newFilters) => setFilters(newFilters)} />

        {/* Passo i filtri al componente SkillsList */}
        <SkillsList activeFilters={filters} />
      </SectionWrapper>
    </main>
  );
}
