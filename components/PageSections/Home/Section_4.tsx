import React, { useRef } from 'react'
import Section from '../../Section/Section'
import Container from '../../Container/Container'
import H2 from '../../H2/H2'
import FeatureDetailCard from '../../FeatureDetailCard/FeatureDetailCard'
import FeatureSlide from '../../FeatureSlide/FeatureSlide'

import image_1 from "../../../assets/section_4_image_1.png"
import image_2 from "../../../assets/section_4_image_2.png"
import image_3 from "../../../assets/section_4_image_3.png"
import image_4 from "../../../assets/section_4_image_4.png"
import image_5 from "../../../assets/section_4_image_5.png"

function Section_4() {
    const featureSection = useRef<HTMLDivElement | null>(null);

    function featureCardHover(event: React.MouseEvent<HTMLDivElement>) {
        const slideIndex = event.currentTarget.getAttribute('data-slide-index');

        featureSection.current!.querySelectorAll(".feature_slide").forEach((slide, index) => {
            slide.removeAttribute('data-active');
        })

        const slide = featureSection.current!.querySelector(`#feature_slide_${slideIndex}`)
        slide?.setAttribute('data-active', 'true');
    }


    return (
        <Section>
            <Container>
                <div ref={ featureSection } className={ `w-full h-fit p-4 flex flex-col items-center gap-20` }>
                    <H2 classes={ `w-[25ch] justify-center text-center` } text={ `Packed With<>Amazing Features` } />
                    <div className={ `w-full h-fit flex flex-row items-start justify-center gap-8` }>
                        <div className={ `w-[30%]` }>
                            <FeatureDetailCard slideIndex={ `1` } heading={ `Feature #1` } text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus vitae nam temporibus voluptatibus corrupti laborum non eius similique sint sequi placeat modi excepturi fugit quo ut harum dolore at?` } buttonText={ `Read More` } hoverAction={ featureCardHover } buttonAction={ () => {
                                console.log(`CLICK...`);
                            } } />
                            <FeatureDetailCard slideIndex={ `2` } heading={ `Feature #2` } text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus vitae nam temporibus voluptatibus corrupti laborum non eius similique sint sequi placeat modi excepturi fugit quo ut harum dolore at?` } buttonText={ `Read More` } hoverAction={ featureCardHover } buttonAction={ () => {
                                console.log(`CLICK...`);
                            } } />
                            <FeatureDetailCard slideIndex={ `3` } heading={ `Feature #3` } text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus vitae nam temporibus voluptatibus corrupti laborum non eius similique sint sequi placeat modi excepturi fugit quo ut harum dolore at?` } buttonText={ `Read More` } hoverAction={ featureCardHover } buttonAction={ () => {
                                console.log(`CLICK...`);
                            } } />
                            <FeatureDetailCard slideIndex={ `4` } heading={ `Feature #4` } text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus vitae nam temporibus voluptatibus corrupti laborum non eius similique sint sequi placeat modi excepturi fugit quo ut harum dolore at?` } buttonText={ `Read More` } hoverAction={ featureCardHover } buttonAction={ () => {
                                console.log(`CLICK...`);
                            } } />
                            <FeatureDetailCard slideIndex={ `5` } heading={ `Feature #5` } text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus vitae nam temporibus voluptatibus corrupti laborum non eius similique sint sequi placeat modi excepturi fugit quo ut harum dolore at?` } buttonText={ `Read More` } hoverAction={ featureCardHover } buttonAction={ () => {
                                console.log(`CLICK...`);
                            } } />
                        </div>

                        <div id="section_4_col_2" className={ `relative aspect-[3/2] w-[60%] h-auto p-4 bg-primary rounded-lg border-2` }>
                            <FeatureSlide id={ `1` } image={ image_1.src } />
                            <FeatureSlide id={ `2` } image={ image_2.src } />
                            <FeatureSlide id={ `3` } image={ image_3.src } />
                            <FeatureSlide id={ `4` } image={ image_4.src } />
                            <FeatureSlide id={ `5` } image={ image_5.src } />

                        </div>
                    </div>
                </div>
            </Container>
        </Section >
    )
}

export default Section_4