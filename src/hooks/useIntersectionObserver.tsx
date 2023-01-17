import React, { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options: object) {
  const element = useRef<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const ib = new IntersectionObserver((entryArray) => {
      setIsVisible(entryArray[0].isIntersecting);
      if (entryArray[0].isIntersecting) {
        ib.unobserve(element.current!);
      }
    }, options);

    if (element.current) {
      console.log(`INITIALIZING...`);
      ib.observe(element.current!);
    }
  }, [element]);

  return [element, isVisible] as const;
}

export default useIntersectionObserver;
