import React, { useLayoutEffect, useRef } from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import H2 from '../../H2/H2'
import Button from '../../Button/Button'
import Image from '../../Image/Image'

import section_7_1 from "../../../assets/section_7_1.png"
import section_7_2 from "../../../assets/section_7_2.png"
import section_7_3 from "../../../assets/section_7_3.png"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Section_7() {
    const tl = useRef<GSAPTimeline | null>(null)
    const container = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        const gctx = gsap.context(() => {
            tl.current = gsap.timeline({ paused: true, scrollTrigger: { trigger: container.current, markers: false, start: "-85px top", end: "bottom bottom", pin: ".section_7_content_wrapper", pinSpacing: "margin", scrub: true } })

            tl.current!
                .fromTo(".section_7_heading", { yPercent: 200 }, { yPercent: 0 })
                .fromTo(".section_7_image_1", { yPercent: 300 }, { yPercent: -50 })
                .fromTo(".section_7_image_2", { yPercent: 300 }, { yPercent: 0 })
                .fromTo(".section_7_image_3", { yPercent: 100 }, { yPercent: -150 })


        }, container)

        return () => {
            gctx.revert();
            tl.current!.clear()
        };
    }, [])

    return (
        <Section classes={ `bg-gradient-to-br from-[#85D5FF] to-[#B8FFF1]` }>
            <Container classes={ `w-full h-[200vh]` }>
                <div ref={ container } className={ `h-full` }>
                    <div className={ `section_7_content_wrapper w-full h-[100vh] overflow-hidden` }>
                        <div className={ `w-full h-fit flex flex-row items-end justify-between` }>
                            <H2 text={ `Get Started<>With Spaatz Today` } classes={ `section_7_heading inline-block` } />
                            <Button text={ `Get Started` } type={ `fill` } size={ `lg` } color={ `secondary` } classes={ `` } />
                        </div>
                        <div className={ `relative w-full h-full mt-8` }>
                            <Image image={ section_7_1.src } containerClasses={ `section_7_image_1 absolute z-[1] bottom-[0%] left-[50%] translate-x-[-50%] w-[80%]` } imageClasses={ `object-contain` } />
                            <Image image={ section_7_2.src } containerClasses={ `section_7_image_2 absolute z-[2] bottom-[-0%] left-[50%] translate-x-[-48%] w-[48%]` } imageClasses={ `object-contain` } />
                            <Image image={ section_7_3.src } containerClasses={ `section_7_image_3 absolute z-[3] bottom-[0%] left-[20%] w-[12%]` } imageClasses={ `object-contain` } />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Section_7