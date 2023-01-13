import React from 'react'
import Image from '../Image/Image'
import { RxAvatar } from 'react-icons/rx';

interface ICaseStudyCard {
    image: string;
    title: string;
    text: string;
    name: string;
    data: string
}

function CaseStudyCard(props: ICaseStudyCard) {
    return (
        <div className={ `w-full max-w-[300px] h-[550px] p-4 flex flex-col items-center justify-between gap-4 rounded-md transition-transform shadow-md hover:scale-105` }>

            <div className={ `w-full h-fit` }>
                <div>
                    <Image image={ props.image } containerClasses={ `aspect-square w-full overflow-hidden rounded-lg` } imageClasses={ `object-cover` } />
                </div>
                <div>
                    <b className={ `w-full h-fit font-bold text-2xl` }>
                        { props.title }
                    </b>
                    <p className={ `mt-4 text-fade text-sm` }>
                        { props.text }
                    </p>
                </div>
            </div>
            <div className={ `w-full h-fit pt-1 border-t-2` }>
                <div className={ `w-full h-full flex flex-row items-center justify-start gap-4` }>
                    <div className={ `h-fit` }>
                        <RxAvatar color={ `#000000` } size={ `2.5rem` } />
                    </div>
                    <div className={ `w-full h-fit` }>
                        <b className={ `block` }>
                            { props.name }
                        </b>
                        <small className={ `block` }>
                            { props.data }
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCard