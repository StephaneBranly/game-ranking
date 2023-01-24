import React from "react"

import "./Input.scss"

export interface InputProps {
    label?: string
    type?: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="input-container">
            {props.label && <label>{props.label}</label>}
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}