import { useEffect, useRef } from "react";

const useDebounce = <T>(
  value: T,
  onDebounce: (newValue: T) => void,
  delay: number
) => {
  const isNotInitialMount = useRef(false);

  useEffect(() => {
    if (isNotInitialMount.current) {
      const handler = setTimeout(() => onDebounce(value), delay);

      return () => clearTimeout(handler);
    } else {
      isNotInitialMount.current = true;
    }
  }, [value, delay]);
};

export default useDebounce;
