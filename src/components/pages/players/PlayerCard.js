import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Typography,
  Grid,
} from "@material-ui/core";
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) =>
createStyles({  
    PlayerProfile: {
        padding: theme.spacing(2),
    }
}),
);

export default function PlayerCard(props){
  const classes = useStyles(); 
  console.log(props)
  return (
    <Grid item spacing={2}>
        <Card className={classes.PlayerProfile}>
            <FiberManualRecord style={{color: props.player.color}}></FiberManualRecord>
            <Typography>{props.player.username}</Typography>
        </Card>
    </Grid>
  );
}