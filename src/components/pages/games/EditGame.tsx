import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Select,
    Box,
  Divider,
  TextField,
  Input,
} from "@material-ui/core";
import { gameType } from '../../../types/data';


export interface EditGameProps{
    handleChangeGame: (newGame: gameType) => void,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
    currentGame: gameType,
}

export default function EditGame(props: EditGameProps){  
    const [game, setGame] = React.useState(props.currentGame);
 
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
          {"Change the game settings"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField value={game.gamename} onChange={(e) => setGame({...game, 'gamename': e.target.value })} label='Gamename' ></TextField>
          </DialogContentText>
          <Divider />
          <DialogContentText>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
            <Select value={game.algorithmSettings.algo} label='Algorithm'><MenuItem selected={true} key={'elo'} value={'elo'}>{'elo'}</MenuItem></Select>
            <TextField
              label="K factor for n first games"
              type='number'
              value={game.algorithmSettings.params.k_first}
              onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'k_first': Number(e.target.value)} } })}
            />
            <TextField
              label="N"
              type='number'
              value={game.algorithmSettings.params.n_first}
              onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'n_first': Number(e.target.value)} } })}
            />
            <TextField
              label="K factor after n first games"
              type='number'
              value={game.algorithmSettings.params.k}
              onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'k': Number(e.target.value)} } })}
            />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setEditMode(false)} autoFocus>Cancel</Button>
          <Button onClick={() => {props.handleChangeGame(game); props.setEditMode(false);}} variant="outlined">
            Update
          </Button>
        </DialogActions>
      </Dialog>
  );
}