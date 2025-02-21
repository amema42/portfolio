// components/Skills.tsx
"use client";

import { useState, useCallback } from 'react';
import SkillsToggle from './SkillsToggle';
import SkillsList from './SkillsList';

export default function Skills() {
  const [filters, setFilters] = useState({
    frontend: true,
    backend: false,
    tools: false,
  });

  const handleToggle = useCallback((newFilters: typeof filters) => {
    setFilters(newFilters);
  }, []);

  return (
    <>
      <SkillsToggle onToggle={handleToggle} />
      <SkillsList activeFilters={filters} />
    </>
  );
}