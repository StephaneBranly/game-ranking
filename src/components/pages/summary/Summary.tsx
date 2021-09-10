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
        padding: theme.spacing(2),
        border: "1px solid #FFD700",
        background: "linear-gradient(to top, #FFD700, #FCF6BA)"
    },
    second: {
        padding: theme.spacing(2),
        border: "1px solid #C0C0C0",
        background: "linear-gradient(to top, #B0B0B0, #DFDFDF)"
    },
    third: {
        padding: theme.spacing(2),
        border: "1px solid #cd7f32",
        background: "linear-gradient(to top, #ad5f12, #dd9f52)"
    }
}),
);

export default function Summary(props: any){
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
                <Grid item><Typography>Silver player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
            <Grid item><Paper className={classes.first}><Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            >
                <Grid item><Typography>Gold player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
            <Grid item><Paper className={classes.third}><Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            >
                <Grid item><Typography>Bronze player</Typography></Grid><Grid item><Badge><EmojiEvents/></Badge></Grid></Grid></Paper>
            </Grid>
          
        </Grid>
    </Container>
  );
}