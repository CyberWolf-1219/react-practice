import React from 'react'

interface ISection {
    children: React.ReactElement | React.ReactElement[];
}

function Section(props: ISection) {
    return (
        <section className={ `relative w-full h-fit` }>
            { props.children }
        </section>
    )
}

export default Section