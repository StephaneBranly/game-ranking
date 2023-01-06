import "./Tooltip.scss"

export interface TooltipProps {
    children: React.ReactNode
    content: string
    position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip = (props: TooltipProps) => {
    return (
        <div className={`tooltip tooltip--${props.position || 'top'}`}>
            {props.children}
            <div className='tooltip-content'>
                {props.content}
            </div>
        </div>
    );
}

export default Tooltip;