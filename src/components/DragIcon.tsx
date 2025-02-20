import { DragControls } from "framer-motion";

interface Props {
  dragControls: DragControls;
}

export function DragIcon({ dragControls }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width="24"
      height="24"
      onPointerDown={(event) => dragControls.start(event)}
      className="cursor-grab text-gray-400"
    >
      {[...Array(3)].map((_, row) =>
        [...Array(3)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={5 + col * 14}
            cy={5 + row * 14}
            r="4"
            fill="#AAA"
          />
        ))
      )}
    </svg>
  );
}
