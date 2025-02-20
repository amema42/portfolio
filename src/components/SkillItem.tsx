"use client";

import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./RaisedShadow";
import { DragIcon } from "./DragIcon";

interface SkillProps {
  skill: { id: string; name: string; emoji: string };
}

export function SkillItem({ skill }: SkillProps) {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={skill}
      id={skill.id}
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={dragControls}
      className="flex justify-between items-center bg-white text-black px-5 py-3 rounded-xl shadow-md cursor-pointer"
    >
      <span className="text-lg">{skill.emoji} <strong>{skill.name}</strong></span>
      <DragIcon dragControls={dragControls} />
    </Reorder.Item>
  );
}
