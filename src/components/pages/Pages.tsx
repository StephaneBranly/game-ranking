import "./Pages.scss";
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
  handlerSaveData: (cookie: boolean) => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
  addNotification: (arg0: string, arg1: severityType) => void,
  handlerResetData: (cookie: boolean) => void,
}

export default function Pages(props: PagesProps){
  
  const renderPage = (props: PagesProps) => {
    switch(props.currentPage) {
        case 'players':
          return <Players players={props.players} games={props.games} setPlayers={props.setPlayers} addNotification={props.addNotification}></Players>;
        case 'settings':
          return <Settings handlerSaveData={props.handlerSaveData} handlerLoadData={props.handlerLoadData} handlerResetData={props.handlerResetData}></Settings>;
        case 'games':
          return <></>
        default:
          return <></>;
      }
  };

  return (
    <div className="pages">
      {renderPage(props)}
    </div>
  );
}