import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  ClickAwayListener,
  InputBase,
  IconButton,
  Button,
  ButtonGroup,
  Typography
} from "@material-ui/core";
import { gameType } from '../../../types/data';
import { Delete, Edit, NavigateBefore, PostAdd } from '@material-ui/icons';

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
export interface GameCompleteCardProps{
    game: gameType,
    changeGameData: (arg0: gameType, arg1: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<gameType|undefined>>
}

export default function GameCompleteCard(props: GameCompleteCardProps){
  const classes = useStyles(); 

  const [gamename, setGamename] = React.useState(props.game.gamename);

  const handleChangeGamename = () => {
    let new_data: gameType = Object.assign({}, props.game); 
    new_data.gamename = gamename;
    props.changeGameData(new_data, props.game.uuid);
  }

  return (
    <Grid item spacing={1}>
        <Card className={classes.Padding}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
            >
                <Grid item>
                    <Grid item><IconButton size="medium" onClick={() => props.setCurrentGame(undefined)}><NavigateBefore/></IconButton></Grid>
                </Grid>
                <Grid item>
                    <Typography color="primary">
                    {props.game.gamename}
                    </Typography>
                </Grid>
                <Grid item>
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button endIcon={<PostAdd/>}>New result</Button>
                        <Button><Edit/></Button>
                        <Button><Delete/></Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
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
                            <ClickAwayListener onClickAway={() => handleChangeGamename()}><InputBase className={classes.Name} onChange={(e) => setGamename(e.target.value)} defaultValue={props.game.gamename}/></ClickAwayListener>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    </Grid>
    
  );
}