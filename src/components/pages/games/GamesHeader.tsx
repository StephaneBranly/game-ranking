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
import { dataType, gameType } from '../../../types/data';

const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export interface GamesHeaderProps{
  data: dataType,
  setData: React.Dispatch<React.SetStateAction<dataType>>
}

export default function GamesHeader(props: GamesHeaderProps){
  const classes = useStyles(); 
  

  const addPlayer = () => {
    let new_data: dataType = Object.assign({}, props.data);
    let new_game: gameType = {   
      uuid: uuid(),
      gamename: "New game",
    }
    new_data.games.push(new_game);    
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