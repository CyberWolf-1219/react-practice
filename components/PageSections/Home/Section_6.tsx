import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import Image from '../../Image/Image'

import logo_1 from "../../../assets/client_logo_1.svg"
import logo_2 from "../../../assets/client_logo_2.svg"
import logo_3 from "../../../assets/client_logo_3.svg"
import logo_4 from "../../../assets/client_logo_4.svg"
import logo_5 from "../../../assets/client_logo_5.svg"
import logo_6 from "../../../assets/client_logo_6.svg"

import casestudy_1 from "../../../assets/section_6_1.png"
import casestudy_2 from "../../../assets/section_6_2.png"
import casestudy_3 from "../../../assets/section_6_3.png"

import { RxAvatar } from 'react-icons/rx'

import gsap from "gsap"
import CaseStudyCard from '../../CasestudyCard/CaseStudyCard'

function Section_6() {
    const rootElement = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const logos = rootElement.current!.querySelectorAll<HTMLDivElement>(".client_logo_wrapper")

        function animate() {
            logos.forEach((logo) => {
                const transformedAmount = parseFloat(logo.getAttribute('data-transformed-amount')!)

                let newTransformAmount = 0;

                if (transformedAmount <= -500) {
                    newTransformAmount = 1500;
                } else {
                    newTransformAmount = transformedAmount - 1;
                }

                logo.setAttribute('data-transformed-amount', newTransformAmount.toString())
                logo.style.transform = `translateX(${newTransformAmount}px)`
            })

            window.requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <Section classes={ `overflow-hidden` }>
            <Container classes={ `w-full h-fit overflow-visible` }>
                <div ref={ rootElement } className={ `w-full h-full` }>
                    <h4 className={ `mx-auto text-center` }>
                        Loved By Teams Around the World
                    </h4>
                    <div className={ `my-12 ` }>
                        <div id={ `client_logo_reel` } className={ `relative w-full h-[100px]` } >
                            <div data-transformed-amount="0" className={ `client_logo_wrapper absolute inline-block translate-x-[0px]` }>
                                <Image image={ logo_1.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                            <div data-transformed-amount="200" className={ `client_logo_wrapper absolute inline-block translate-x-[200px]` }>
                                <Image image={ logo_2.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                            <div data-transformed-amount="400" className={ `client_logo_wrapper absolute inline-block translate-x-[400px]` }>
                                <Image image={ logo_3.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                            <div data-transformed-amount="600" className={ `client_logo_wrapper absolute inline-block translate-x-[600px]` }>
                                <Image image={ logo_4.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                            <div data-transformed-amount="800" className={ `client_logo_wrapper absolute inline-block translate-x-[800px]` }>
                                <Image image={ logo_5.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                            <div data-transformed-amount="1000" className={ `client_logo_wrapper absolute inline-block translate-x-[1000px]` }>
                                <Image image={ logo_6.src } containerClasses={ `aspect-[3/1] w-[150px]` } imageClasses={ `object-contain` } />
                            </div>
                        </div>
                    </div>
                    <div className={ `my-12` }>
                        <div className={ `w-full h-fit flex flex-row items-center justify-evenly` }>
                            <CaseStudyCard image={ casestudy_1.src } title={ `Route Calls With Phone Menu` } text={ `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis hic dignissimos, nulla ea impedit ipsum fuga labore modi rerum esse.` } name={ `Robin Robert` } data={ `1st Oct. 2022 / 5min read` } />

                            <CaseStudyCard image={ casestudy_2.src } title={ `Intergate Chatbots With Applications` } text={ `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis hic dignissimos, nulla ea impedit ipsum fuga labore modi rerum esse.` } name={ `Nancy Mitta` } data={ `16st Oct. 2022 / 15min read` } />

                            <CaseStudyCard image={ casestudy_3.src } title={ `Collaborate With Teams` } text={ `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis hic dignissimos, nulla ea impedit ipsum fuga labore modi rerum esse.` } name={ `Mathew Bio` } data={ `24st Oct. 2022 / 8min read` } />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Section_6