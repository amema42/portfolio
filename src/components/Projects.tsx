"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  icon: string;
  label: string;
  description: string;
}

const projects: Project[] = [
  {
    icon: "📋",
    label: "Smart list",
    description: "Dettagli sul progetto Smart list... (inserisci info qui)",
  },
  {
    icon: "⚕️",
    label: "Welfare",
    description: "Dettagli sul progetto Welfare... (inserisci info qui)",
  },
  {
    icon: "🔢",
    label: "42",
    description: "Dettagli sul progetto 42... (inserisci info qui)",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto md:h-[360px] rounded-xl bg-white overflow-hidden shadow-lg flex flex-col mx-auto">
      {/* Nav (Tabs) */}
      <nav className="bg-gray-50 p-2 border-b border-gray-200 h-11">
        <ul className="flex w-full">
          {projects.map((project) => (
            <li
              key={project.label}
              onClick={() => setSelectedProject(project)}
              className={`relative flex-1 px-3 py-1 text-sm font-medium cursor-pointer text-center 
                ${
                  project === selectedProject
                    ? "bg-gray-200"
                    : "bg-white hover:bg-gray-100"
                } rounded-t-md`}
            >
              {`${project.icon} ${project.label}`}
              {project === selectedProject && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-600"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Content */}
      <main className="flex-grow flex items-center justify-center text-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-base text-gray-800">
              {selectedProject.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
