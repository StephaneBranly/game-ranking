import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import Person from '@material-ui/icons/Person';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import MoreVert from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>
createStyles({  
    PlayerProfile: {
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
    }
}),
);

export default function PlayerCard(props){
  const classes = useStyles(); 
  console.log(props)
  return (
    <Grid item spacing={1}>
        <Card className={classes.PlayerProfile}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
            >
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="baseline"
                        spacing={1}
                    >
                        <Grid item>
                            <IconButton size="small">
                                <MoreVert />
                            </IconButton>
                        </Grid>
                        <Grid item><Badge><Person style={{color: props.player.color}}/></Badge></Grid>

                        <Grid item><Typography>{props.player.username}</Typography></Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="baseline"
                        spacing={1}
                    >
                        <Grid item><Badge badgeContent={4} showZero className={classes.first} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={14} showZero className={classes.second} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={0} showZero className={classes.third} color="primary"><EmojiEvents /></Badge></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Grid>
  );
}