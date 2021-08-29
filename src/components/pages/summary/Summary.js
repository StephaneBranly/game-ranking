import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Card,
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
    },
    second: {
        color: "#C0C0C0",
        padding: theme.spacing(2),

    },
    third: {
        color: "#cd7f32",
        padding: theme.spacing(2),
    }

}),
);

export default function Footer(props){
  const classes = useStyles(); 
  
  return (
    <Container>
        <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
        >
            <Grid item><Paper className={classes.second}>Best player <EmojiEvents></EmojiEvents></Paper></Grid>
            <Grid item><Paper className={classes.first}>Best player <EmojiEvents></EmojiEvents></Paper></Grid>
            <Grid item><Paper className={classes.third}>Best player <EmojiEvents></EmojiEvents></Paper></Grid>
        </Grid>
    </Container>
  );
}