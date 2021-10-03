import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";


export interface DeleteResultProps{
  deleteResult: () => void,
  setDeleteResultOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DeleteResult(props: DeleteResultProps){  
  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setDeleteResultOpen(false);
  };

    return (
    <Dialog
        open={true}
        onClose={handleClose}
    >
        <DialogTitle>
          {"Delete this Result?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete this Result and all associated results.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setDeleteResultOpen(false)} autoFocus>Cancel</Button>
          <Button onClick={() => props.deleteResult()} variant="outlined" style={{color: "#DD0505", borderColor: "#DD0505"}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}