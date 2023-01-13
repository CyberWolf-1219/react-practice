import React from 'react'
import Section from '../../Section/Section';
import Container from '../../Container/Container'
import Image from '../../Image/Image'
import H2 from '../../H2/H2'
import Button from '../../Button/Button'

import section_3_icon_1 from '../../../assets/section_3_icon_1.png';
import section_3_icon_2 from '../../../assets/section_3_icon_2.svg';
import section_3_icon_3 from '../../../assets/section_3_icon_3.svg';
import section_3_icon_4 from '../../../assets/section_3_icon_4.svg';
import section_3_icon_5 from '../../../assets/section_3_icon_5.svg';
import section_3_icon_6 from '../../../assets/section_3_icon_6.svg';
import section_3_icon_7 from '../../../assets/section_3_icon_7.svg';
import section_3_icon_8 from '../../../assets/section_3_icon_8.svg';

import section_3_1 from '../../../assets/section_3_1.jpg'
import section_3_2 from '../../../assets/section_3_2.png'
import section_3_3 from '../../../assets/section_3_3.png'
import section_3_4 from '../../../assets/section_3_4.png'



function Section_3() {
    return (
        <Section>
            <Container classes={ `section_three_container h-[100vh]` }>
                <div className={ `w-full h-full grid grid-cols-4 gap-8 auto-rows-fr` }>
                    <div className={ `col-span-2 w-full h-full p-4 rounded-lg` }>
                        <H2 text={ `Work More Easily<>With Everyone` } classes={ `section_three_heading my-4` } />
                        <small className={ `section_three_text` }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam vel voluptates. Exercitationem veniam recusandae atque possimus corrupti ducimus maiores, voluptatem, modi, cupiditate nostrum ea laboriosam tenetur consectetur porro minima.
                        </small>
                    </div>
                    <div className={ `section_three_card_1 col-span-2 w-full h-full p-4 flex flex-row items-center justify-between rounded-lg shadow-lg bg-secondary` }>
                        <div id={ `section_3_card_2_col_1` } className={ `w-[40%] text-white flex flex-col items-center justify-center gap-4` }>
                            <Image image={ section_3_icon_1.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            <b className={ `text-2xl text-center` }>Work From Anywhere</b>
                        </div>
                        <div id={ `section_3_card_2_col_2` } className={ `w-[60%] h-full` }>
                            <Image image={ section_3_1.src } containerClasses={ `w-full h-full rounded-lg overflow-hidden` } imageClasses={ `object-cover` } />
                        </div>
                    </div>
                    <div className={ `section_three_card_2 w-full h-full p-4 rounded-lg shadow-lg bg-white flex flex-col items-center justify-center gap-4` }>
                        <b className={ `text-center text-2xl` }>Important Tools</b>
                        <div className={ `w-full h-fit flex flex-row items-center justify-center gap-4` }>
                            <div>
                                <Image image={ section_3_icon_2.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            </div>
                            <div>
                                <Image image={ section_3_icon_3.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            </div>
                            <div>
                                <Image image={ section_3_icon_4.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            </div>
                        </div>
                    </div>
                    <div className={ `section_three_card_3 col-span-2 w-full h-full p-4 rounded-lg shadow-lg bg-white flex flex-row items-center justify-between` }>
                        <div id="section_3_card_4_col_1" className={ `w-[40%] h-full flex flex-col items-center justify-center gap-4` }>
                            <b className={ `text-2xl text-center` }>Supprt For All Devices</b>
                            <span>
                                <a href="">Get Started</a>
                                <span>I</span>
                            </span>
                        </div>
                        <div id="section_3_card_4_col_2" className={ `w-[60%] h-full` }>
                            <Image image={ section_3_2.src } containerClasses={ `w-full h-full rounded-lg` } />
                        </div>
                    </div>
                    <div className={ `section_three_card_4 w-full h-full p-4 rounded-lg shadow-lg bg-white` }>
                        <Image image={ section_3_4.src } containerClasses={ `w-full h-full` } imageClasses={ `w-full h-full object-contain` } />
                    </div>
                    <div className={ `section_three_card_5 col-span-3 w-full h-full p-4 rounded-lg shadow-lg bg-white flex flex-row items-center justify-center gap-4` }>
                        <div id="section_3_card_6_col_1" className={ `w-[60%] h-full` }>
                            <Image image={ section_3_3.src } containerClasses={ `w-full h-full rounded-md overflow-hidden` } imageClasses={ `object-fill` } />
                        </div>
                        <div id="section_3_card_6_col_2" className={ `w-[40%] h-full flex flex-col items-start justify-start gap-8` }>
                            <b className={ `text-left text-2xl` }>Analyze and Adapt</b>
                            <Button type={ 'fill' } size={ 'lg' } color={ 'accent' } text={ `Join Spaatz` } />
                        </div>
                    </div>
                    <div className={ `section_three_card_6 w-full h-full p-4 rounded-lg shadow-lg bg-white flex flex-col items-center justify-center gap-4` }>
                        <b className={ `text-start text-2xl` }>Image, Audio & Video</b>
                        <div className={ `w-full h-fit flex flex-row items-center justify-center gap-4` }>
                            <Image image={ section_3_icon_5.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            <Image image={ section_3_icon_6.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            <Image image={ section_3_icon_7.src } containerClasses={ `aspect-[1] w-[50px]` } />
                            <Image image={ section_3_icon_8.src } containerClasses={ `aspect-[1] w-[50px]` } />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Section_3