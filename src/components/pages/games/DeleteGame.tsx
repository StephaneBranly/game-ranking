import React, { ChangeEvent, VoidFunctionComponent } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { notificationType } from '../../../types/notification';


export interface DeleteGameProps{
  deleteGame: () => void,
  setDeleteGameOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DeleteGame(props: DeleteGameProps){  
  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setDeleteGameOpen(false);
  };

    return (
    <Dialog
        open={true}
        onClose={handleClose}
    >
        <DialogTitle>
          {"Delete this game?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete this game and all associated results.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setDeleteGameOpen(false)} autoFocus>Cancel</Button>
          <Button onClick={() => props.deleteGame()} variant="outlined" style={{color: "#DD0505", borderColor: "#DD0505"}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}