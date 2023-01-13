import React from 'react'
import Image from './Image/Image'
import { BsStarFill, BsStarHalf } from "react-icons/bs"

import user from "../assets/user_1.jpg"

interface IReviewContentCard {
    id: string;
}

function ReviewContentCard(props: IReviewContentCard) {
    return (
        <div className={ `review_content_card_wrapper absolute w-full h-full overflow-hidden` }>
            <div className={ `review_content_card w-full h-[90%] p-8 flex flex-row items-center justify-between rounded-lg bg-white text-secondary` } id={ `review_content_card_${props.id}` }>
                <div className={ `w-[50%] flex flex-col items-start justify-start gap-8` }>
                    <b className={ `review_card_user_name font-bold text-5xl` }>Miciya Park</b>
                    <blockquote className={ `review_card_review italic font-semibold` }>
                        “We were amazed at how easy it was to make our yozgat in a few hours without knowing how to code, and at how the Software has modernized
                        our workflow.”
                    </blockquote>
                    <div className={ ` flex flex-col items-start justify-start gap-1` }>
                        <b className={ `m-0` }>TeleTech</b>
                        <small className={ `font-semibold` }>4.6</small>
                        <div className={ `w-fit h-fit flex flex-row items-center justify-start gap-2` }>
                            <span className={ `review_card_star` }>
                                <BsStarFill fill={ `#ebcf34` } size={ `1.25rem` } />
                            </span>
                            <span className={ `review_card_star` }>
                                <BsStarFill fill={ `#ebcf34` } size={ `1.25rem` } />
                            </span>
                            <span className={ `review_card_star` }>
                                <BsStarFill fill={ `#ebcf34` } size={ `1.25rem` } />
                            </span>
                            <span className={ `review_card_star` }>
                                <BsStarFill fill={ `#ebcf34` } size={ `1.25rem` } />
                            </span>
                            <span className={ `review_card_star` }>
                                <BsStarHalf fill={ `#ebcf34` } size={ `1.25rem` } />
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <Image image={ user.src } containerClasses={ `review_card_user_image aspect-square w-[300px] h-auto rounded-md overflow-hidden` } imageClasses={ `object-cover` } />
                </div>
            </div>
        </div>
    )
}

export default ReviewContentCard