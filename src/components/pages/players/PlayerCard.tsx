import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  IconButton,
  Badge,
  ClickAwayListener,
  InputBase,
  Typography
} from "@material-ui/core";
import Person from '@material-ui/icons/Person';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import { gameType, playerType } from '../../../types/data';
import { calculateNbPosition } from '../../../utils/lib';


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
    Name: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: theme.spacing(1),
        margin: "0px",
        border: "1px solid rgba(0,0,0,0.1)",
        width: theme.spacing(17)
    }
}),
);

export interface PlayerCardProps{
    player: playerType,
    games: Array<gameType>,
    changePlayerData: (arg0: playerType, arg1: string) => void,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<playerType|undefined>>,
}

export default function PlayerCard(props: PlayerCardProps){
  const classes = useStyles(); 
  return (
    <Grid item spacing={1} onClick={() => props.setCurrentPlayer(props.player)}>
        <Card className={classes.Padding}>
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
                        <Grid item><IconButton size="small"><Person style={{color: props.player.color}}/></IconButton></Grid>
                        <Grid item>
                            <Typography>{props.player.username}</Typography>
                        </Grid>
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
                        <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,1)} showZero className={classes.first} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,2)} showZero className={classes.second} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,3)} showZero className={classes.third} color="primary"><EmojiEvents /></Badge></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Grid>
    
  );
}