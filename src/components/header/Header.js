import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import React, { Component } from "react";


const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  EmojiEvents: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}),
);

export default function Header(){
  const classes = useStyles(); 
  
  return (
      <div className={classes.root}>
          <AppBar position="static">
          <Toolbar>
              <EmojiEvents className={classes.EmojiEvents}/>
              <Typography variant="h6" className={classes.title}>
                  Game Ranking
              </Typography>
          </Toolbar>
          </AppBar>
      </div>
      );
  
}