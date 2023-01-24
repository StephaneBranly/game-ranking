import "./Card.scss"

const Card = (props: any) => {
    return (
        <div {...props} className={`card ${props.className??''}`} >
            {props.children}
        </div>
    );
}

export default Card