import "./IconButton.scss";

export interface IconButtonProps {
    onClick: () => void;
    disabled?: boolean;
    icon: JSX.Element;
    className?: string;
}

const IconButton = (props: IconButtonProps) => {
    return (
        <button
            className={`icon-button ${props.className}`}
            onClick={() => props.onClick()}
            disabled={props.disabled}
        >
            {props.icon}
        </button>
    );
}

export default IconButton;