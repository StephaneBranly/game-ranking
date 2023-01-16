import React from "react";

import "./Select.scss";

export interface SelectProps {
    label?: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options: string[]
}

export default function Select(props: SelectProps) {
    return (
        <div className="select-container">
            {props.label && <label>{props.label}</label>}
            <select value={props.value} onChange={props.onChange}>
                {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}