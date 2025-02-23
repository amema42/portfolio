"use client";

import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { SkillItem } from "./SkillItem";

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

interface Filters {
  frontend: boolean;
  backend: boolean;
  tools: boolean;
}

interface SkillsListProps {
  activeFilters: Filters;
}

export default function SkillsList({ activeFilters }: SkillsListProps) {
  const [selectedSkills, setSelectedSkills] = useState(() => {
    return allSkills.frontend;
  });

  useEffect(() => {
    const newSkills = [
      ...(activeFilters.frontend ? allSkills.frontend : []),
      ...(activeFilters.backend ? allSkills.backend : []),
      ...(activeFilters.tools ? allSkills.tools : []),
    ];
    setSelectedSkills(newSkills);
  }, [activeFilters]);

  const handleReorder = (newOrder: typeof selectedSkills) => {
    setSelectedSkills(newOrder);
  };

  return (
    <div>
      <Reorder.Group
        axis="y"
        values={selectedSkills}
        onReorder={handleReorder}
        className="grid sm:grid-cols-1 gap-4"
      >
        {selectedSkills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </Reorder.Group>
    </div>
  );
}
