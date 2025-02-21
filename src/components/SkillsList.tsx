"use client";

import { useState, useCallback } from "react";
import { Reorder } from "framer-motion";
import { SkillItem } from "./SkillItem";
import SkillsToggle from "./SkillsToggle";

const allSkills = {
  frontend: [
    { id: "1", name: "React", emoji: "⚛️" },
    { id: "2", name: "Next.js", emoji: "🚀" },
    { id: "3", name: "TailwindCSS", emoji: "🎨" },
  ],
  backend: [
    { id: "4", name: "Node.js", emoji: "🟢" },
    { id: "5", name: "Express", emoji: "⚡" },
    { id: "6", name: "NestJS", emoji: "🛠" },
  ],
  tools: [
    { id: "7", name: "Docker", emoji: "🐳" },
    { id: "8", name: "Linux", emoji: "🐧" },
    { id: "9", name: "Git", emoji: "🌱" },
  ],
};

export default function SkillsList() {
  const [selectedSkills, setSelectedSkills] = useState(allSkills.frontend);

  const handleToggle = useCallback((filters: { frontend: boolean; backend: boolean; tools: boolean }) => {
    const newSkills = [
      ...(filters.frontend ? allSkills.frontend : []),
      ...(filters.backend ? allSkills.backend : []),
      ...(filters.tools ? allSkills.tools : []),
    ];
    setSelectedSkills(newSkills);
  }, []);

  const handleReorder = (newOrder: typeof selectedSkills) => {
    setSelectedSkills(newOrder);
  };

  return (
    <div className="flex flex-col items-start w-full pl-20">
      <div className="w-full">
        <SkillsToggle onToggle={handleToggle} />
      </div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px]">
        <Reorder.Group axis="y" values={selectedSkills} onReorder={handleReorder} className="space-y-3">
          {selectedSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
