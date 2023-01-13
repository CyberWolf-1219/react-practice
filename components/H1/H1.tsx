import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"

interface IH1 {
    text: string;
    classes?: string
}

function H1(props: IH1) {
    const rootElement = useRef<HTMLHeadingElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);

    useLayoutEffect(() => {
        const gctx = gsap.context(() => {
            tl.current = gsap.timeline({ defaults: { duration: 3, ease: "power3.out" } })

            tl.current!.fromTo(".heading_one_word", { yPercent: 100, color: "#ffffff" }, { yPercent: 0, color: "#ffffff" })

        }, rootElement)

        return () => {
            gctx.revert();
            tl.current!.clear();
        };
    }, [])

    const words = props.text.split(' ').map((word, index) => {
        return (
            <div key={ index } className={ `heading_one_word_wrapper inline-block overflow-hidden` }>
                <div className={ `heading_one_word inline-block` }>
                    { word }
                </div>
            </div>
        )
    })

    return (
        <h1 ref={ rootElement } className={ `w-[80%] h-fit max-w-[25ch] flex flex-row items-center justify-center gap-x-4 flex-wrap ${props.classes}` }>
            { words }
        </h1>
    )
}

export default H1
