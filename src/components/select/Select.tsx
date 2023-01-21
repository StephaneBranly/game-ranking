import React from "react";

import "./Select.scss";

export interface SelectProps {
    label?: string
    defaultValue: string | number
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    options: { label: string, value: string}[]
}

export default function Select(props: SelectProps) {
    return (
        <div className="select-container">
            {props.label && <label>{props.label}</label>}
            <select defaultValue={props.defaultValue} onChange={props.onChange}>
                {props.options.map((option, key) => <option key={key} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}