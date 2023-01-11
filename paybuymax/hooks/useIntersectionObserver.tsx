import React, { useEffect, useRef, useState } from 'react'


function useIntersectionObserver(options: IntersectionObserverInit) {
    const element = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const io = new IntersectionObserver(observerCallback, options)

        if (element.current) {
            io.observe(element.current);
        }

        return () => {
            io.disconnect();
        }
    }, [element, options])

    function observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {

        if (entries[0].isIntersecting) {
            setIsVisible(true);
            if (entries[0].intersectionRatio > 0.5) {
                observer.unobserve(element.current!)
                console.log(`OBSERVER REMOVED...`);

            }
        }



    }

    return [element, isVisible] as const;
}

export default useIntersectionObserver