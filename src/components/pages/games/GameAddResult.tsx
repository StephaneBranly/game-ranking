import React from 'react';
import {
  makeStyles,
  createStyles,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { gameType, playerType, resultType } from '../../../types/data';
import { PostAdd } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
createStyles({  
    
}),
);
export interface GameAddResultProps{
    game: gameType,
    players: Array<playerType>,
    changeGameData: (game: gameType, uuid: string) => void,
    addResultOpen: boolean,
    setAddResultOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GameAddResult(props: GameAddResultProps){
  const classes = useStyles(); 


  return (
    <Dialog aria-labelledby="customized-dialog-title" open={props.addResultOpen}>
    <DialogTitle id="customized-dialog-title">
      New result
    </DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </Typography>
    </DialogContent>
    <DialogActions>
        <Button onClick={() => props.setAddResultOpen(false)} color="primary" variant="outlined">
            Cancel
        </Button>
        <Button autoFocus onClick={() => props.setAddResultOpen(false)} color="primary" variant="outlined" endIcon={<PostAdd/>}>
            Add result
        </Button>
    </DialogActions>
  </Dialog>
  );
}