import React from 'react'
import styleClasses from "./styles.module.css"

import { RxAvatar } from "react-icons/rx"

interface IReviewSnippetCard {
    reviewCardIndex: string;
    mouseEnterAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function ReviewSnippetCard(props: IReviewSnippetCard) {
    return (
        <div className={ `review_snippet_card ${styleClasses.card} shrink-0 w-[200px] h-[50px] p-2 flex flex-row items-center justify-center bg-primary rounded-md text-secondary ` } data-review-card-index={ props.reviewCardIndex } onMouseEnter={ props.mouseEnterAction }>
            <div className={ `aspect-square h-full w-auto pointer-events-none` }>
                <RxAvatar color={ `#1b2534` } size={ `2.25rem` } />
            </div>
            <div className={ `w-full h-full ml-2 pointer-events-none` }>
                <b className={ `block h-[1.2rem]` }>Minacy Park</b>
                <small className={ `block` }>Fronend Developer</small>
            </div>
        </div>
    )
}

export default ReviewSnippetCard