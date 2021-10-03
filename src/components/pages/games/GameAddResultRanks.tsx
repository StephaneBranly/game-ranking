import React from 'react';
import {
  makeStyles,
  createStyles,
  Typography,
  DialogContent,
  Avatar,
  Grid,
  MenuItem,
  Select,
  List,
  ListItem,
} from "@material-ui/core";
import { playerType, scoreType } from '../../../types/data';
import { getPlayerProfile, getPlayerLabel } from '../../../utils/lib';

const useStyles = makeStyles((theme) =>
createStyles({  
    
}),
);
export interface GameAddResultRanksProps{
    players: Array<playerType>
    selectedPlayers: Array<scoreType>,
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Array<scoreType>>>
}

export default function GameAddResultRanks(props: GameAddResultRanksProps){
  const classes = useStyles(); 
  
  const handleChange = (event: any,uuidPlayer: string) => {
    let new_data: Array<scoreType> = props.selectedPlayers;
    new_data.map((el: scoreType) => (el.uuid === uuidPlayer ? el.rank=event.target.value : el))   
    props.setSelectedPlayers(new_data);
  };

  const renderPossibilities = () =>  {
    let possibilities: any = [];

    for(let i = 1; i<props.selectedPlayers.length+1; i++)
    possibilities.push(<MenuItem key={i} value={i}>{i}</MenuItem>);

    return possibilities;
  }
 


  const renderPlayerRank = (selectedPlayers: Array<scoreType>) => {
    return selectedPlayers.map((player) =>
    <ListItem key={player.uuid} dense button>
      <Grid container
        direction="row"
        alignItems="baseline"
        justify="space-between"
        spacing={1}
        >
          <Grid item><Avatar alt={player.uuid} style={{backgroundColor: getPlayerProfile(props.players, player.uuid).color}}>{getPlayerLabel(getPlayerProfile(props.players, player.uuid))}</Avatar></Grid>
          <Grid item><Typography>{getPlayerProfile(props.players, player.uuid).username}</Typography></Grid>
          <Grid item><Select
              value={player.rank}
              onChange={(event) => handleChange(event,player.uuid)}
            >
              {renderPossibilities()}
          </Select>
        </Grid>
        </Grid>
      </ListItem>)
  }

  return (
    <DialogContent dividers>
        <Typography>Ranks</Typography>
        <List>
          {renderPlayerRank(props.selectedPlayers)}
        </List>
    </DialogContent>);
}