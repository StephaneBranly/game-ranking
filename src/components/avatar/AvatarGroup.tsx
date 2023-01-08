import "./AvatarGroup.scss"

export interface AvatarGroupProps {
    max: number
    children: React.ReactNode[]
}

const AvatarGroup = (props: AvatarGroupProps) => {
    return (
        <div className='avatar-group'>
            {props.children.slice(0,props.max).map((child,index) => {
                return <div className='avatar-group-avatar' key={index}>{child}</div>
            })}
            {props.children.length > props.max && <div className='avatar-group-avatar-more'>+{props.children.length - props.max}</div>}
        </div>
    )
}

export default AvatarGroup
