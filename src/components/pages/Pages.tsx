import React from 'react';
import Summary from "./summary/Summary"
import Players from "./players/Players"
import Settings from "./settings/Settings"
import Games from "./games/Games"
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { dataType } from '../../types/data';


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
   
  },
}),
);
  
export interface PagesProps{
  currentPage: string,
  data: dataType,
  setData: React.Dispatch<React.SetStateAction<dataType>>,
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
          return <Players data={props.data} setData={props.setData}></Players>;
        case 'settings':
          return <Settings handlerSaveData={props.handlerSaveData} handlerLoadData={props.handlerLoadData}></Settings>;
        case 'games':
          return <Games data={props.data} setData={props.setData}></Games>    
        default:
          return <></>;
      }
  };

  return (
    renderPage(props)
  );
}