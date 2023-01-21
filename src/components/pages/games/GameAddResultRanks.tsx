import React from 'react';

import "./GameAddResultRanks.scss";

import { playerType, scoreType } from '../../../types/data';
import { getPlayerProfile, getPlayerLabel } from '../../../utils/lib';
import Avatar from '../../avatar/Avatar';
import Select from '../../select/Select';

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
 
  const renderPlayerRank = (selectedPlayers: scoreType[]) => {
    return selectedPlayers.map((player, id) =>
    {
      const rowStyle = {
        gridRow: `${id+1}/${id+2}`,
        gridColumn: '1/2',
      }

      return (<div key={player.uuid} className='game-add-result-ranks-player' style={rowStyle} >
        <div><Avatar label={getPlayerLabel(getPlayerProfile(props.players, player.uuid))} color={getPlayerProfile(props.players, player.uuid).color}/></div>
        <div>{getPlayerProfile(props.players, player.uuid).username}</div>
        <div className='game-add-result-ranks-player-rank'>
          <Select
            onChange={(event) => handleChange(event, player.uuid)}
            defaultValue={player.rank}
            options={selectedPlayers.map((el, id) => ({value: `${id+1}`, label: `${id+1}`}))} 
          />
      </div>
      </div>)})
  }

  return (
    <div>
        <p>Ranks</p>
        <div className='game-add-result-ranks-players'>
          {renderPlayerRank(props.selectedPlayers)}
        </div>
    </div>);
}
