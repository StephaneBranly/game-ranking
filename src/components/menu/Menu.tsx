import "./Menu.scss";

export interface MenuProps {
    children: JSX.Element[]
    open?: boolean
    onClose?: () => void
    anchorEl?: HTMLElement
}

export default function Menu(props: MenuProps){
    return (
        <div
            className={`menu ${props.open ? "open" : ""}`}
            style={{top: props.anchorEl?.offsetTop, left: props.anchorEl?.offsetLeft}}
            onMouseLeave={() => props.onClose && props.onClose()}    
        >
            {props.children}
        </div>
    );
}