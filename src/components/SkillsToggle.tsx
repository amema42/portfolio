"use client";

import { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";

interface ToggleProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ToggleSwitch({ label, isActive, onClick }: ToggleProps) {
  return (
    <MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
      <motion.div
        className="flex items-center justify-between w-60 bg-gray-800 text-white px-4 py-3 rounded-xl cursor-pointer shadow-md"
        onClick={onClick}
      >
        <span className="text-lg">{label}</span>
        <motion.div
          className="w-12 h-7 bg-gray-600 rounded-full flex items-center p-1"
          animate={{ backgroundColor: isActive ? "#22c55e" : "#555" }}
        >
          <motion.div
            layout
            className="w-5 h-5 bg-white rounded-full"
            animate={{ x: isActive ? 20 : 0 }}
          />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default function SkillsToggle({ onToggle }: { onToggle: (filters: { frontend: boolean; backend: boolean; tools: boolean; }) => void }) {
  const [activeFilters, setActiveFilters] = useState({
    frontend: true,
    backend: false,
    tools: false,
  });

  useEffect(() => {
    onToggle(activeFilters);
  }, [activeFilters, onToggle]);

  const toggleCategory = (category: keyof typeof activeFilters) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="space-y-3 w-[280px]">
      <ToggleSwitch label="Front-end" isActive={activeFilters.frontend} onClick={() => toggleCategory("frontend")} />
      <ToggleSwitch label="Back-end" isActive={activeFilters.backend} onClick={() => toggleCategory("backend")} />
      <ToggleSwitch label="Tools" isActive={activeFilters.tools} onClick={() => toggleCategory("tools")} />
    </div>
  );
}
