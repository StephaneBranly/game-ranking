import React from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { playerType, scoreType } from '../../../types/data';

export interface GameAddResultWhoProps{
    players: Array<playerType>,
    selectedPlayers: Array<scoreType>,
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Array<scoreType>>>
}

export default function GameAddResultWho(props: GameAddResultWhoProps){

  const playerInResults = (uuidPlayer: string) => {
    return (props.selectedPlayers.filter(player => (player.uuid === uuidPlayer)).length !== 0)
  }

  const togglePlayer = (uuidPlayer: string) => {
    if(playerInResults(uuidPlayer))
      props.setSelectedPlayers(props.selectedPlayers.filter(player => player.uuid !== uuidPlayer));
    else
      props.setSelectedPlayers([...props.selectedPlayers,{uuid: uuidPlayer, rank: 1}]);
  }
   
  const renderCheckboxPlayers = (players: Array<playerType>) => {
    return players.map((player) => 
    <ListItem key={player.uuid} dense button onClick={() => togglePlayer(player.uuid)}>
      <ListItemIcon>
          <Checkbox
            edge="end"
            tabIndex={-1}
            disableRipple
            checked={playerInResults(player.uuid)}
            onClick={() => togglePlayer(player.uuid)}
            style={{color: player.color}}
        />
        </ListItemIcon>
        <ListItemText id={player.uuid} primary={player.username} />
      </ListItem>)
  }

  return (
    <div>
      <p>Who was playing?</p>
      <List>
        {renderCheckboxPlayers(props.players)}
      </List>
    </div>);
}