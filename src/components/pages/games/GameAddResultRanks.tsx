import React from 'react';
import {
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

export interface GameAddResultRanksProps{
    players: Array<playerType>
    selectedPlayers: Array<scoreType>,
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Array<scoreType>>>
}

export default function GameAddResultRanks(props: GameAddResultRanksProps){
  const handleChange = (event: any,uuidPlayer: string) => {
    let newData: Array<scoreType> = props.selectedPlayers;
    newData.map((el: scoreType) => (el.uuid === uuidPlayer ? el.rank=event.target.value : el))   
    props.setSelectedPlayers(newData);
  };

  const renderPossibilities = (player: scoreType) =>  {
    let possibilities: any = [];

    for(let i = 1; i<props.selectedPlayers.length+1; i++)
    {
      const selected = player.rank ? player.rank === i : i === 1
      possibilities.push(<MenuItem selected={selected} key={i} value={i}>{i}</MenuItem>);
    }

    return possibilities;
  }
 
  const renderPlayerRank = (selectedPlayers: scoreType[]) => {
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
              id={player.uuid}
              defaultValue={player.rank}
              onChange={(event) => handleChange(event,player.uuid)}
            >
              {renderPossibilities(player)}
          </Select>
        </Grid>
        </Grid>
      </ListItem>)
  }

  return (
    <div>
        <Typography>Ranks</Typography>
        <List>
          {renderPlayerRank(props.selectedPlayers)}
        </List>
    </div>);
}
