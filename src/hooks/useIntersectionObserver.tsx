import React, { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options: object) {
  const element = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const ib = new IntersectionObserver((entryArray) => {
      setIsVisible(entryArray[0].isIntersecting);
    }, options);

    if (element.current) {
      console.log(`INITIALIZING...`);
      ib.observe(element.current!);
    }
  }, [element]);

  return [element, isVisible] as const;
}

export default useIntersectionObserver;
