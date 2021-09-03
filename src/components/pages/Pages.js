import React from 'react';
import Summary from "./summary/Summary"
import Players from "./players/Players"
import Settings from "./settings/Settings"
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
   
  },
}),
);
  
export default function Pages(props){
  const classes = useStyles(); 
  

  const renderPage = (props) => {
    switch(props.currentPage) {
        case 'summary':
          return <Summary></Summary>;
        case 'players':
            return <Players data={props.data}></Players>;
        case 'settings':
            return <Settings handlerSaveData={props.handlerSaveData}></Settings>;
        default:
            return "autre page";
      }
  };

  return (
    renderPage(props)
  );
}