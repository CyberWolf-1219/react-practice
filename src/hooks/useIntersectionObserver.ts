import React, { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options: {}) {
  const element = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ib = new IntersectionObserver(callBack, options);
    if (element.current) {
      ib.observe(element.current);
    }

    return () => {
      ib.unobserve(element.current!);
      ib.disconnect();
    };
  }, [element, options]);

  function callBack(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
      observer.unobserve(element.current!);
    }
  }

  return [element, isVisible] as const;
}

export default useIntersectionObserver;
