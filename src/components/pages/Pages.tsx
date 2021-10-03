import React from 'react';
import Players from "./players/Players"
import Settings from "./settings/Settings"
import Games from "./games/Games"
import { gameType, playerType } from '../../types/data';
import { severityType } from '../../types/notification';

export interface PagesProps{
  currentPage: string,
  games: Array<gameType>,
  setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>
  players: Array<playerType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>
  handlerSaveData: () => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement>) => void,
  addNotification: (arg0: string, arg1: severityType) => void,
}

export default function Pages(props: PagesProps){
  
  const renderPage = (props: PagesProps) => {
    switch(props.currentPage) {
        case 'players':
          return <Players players={props.players} games={props.games} setPlayers={props.setPlayers} addNotification={props.addNotification}></Players>;
        case 'settings':
          return <Settings handlerSaveData={props.handlerSaveData} handlerLoadData={props.handlerLoadData}></Settings>;
        case 'games':
          return <Games games={props.games} setGames={props.setGames} players={props.players} addNotification={props.addNotification}></Games>    
        default:
          return <></>;
      }
  };

  return (
    renderPage(props)
  );
}