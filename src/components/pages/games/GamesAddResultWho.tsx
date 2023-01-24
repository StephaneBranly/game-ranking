import React from 'react';

import { playerType, scoreType } from '../../../types/data';

import './GamesAddResultWho.scss';
import { getPlayerLabel } from '../../../utils/lib';
import Avatar from '../../avatar/Avatar';

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
        <div className={`games-add-result-who-player ${playerInResults(player.uuid) ? 'selected' : ''}`} onClick={() => togglePlayer(player.uuid)}>
            <Avatar color={player.color} label={getPlayerLabel(player)} />
            <p>{player.username}</p>
        </div>
    );
  }

  return (
    <div>
      <p>Who was playing?</p>
      <div className='games-add-result-who-players'>
        {renderCheckboxPlayers(props.players)}
      </div>
    </div>);
}