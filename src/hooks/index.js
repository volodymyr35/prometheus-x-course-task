import { useEffect, useRef } from "react";

export const useEffectOnce = (effect = () => {}) => {
  const hasMountedOnce = useRef(false);

  useEffect(() => {
    if (!hasMountedOnce.current) {
      effect();
      hasMountedOnce.current = true;
    }
  }, [effect]);
};
