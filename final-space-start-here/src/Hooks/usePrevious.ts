import { useRef, useEffect } from "react";

export const usePrevious = (currentData: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = currentData;
  }, [currentData]);

  return ref.current;
};
