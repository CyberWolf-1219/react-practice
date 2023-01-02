import React, { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options: IntersectionObserverInit) {
  const observer = useRef<IntersectionObserver | null>(null);
  const element = useRef<Element>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [visibleAmount, setVisibleAmount] = useState(0.0);

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectCallback, options);

    return () => {
      observer.current?.disconnect();
    };
  }, [element, options]);

  function intersectCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
      setVisibleAmount(entries[0].intersectionRatio);
    } else {
      setIsVisible(false);
    }
  }

  return [element.current, isVisible, visibleAmount] as const;
}

export default useIntersectionObserver;
