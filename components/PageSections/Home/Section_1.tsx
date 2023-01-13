import React, { useLayoutEffect, useRef } from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import Image from '../../Image/Image'
import H1 from '../../H1/H1'

import dashboardBrowser from "../../../assets/section_1_1.svg"
import dashboardImage from "../../../assets/section_1_2.png"

function Section_1() {
    return (
        <Section classes={ `mt-12 bg-gradient-to-bl from-[#85D5FF] to-[#B8FFF1]` }>
            <Container classes={ `section_one_container h-[200vh]` }>
                <div className={ `relative w-full h-[100vh] flex flex-col items-center justify-center` }>

                    <H1 text={ `Single Dashboard For All Your Business Needs` } classes={ `section_one_heading relative` } />

                    <div className={ `absolute top-[100vh] aspect-[2/1] w-[80%]` }>

                        <Image image={ dashboardBrowser.src } containerClasses={ `section_one_image_one absolute w-full h-full` } imageClasses={ `object-contain` } />

                        <Image image={ dashboardImage.src } containerClasses={ `section_one_image_two absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-38%] w-[98%] h-[80%] rounded-xl overflow-hidden` } imageClasses={ `object-cover object-top` } />

                    </div>

                </div>
            </Container>
        </Section>
    )
}

export default Section_1