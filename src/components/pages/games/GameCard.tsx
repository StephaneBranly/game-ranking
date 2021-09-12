import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  ClickAwayListener,
  InputBase,
  Typography
} from "@material-ui/core";
import { gameType } from '../../../types/data';

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
    changeGameData: (arg0: gameType, arg1: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<gameType|undefined>>
}

export default function GameCard(props: GameCardProps){
  const classes = useStyles(); 


  return (
    <Grid item spacing={1}>
        <Card className={classes.Padding} onClick={() => props.setCurrentGame(props.game)}>
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
                            <Typography>{props.game.gamename}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Grid>
    
  );
}