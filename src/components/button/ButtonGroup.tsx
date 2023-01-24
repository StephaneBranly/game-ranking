import "./ButtonGroup.scss"

export interface ButtonGroupProps{
    children: React.ReactNode[]
}

const ButtonGroup = (props: ButtonGroupProps) => {
    return (
        <div className='button-group'>
            {props.children}
        </div>
    );
}

export default ButtonGroup;