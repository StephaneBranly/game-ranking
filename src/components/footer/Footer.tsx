import React from 'react';
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Group from '@material-ui/icons/Group';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import Timeline from '@material-ui/icons/Timeline';
import TimelineOutlined from '@material-ui/icons/TimelineOutlined';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import EmojiEventsOutlined from '@material-ui/icons/EmojiEventsOutlined';
import Settings from '@material-ui/icons/Settings';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';

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
export default function Footer(props: any){
  const classes = useStyles(); 
  
  const currentPage = props.currentPage;
  return (
    <BottomNavigation value={currentPage} onChange={props.handleChangeCurrentPage} className={classes.root}>
      <BottomNavigationAction label="Summary" value="summary" icon={currentPage === "summary" ? <Timeline /> : <TimelineOutlined />} />
      <BottomNavigationAction label="Games" value="games" icon={currentPage === "games" ? <EmojiEvents /> : <EmojiEventsOutlined />} />
      <BottomNavigationAction label="Players" value="players" icon={currentPage === "players" ? <Group /> : <GroupOutlined />} />
      <BottomNavigationAction label="Settings" value="settings" icon={currentPage === "settings" ? <Settings /> : <SettingsOutlined />} />
    </BottomNavigation>
  );
}