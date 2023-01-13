import React from 'react'
import Button from '../Button/Button';

interface IFeatureDetailCard {
    slideIndex: string;
    heading: string;
    text: string;
    buttonText: string;
    hoverAction: (event: React.MouseEvent<HTMLDivElement>) => void;
    buttonAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function FeatureDetailCard(props: IFeatureDetailCard) {
    return (

        <div id={ `feature_1` } className={ `transition-all duration-500 group h-[2.75rem] hover:h-[300px] w-full px-4 hover:py-4 overflow-hidden bg-transparent hover:bg-secondary text-white rounded-lg ` } data-slide-index={ props.slideIndex } onMouseEnter={ props.hoverAction }>
            <h3 className={ `transition-all duration-500 my-0 text-gray-500 group-hover:my-4 group-hover:text-white` }>
                { props.heading }
            </h3>
            <p className={ `transition-all duration-500 w-full` }>
                { props.text }
            </p>
            <Button classes={ `transition-all duration-500 w-fit` } text={ props.buttonText } type={ `fill` } size={ `md` } color={ `accent` } action={ props.buttonAction } />
        </div>
    )
}

export default FeatureDetailCard