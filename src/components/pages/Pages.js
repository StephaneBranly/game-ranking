import React from 'react';
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
  
  return (
    <div>
        Hello world, current page is {props.value_currentPage}
    </div>
  );
}