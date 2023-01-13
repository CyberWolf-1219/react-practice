import React, { ReactElement } from 'react'

interface IContainer {
    classes?: string;
    children: ReactElement | ReactElement[];
}

function Container(props: IContainer) {
    return (
        <div className={ `w-full h-full max-w-screen-xl mx-auto ${props.classes}` }>{ props.children }</div>
    )
}

export default Container