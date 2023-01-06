import './Avatar.scss'

export interface AvatarProps{
    label: string,
}

const Avatar = (props: AvatarProps) => {
    return (
        <div className='avatar'>
            {props.label}
        </div>
    )
}

export default Avatar