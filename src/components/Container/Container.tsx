import React from 'react'

interface IContainer {
    children: React.ReactElement | React.ReactElement[];

}

function Container(props: IContainer) {
    return (
        <div className={ ` w-full h-fit max-w-screen-xl mx-auto` }>
            { props.children }
        </div>
    )
}

export default Container