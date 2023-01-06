import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Avatar
} from "@material-ui/core";

import Card from '../../card/Card';

import { gameType, playerType } from '../../../types/data';
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
export interface GameCardProps{
    game: gameType,
    players: playerType[],
    changeGameData: (arg0: gameType, arg1: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<{game: gameType|undefined, edit: boolean}>>
}

export default function GameCard(props: GameCardProps){
  const classes = useStyles(); 

    const renderPlayers = () => {
        return (<AvatarGroup max={4}>
                {
                    props.game.rankHistory[props.game.rankHistory.length-1].playersRank.sort((a, b) => a.score < b.score ? 1 : -1).map((player,index) => {
                        const playerProfile = getPlayerProfile(props.players,player.playerUuid)
                        return <Avatar alt={playerProfile.username} style={{backgroundColor: playerProfile.color}}>{getPlayerLabel(playerProfile)}</Avatar>
                    })
                }
              </AvatarGroup>)
    }

    return (
    <Card onClick={() => props.setCurrentGame({game: props.game, edit: false})}>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
            alignContent="space-between"
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
                        <Typography>{props.game.gamename}</Typography>
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
                    <Grid item><Typography>{`${props.game.results.length} results | `}</Typography></Grid>
                    <Grid item>{renderPlayers()}</Grid>
                </Grid>
            </Grid>
        </Grid>
    </Card>
  );
}