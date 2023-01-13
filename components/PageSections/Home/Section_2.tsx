import React from 'react'
import Section from "../../Section/Section"
import Container from "../../Container/Container"
import H2 from "../../H2/H2"
import Image from "../../Image/Image"

import section_2_1 from "../../../assets/section_2_1.jpg";
import section_2_2 from "../../../assets/section_2_2.png"
import { BsDiamond, BsLock } from 'react-icons/bs'

function Section_2() {
    return (
        <Section>
            <Container classes={ `section_two_container h-[100vh]` }>
                <div className={ `w-full h-fit flex flex-row gap-20 items-start justify-between` }>
                    <div id={ `section_col_one` } className={ `flex-1` }>
                        <H2 text={ `Lightning Fast<>& Super Powerful` } classes={ `section_two_heading` } />
                        <p className={ `section_two_paragraph` }>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis velit facilis tenetur impedit soluta dolore ab mollitia nemo ipsa, tempore beatae magnam explicabo quaerat minima aut earum eveniet iste eius numquam ad enim nisi. Quisquam voluptatibus consectetur et magni dolorem nesciunt voluptas aliquid, animi, totam quis veritatis? Molestias, libero vero.
                        </p>
                        <div className={ `section_two_tag w-fit h-fit p-4 flex flex-row items-center justify-start gap-4 shadow-md rounded-md` }>
                            <div className={ `section_two_tag_1_icon bg-green-400 p-4 rounded-md` }>
                                <BsDiamond size={ `1.5rem` } fill={ `#ffffff` } />
                            </div>
                            <div>
                                <b className={ `section_two_tag_1_heading block` }>
                                    All-in-One Platform
                                </b>
                                <small className={ `section_two_tag_1_text block` }>
                                    Lorem ipsum dolor sit.
                                </small>
                            </div>
                        </div>
                        <div className={ `section_two_tag w-fit h-fit p-4 flex flex-row items-center justify-start gap-4 shadow-md rounded-md translate-x-[100%]` }>
                            <div className={ `section_two_tag_2_icon bg-purple-400 p-4 rounded-md` }>
                                <BsLock size={ `1.5rem` } fill={ `#ffffff` } />
                            </div>
                            <div>
                                <b className={ `section_two_tag_2_heading block` }>
                                    All-in-One Platform
                                </b>
                                <small className={ `section_two_tag_2_text block` }>
                                    Lorem ipsum dolor sit.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div id={ `section_col_two` } className={ `flex-1 relative` }>
                        <Image image={ section_2_1.src } containerClasses={ `section_two_image_1 aspect-[1] w-full overflow-hidden rounded-xl` } imageClasses={ `` } />
                        <Image image={ section_2_2.src } containerClasses={ `section_two_image_2 absolute aspect-[1] w-[200px] bottom-[50px] left-[-100px] rounded-[40px] shadow-md shadow-black/40` } imageClasses={ `` } />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Section_2