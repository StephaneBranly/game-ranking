import "./Button.scss";

export interface ButtonProps{
    text?: string,
    onClick: () => void,
    disabled?: boolean,
    color?: "primary" | "secondary" | "default",
    variant?: "text" | "outlined" | "contained",
    startIcon?: JSX.Element,
    endIcon?: JSX.Element,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
}

export default function Button(props: ButtonProps){
    return (
        <button
            className={`button ${props.className}`}
            onClick={() => props.onClick()}
            disabled={props.disabled}
            type={props.type}
        >
            {props.startIcon}
            {props.text}
            {props.endIcon}
        </button>
    );
}