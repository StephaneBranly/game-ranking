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

const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export default function PlayersHeader(props: any){
  const classes = useStyles(); 
  

  const addPlayer = () => {

    var randomColor = require('randomcolor'); // import the script
    var color = randomColor();
    let new_data = Object.assign({}, props.data);  // creating copy of state variable jasper
    new_data.players.push(
      {   
        uuid: uuid(),
        username: "New Player",
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
            <Grid item><Typography>{props.data.players.length} player(s)</Typography></Grid>
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