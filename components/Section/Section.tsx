import React from 'react'

interface ISection {
    classes?: string;
    children: React.ReactElement | React.ReactElement[]
}

function Section(props: ISection) {
    return (
        <section className={ `w-full h-fit ${props.classes}` }>
            { props.children }
        </section>
    )
}

export default Section