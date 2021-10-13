import React, { useState } from 'react';
import {
  Container,
  Grid,

} from "@material-ui/core";
import PlayersHeader from './PlayersHeader'
import PlayerCard from './PlayerCard'
import { gameType, playerType } from '../../../types/data';
import { severityType } from '../../../types/notification';
import PlayerCompleteCard from './PlayerCompleteCard';

export interface PlayersProps{
  players: Array<playerType>,
  games: Array<gameType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>,
  addNotification: (arg0: string, arg1: severityType) => void,
}

export default function Players(props: PlayersProps){

    const [currentPlayer, setCurrentPlayer] = useState({player:undefined, edit:false} as unknown as {player:playerType | undefined, edit: boolean});


  
    const renderPlayerCards = (players: Array<playerType>) => {
        return (players.map((player: playerType) => <PlayerCard player={player} games={props.games} changePlayerData={changePlayerData} setCurrentPlayer={setCurrentPlayer}></PlayerCard>))
    };

    const changePlayerData = (player: playerType, uuid: string) => {
      let new_data: Array<playerType> = props.players;
      new_data.map((el: playerType) => (el.uuid === uuid ? Object.assign(el, player) : el))   
      props.setPlayers(new_data);
    }

  return (
    <Container>
      { currentPlayer.player ?
        <PlayerCompleteCard player={currentPlayer.player} edit={currentPlayer.edit} changePlayerData={changePlayerData} addNotification={props.addNotification} setCurrentPlayer={setCurrentPlayer} /> :
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
            <PlayersHeader players={props.players} setPlayers={props.setPlayers} setCurrentPlayer={setCurrentPlayer}></PlayersHeader>
            {renderPlayerCards(props.players)}
       </Grid> }
    </Container>
  );
}