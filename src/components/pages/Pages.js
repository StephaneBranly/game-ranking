import React from 'react';
import Summary from "./summary/Summary"
import Players from "./players/Players"
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
   
  },
}),
);
  
export default function Pages(props){
  const classes = useStyles(); 
  
  const renderPage = (page,save) => {
    switch(page) {
        case 'summary':
          return <Summary></Summary>;
        case 'players':
            return <Players save={save}></Players>;
        default:
            return "autre page";
      }
  };

  return (
    renderPage(props.value_currentPage, props.save)
  );
}