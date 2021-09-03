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


const useStyles = makeStyles((theme) =>
createStyles({  
  root: {
    padding: theme.spacing(1),
  },
}),
);

export default function SummaryPlayers(props){
  const classes = useStyles(); 
  
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
            <Grid item><Typography>{props.players.list.length} player(s) in this save</Typography></Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<PersonAdd />}
              >
                Add a new player
              </Button>
            </Grid>
          </Grid>
       </Card>
    </Grid>
  );
}