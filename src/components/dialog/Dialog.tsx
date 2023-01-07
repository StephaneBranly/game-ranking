import { Close } from "@material-ui/icons";
import IconButton from "../iconButton/IconButton";
import "./Dialog.scss"

export interface DialogProps{
    open: boolean,
    title: string,
    content: JSX.Element,
    actions: JSX.Element,
    onClose: () => void
}

const Dialog = (props: DialogProps) => {
    return (
        <div className={`dialog ${props.open ? "open" : ""}`}>
            <div className="dialog-content">
                <div className="dialog-header">
                    <IconButton onClick={props.onClose} icon={<Close />}/>
                    <h3 className="dialog-title">{props.title}</h3>
                </div>
                <div className="dialog-body">
                    {props.content}
                </div>
                <div className="dialog-actions">
                    {props.actions}
                </div>
            </div>
        </div>
    );
}

export default Dialog