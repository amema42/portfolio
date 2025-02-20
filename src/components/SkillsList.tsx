"use client";

import { useState } from "react";
import { Reorder } from "framer-motion";
import { SkillItem } from "./SkillItem";

const initialSkills = [
  { id: "1", name: "JavaScript", emoji: "📜" },
  { id: "2", name: "TypeScript", emoji: "🔵" },
  { id: "3", name: "React", emoji: "⚛️" },
  { id: "4", name: "Next.js", emoji: "🚀" },
  { id: "5", name: "TailwindCSS", emoji: "🎨" },
  { id: "6", name: "Docker", emoji: "🐳" },
  { id: "7", name: "Linux", emoji: "🐧" },
];

export default function SkillsList() {
  const [skills, setSkills] = useState(initialSkills);

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-400 p-6">
      <Reorder.Group axis="y" onReorder={setSkills} values={skills}>
        <div className="w-full max-w-md space-y-3">
          {skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </Reorder.Group>
    </div>
  );
}
