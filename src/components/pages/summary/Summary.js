import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Badge,
  Typography,
  Paper,
Grid,
} from "@material-ui/core";
import EmojiEvents from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) =>
createStyles({
    badge: {
        padding: theme.spacing(1),
    },
    first: {
        color: "#FFD700",
        padding: theme.spacing(2),
        boxShadow: "0px 5px 10px #FFD700",
        border: "1px solid #FFD700",
    },
    second: {
        color: "#C0C0C0",
        padding: theme.spacing(2),
        boxShadow: "0px 5px 10px #C0C0C0",
        border: "1px solid #C0C0C0",

    },
    third: {
        color: "#cd7f32",
        padding: theme.spacing(2),
        boxShadow: "0px 5px 10px #cd7f32",
        border: "1px solid #cd7f32",
    }

}),
);

export default function Summary(props){
  const classes = useStyles(); 
  
  return (
    <Container>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
        >
            <Grid item><Paper className={classes.second}><Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            >
                <Grid item><Typography>Best player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
            <Grid item><Paper className={classes.first}><Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            >
                <Grid item><Typography>Best player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
            <Grid item><Paper className={classes.third}><Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            >
                <Grid item><Typography>Best player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
          
        </Grid>
    </Container>
  );
}