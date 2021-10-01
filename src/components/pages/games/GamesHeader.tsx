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
import { gameType } from '../../../types/data';

const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export interface GamesHeaderProps{
  games: Array<gameType>,
  setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>
}

export default function GamesHeader(props: GamesHeaderProps){
  const classes = useStyles(); 
  

  const addGame = () => {
    let newGame: gameType = 
    {   
      uuid: uuid(),
      gamename: "New game",
      results: [],
      players: [],
      rankHistory: []
    }
    props.setGames(props.games.concat(newGame));
  }


  return (
    <Grid item>
        <Card>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
            spacing={2}
            className={classes.root}
          >
            <Grid item><Typography>{props.games.length} game(s)</Typography></Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Games />}
                onClick={() => addGame()}
              >
                Add a new game
              </Button>
            </Grid>
          </Grid>
       </Card>
    </Grid>
  );
}