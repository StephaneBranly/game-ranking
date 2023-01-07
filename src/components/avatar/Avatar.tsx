import './Avatar.scss'

export interface AvatarProps{
    label: string,
    color?: string
}

const Avatar = (props: AvatarProps) => {
    return (
        <div className='avatar' style={{backgroundColor: props.color}}>
            <div className='avatar-label'>{props.label}</div>
        </div>
    )
}

export default Avatar