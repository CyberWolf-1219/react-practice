import React from 'react'
import Container from '../Container/Container'

import logo from "../../assets/logo.svg"
import Image from '../Image/Image'
import Button from '../Button/Button'

interface INavigation {
    classes?: string
}

function Navigation(props: INavigation) {
    return (
        <nav className={ `w-full h-fit ${props.classes} bg-white/50 backdrop-blur-md border-b-2 border-accent/50` }>
            <Container>
                <div className={ `w-full h-fit py-4 flex flex-row items-center justify-between` }>
                    <Image image={ logo.src } />
                    <ul className={ `flex flex-row items-center justify-center gap-8 font-bold` }>
                        <li>Showcase</li>
                        <li>Developers</li>
                        <li>Resources</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                    <div>
                        <Button text={ `SignUp` } type={ 'fill' } color={ `secondary` } size={ `md` } />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation