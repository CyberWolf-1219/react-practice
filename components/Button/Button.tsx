import React, { useRef } from 'react'
import styleClasses from "./styles.module.css"

interface IButton {
    classes?: string;
    type: "fill" | "outlined";
    size: "sm" | "md" | "lg";
    color: "primary" | "secondary" | "accent";
    text: string;
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: IButton) {
    const type = useRef<string>('');
    const size = useRef<string>('');
    const color = useRef<string>('');

    if (props.type == "fill") {
        type.current = "border-0";
    } else if (props.type == "outlined") {
        type.current = `border-2 bg-transparent`;
    }

    if (props.size == "sm") {
        size.current = `text-sm px-2 py-1`;
    } else if (props.size == 'md') {
        size.current = `text-base px-3 py-2`;
    } else if (props.size == 'lg') {
        size.current = `text-lg px-4 py-3`
    }

    if (props.type == `fill`) {
        if (props.color == 'primary') {
            color.current = "bg-white text-secondary";
        } else if (props.color == 'secondary') {
            color.current = `bg-secondary text-primary`;
        } else if (props.color == 'accent') {
            color.current = `bg-accent text-primary`
        }
    }

    return (
        <button className={ `${styleClasses.button} ${props.classes} shrink-0 p-3 rounded-md font-bold ${type.current} ${size.current} ${color.current}` } onClick={ props.action }>{ props.text }</button>
    )
}

export default Button