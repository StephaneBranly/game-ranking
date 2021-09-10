import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  ClickAwayListener,
  InputBase
} from "@material-ui/core";

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

export default function GameCard(props: any){
  const classes = useStyles(); 

  const [gamename, setGamename] = React.useState(props.game.gamename);

  const handleChangeGamename = () => {
    let new_data = Object.assign({}, props.game); 
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