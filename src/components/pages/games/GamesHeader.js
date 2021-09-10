import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import Games from '@material-ui/icons/Games';
import { uuid } from 'uuidv4';

const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export default function GamesHeader(props){
  const classes = useStyles(); 
  

  const addPlayer = () => {

    var randomColor = require('randomcolor'); // import the script
    var color = randomColor();
    let new_data = Object.assign({}, props.data);  // creating copy of state variable jasper
    new_data.games.push(
      {   
        uuid: uuid(),
        username: "New game",
        last_update: "202108291455",
        color: color,
      });    
    props.setData(new_data);
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
            <Grid item><Typography>{props.data.games.length} game(s)</Typography></Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Games />}
                onClick={() => addPlayer()}
              >
                Add a new game
              </Button>
            </Grid>
          </Grid>
       </Card>
    </Grid>
  );
}