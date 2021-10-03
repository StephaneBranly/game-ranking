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
import { playerType } from '../../../types/data';
import { ChromePicker } from 'react-color';

export interface EditPlayerProps{
    player: playerType
    handleChangePlayer: (player: playerType) => void,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function EditPlayer(props: EditPlayerProps){  
    const [player, setPlayer] = React.useState(props.player);
 
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
          {"Edit player"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Input value={player.username} onChange={(e) => setPlayer({...player, username: e.target.value})} ></Input>
          </DialogContentText>
          <DialogContentText>
            <ChromePicker color={player.color} onChangeComplete={(c) => setPlayer({...player, color: c.hex})} disableAlpha={true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setEditMode(false)} autoFocus>Cancel</Button>
          <Button onClick={() => {props.handleChangePlayer(player); props.setEditMode(false);}} variant="outlined">
            Update
          </Button>
        </DialogActions>
      </Dialog>
  );
}

