import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  Input,
} from "@material-ui/core";


export interface EditGameProps{
    handleChangeGamename: (newGamename: string) => void,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
    currentGamename: string,
}

export default function EditGame(props: EditGameProps){  
    const [gamename, setGamename] = React.useState(props.currentGamename);
 
    const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
        return;
    }
        props.setEditMode(false);
    };


    return (
    <Dialog
        open={true}
        onClose={handleClose}
    >
        <DialogTitle>
          {"Change the gamename"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Input value={gamename} onChange={(e) => setGamename(e.target.value)} ></Input>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setEditMode(false)} autoFocus>Cancel</Button>
          <Button onClick={() => {props.handleChangeGamename(gamename); props.setEditMode(false);}} variant="outlined">
            Update
          </Button>
        </DialogActions>
      </Dialog>
  );
}