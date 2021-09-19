import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  Typography,
  Avatar,
  Badge
} from "@material-ui/core";
import { playerType, resultType } from '../../../types/data';
import { EmojiEvents } from '@material-ui/icons';
import { AvatarGroup } from '@material-ui/lab';
import { getPlayerLabel, getPlayerProfile } from '../../../utils/lib';

const useStyles = makeStyles((theme) =>
createStyles({  
    Padding: {
        padding: theme.spacing(2),
    },
    first: {
        color: "#FFD700",
    },
    second: {
        color: "#C0C0C0",

    },
    third: {
        color: "#cd7f32",
    },
    ColorPicker: {
        position: "absolute",
        zIndex: 2
    },
}),
);
export interface ResultCardProps{
    result: resultType,
    players: Array<playerType>,
}

export default function ResultCard(props: ResultCardProps){
  const classes = useStyles(); 

  const displayPlayersBadges = () => {
    return (props.result.ranks.map((rank) => 
    <Badge
        overlap="circle"
        style={{borderColor: "rgba(0,0,0,0)"}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<EmojiEvents className={classes.first}/>}
      >
        <Avatar alt={getPlayerProfile(props.players,rank.uuid).username} style={{backgroundColor: getPlayerProfile(props.players,rank.uuid).color}}>{getPlayerLabel(getPlayerProfile(props.players,rank.uuid))}</Avatar>
    </Badge>
    ));
  }

  return (
    <Grid item>
        <Card className={classes.Padding}>
            <Grid 
                container
                direction="column"
                justify="space-between"
                alignItems="stretch"
                spacing={1}
            >
            <Grid item>
                <Typography>Players:</Typography>
                <AvatarGroup max={15}>
                    {displayPlayersBadges()}
                </AvatarGroup>
            </Grid>
            </Grid>
        </Card>
    </Grid>
  );
}