import React from 'react';
import {
  makeStyles,
  createStyles,
  Typography,
  DialogContent,
  Avatar,
  Grid,
} from "@material-ui/core";
import { playerType, scoreType } from '../../../types/data';
import { getPlayerProfile } from '../../../utils/lib';

const useStyles = makeStyles((theme) =>
createStyles({  
    
}),
);
export interface GameAddResultResultsProps{
    players: Array<playerType>
    selectedPlayers: Array<scoreType>,
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Array<scoreType>>>
}

export default function GameAddResultResults(props: GameAddResultResultsProps){
  const classes = useStyles(); 
  
  const renderPlayerRank = () => {
    return props.selectedPlayers.map((player) => 
    <Grid item key={player.uuid}>
      <Grid container
        direction="row"
        spacing={1}
        >
          <Grid item><Avatar alt={player.uuid} style={{backgroundColor: getPlayerProfile(props.players, player.uuid).color}}>L</Avatar></Grid>
          <Grid item><Typography>{getPlayerProfile(props.players, player.uuid).username}</Typography></Grid>
        </Grid>
      </Grid>)
  }

  return (
    <DialogContent dividers>
        <Typography>Results</Typography>
        <Grid container spacing={1} direction="column" alignItems="baseline">
        {renderPlayerRank()}
        </Grid>
    </DialogContent>);
}