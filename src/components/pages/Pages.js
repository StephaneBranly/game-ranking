import React from 'react';
import Summary from "./summary/Summary"
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
  
  const renderPage = page => {
    switch(page) {
        case 'summary':
          return <Summary></Summary>;
        default:
          return "autre page";
      }
  };

  return (
    renderPage(props.value_currentPage)
  );
}