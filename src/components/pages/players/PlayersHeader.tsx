import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import PersonAdd from '@material-ui/icons/PersonAdd';
import { uuid } from 'uuidv4';
import { dataType, playerType } from '../../../types/data';

const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export interface PlayersHeaderProps{
  players: Array<playerType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>
}

export default function PlayersHeader(props: PlayersHeaderProps){
  const classes = useStyles(); 
  

  const addPlayer = () => {
    var randomColor = require('randomcolor'); // import the script
    var color = randomColor();
    let new_player: playerType = 
    {   
      uuid: uuid(),
      username: "New Player",
      color: color,
    };    
    props.setPlayers(props.players.concat(new_player));
  }


  return (
    <Grid item>
        <Card>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            spacing={2}
            className={classes.root}
          >
            <Grid item><Typography>{props.players.length} player(s)</Typography></Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PersonAdd />}
                onClick={() => addPlayer()}
              >
                Add a new player
              </Button>
            </Grid>
          </Grid>
       </Card>
    </Grid>
  );
}