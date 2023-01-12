import React, { useState } from 'react';

import './Players.scss';

import PlayersHeader from './PlayersHeader'
import PlayerCard from './PlayerCard'
import { gameType, playerType } from '../../../types/data';
import { severityType } from '../../../types/notification';
import PlayerCompleteCard from './PlayerCompleteCard';
import Dialog from '../../dialog/Dialog';

export interface PlayersProps{
  players: Array<playerType>,
  games: Array<gameType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>,
  addNotification: (arg0: string, arg1: severityType) => void,
  setPlayersOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Players(props: PlayersProps){

    const [currentPlayer, setCurrentPlayer] = useState({player:undefined, edit:false} as unknown as {player:playerType | undefined, edit: boolean});


  
    const renderPlayerCards = (players: Array<playerType>) => {
        return (players.map((player: playerType) => <PlayerCard player={player} games={props.games} changePlayerData={changePlayerData} setCurrentPlayer={setCurrentPlayer} isSelected={currentPlayer.player === player}></PlayerCard>))
    };

    const changePlayerData = (player: playerType, uuid: string) => {
      let new_data: Array<playerType> = props.players;
      new_data.map((el: playerType) => (el.uuid === uuid ? Object.assign(el, player) : el))   
      props.setPlayers(new_data);
    }

    const renderPlayersContent = () => {
      return (
        <div className='players'>
          <PlayersHeader players={props.players} setPlayers={props.setPlayers} setCurrentPlayer={setCurrentPlayer}></PlayersHeader>
          <div className='players-cards'>{renderPlayerCards(props.players)}</div>
          {currentPlayer.player && <PlayerCompleteCard player={currentPlayer.player} edit={currentPlayer.edit} changePlayerData={changePlayerData} addNotification={props.addNotification} setCurrentPlayer={setCurrentPlayer} />}
        </div>
      )
    }

  return (
    <Dialog open={true} title={'Players'} content={renderPlayersContent()} actions={<></>} onClose={() => props.setPlayersOpen(false)} />
  );
}