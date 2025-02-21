"use client";

import SectionWrapper from "@/components/SectionWrapper";
import FAQ from "@/components/FAQ";
import SkillsList from "@/components/SkillsList";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* About */}
      <SectionWrapper title="About" bgColor="bg-gray-900">
        <FAQ />
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper title="Skills?" bgColor="bg-green-500">
        <SkillsList />
      </SectionWrapper>
    </main>
  );
}
