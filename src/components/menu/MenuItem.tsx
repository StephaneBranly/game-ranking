import "./MenuItem.scss";

export interface MenuItemProps {
    text: string
    onClick?: () => void
    disabled?: boolean
    icon?: JSX.Element
    className?: string
}

export default function MenuItem(props: MenuItemProps){
    return (
        <div className={`menu-item ${props.className}`} onClick={() =>  props.onClick && props.onClick()}>
            {props.icon}
            <span>{props.text}</span>
        </div>
    );
}