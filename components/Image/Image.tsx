import React from 'react'

interface IImage {
    image: string;
    containerClasses?: string;
    imageClasses?: string;
}

function Image(props: IImage) {
    return (
        <div className={ `${props.containerClasses} overflow-hidden` }>
            <img src={ props.image } alt="" className={ `w-full h-full ${props.imageClasses}` } />
        </div>
    )
}

export default Image