import React from 'react';
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Group from '@material-ui/icons/Group';
import Timeline from '@material-ui/icons/Timeline';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    position: 'fixed',
    bottom: 0,
  },
}),
);
  // khfjds
export default function Footer(props){
  const classes = useStyles(); 
  
  return (
    <BottomNavigation value={props.currentPage} onChange={props.handleChangeCurrentPage} className={classes.root}>
      <BottomNavigationAction label="Summary" value="summary" icon={<Timeline />} />
      <BottomNavigationAction label="Games" value="games" icon={<EmojiEvents />} />
      <BottomNavigationAction label="Players" value="players" icon={<Group />} />
      <BottomNavigationAction label="Settings" value="settings" icon={<Settings />} />
    </BottomNavigation>
  );
}