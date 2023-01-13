import React from 'react'

interface IH2 {
    text: string;
    divisionClasses?: string;
    classes?: string
}

function H2(props: IH2) {

    const words = props.text.split('<>').map((part, index) => {
        return (<div key={ index } className={ props.divisionClasses }>{ part }</div>)
    })

    return (
        <h2 className={ props.classes }>
            { words }
        </h2>
    )
}

export default H2