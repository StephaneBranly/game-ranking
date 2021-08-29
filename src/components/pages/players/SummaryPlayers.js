import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
createStyles({  

}),
);

export default function SummaryPlayers(props){
  const classes = useStyles(); 
  
  return (
    <Card>
       <Typography>{props.players.count} player(s) in this save</Typography>
    </Card>
  );
}