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
      className="flex justify-between rounded-full items-center bg-white text-pink-600 px-5 py-3 shadow-md cursor-pointer w-full sm:w-72 sm:grid-cols-2 min-h-16"
    >
      <span className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{skill.emoji} <strong>{skill.name}</strong></span>
      <DragIcon dragControls={dragControls} />
    </Reorder.Item>
  );
}
