import "./Separator.scss";

export interface SeparatorProps {
    className?: string
}

export default function Separator(props: SeparatorProps){
    return (
        <div className={`separator ${props.className}`}></div>
    );
}