import React from 'react'
import Image from '../Image/Image'
import styleClasses from "./styles.module.css"

interface IFeatureSlide {
    image: string;
    id: string;
}

function FeatureSlide(props: IFeatureSlide) {
    return (
        <div id={ `feature_slide_${props.id}` } className={ `${styleClasses.feature_slide} feature_slide p-2` } data-active="true">
            <Image image={ props.image } containerClasses={ `w-full h-full bg-accent rounded-md overflow-hidden` } imageClasses={ `object-contain` } />
        </div>
    )
}

export default FeatureSlide