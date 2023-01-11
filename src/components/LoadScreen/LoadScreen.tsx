import React, { useEffect, useLayoutEffect, useRef } from 'react'
import logo from "../../assets/logo.svg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function LoadScreen() {
    const rootElement = useRef<HTMLDivElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);

    useLayoutEffect(() => {
        const gctx = gsap.context(() => {
            tl.current = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

            tl.current
                .fromTo(
                    ".logo_wrapper",
                    {
                        opacity: 0,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        scale: 1,
                    })
                .fromTo(
                    ".logo_reveal",
                    {
                        scaleX: 0,
                    },
                    {
                        scaleX: 1,
                        delay: 0.5
                    })
                .fromTo(
                    rootElement.current,
                    {
                        backgroundColor: "#ffffff"
                    },
                    {
                        backgroundColor: "#895af6"
                    })
                .fromTo(
                    ".heading_wrapper > .heading > .word_wrapper > .word",
                    {
                        yPercent: -100
                    },
                    {
                        yPercent: 0,
                        stagger: 0.5,
                    })
                .to(
                    rootElement.current,
                    {
                        scaleX: 0,
                        delay: 0.5,
                    })

        }, rootElement);

        return () => {
            gctx.revert();
        }
    }, [])



    return (
        <div ref={ rootElement } className={ `fixed z-50 w-full h-full flex flex-col items-center justify-center bg-white/100 origin-left` }>
            <div className={ `logo_wrapper absolute z-[0] aspect-[3/1] w-[500px]` }>
                <div className={ `logo_reveal absolute z-[2] bg-primary/100 w-full h-full origin-left` }></div>
                <div className={ `logo absolute z-[1] aspect-[3/1] w-[500px] h-auto` }>
                    <img src={ logo } alt="" className={ `w-ful h-full object-contain` } />
                </div>
            </div>
            <div className={ `heading_wrapper absolute z-[1]` }>
                <h1 className={ `heading max-w-[10ch] m-0 flex items-center justify-center gap-x-4 gap-y-1 flex-wrap text-white` }>
                    <div className={ `word_wrapper overflow-hidden` }>
                        <div className={ `word` }>Reveal</div>
                    </div>
                    <div className={ `word_wrapper overflow-hidden` }>
                        <div className={ `word` }>Your</div>
                    </div>
                    <div className={ `word_wrapper overflow-hidden` }>
                        <div className={ `word` }>True Beauty</div>
                    </div>
                </h1>
            </div>
        </div>
    )
}

export default LoadScreen