import React from 'react';
import Summary from "./summary/Summary"
import Players from "./players/Players"
import Settings from "./settings/Settings"
import Games from "./games/Games"
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { gameType, playerType } from '../../types/data';


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
   
  },
}),
);
  
export interface PagesProps{
  currentPage: string,
  games: Array<gameType>,
  setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>
  players: Array<playerType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>
  handlerSaveData: () => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Pages(props: PagesProps){
  const classes = useStyles(); 
  
  const renderPage = (props: PagesProps) => {
    switch(props.currentPage) {
        case 'summary':
          return <Summary></Summary>;
        case 'players':
          return <Players players={props.players} setPlayers={props.setPlayers}></Players>;
        case 'settings':
          return <Settings handlerSaveData={props.handlerSaveData} handlerLoadData={props.handlerLoadData}></Settings>;
        case 'games':
          return <Games games={props.games} setGames={props.setGames}></Games>    
        default:
          return <></>;
      }
  };

  return (
    renderPage(props)
  );
}