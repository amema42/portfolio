import { useEffect } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export function useRaisedShadow(value: any) {
  const shadow = useMotionValue("0px 0px 0px rgba(0,0,0,0)");

  useEffect(() => {
    return value.onChange((latest: any) => {
      const blur = Math.max(5, 20 - latest);
      shadow.set(`0px ${latest}px ${blur}px rgba(0,0,0,0.15)`);
    });
  }, [value, shadow]);

  return shadow;
}
