import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  IconButton,
  Badge,
  ClickAwayListener,
  InputBase
} from "@material-ui/core";
import Person from '@material-ui/icons/Person';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import { ChromePicker, ColorResult } from 'react-color';
import { playerType } from '../../../types/data';
import { severityType } from '../../../types/notification';


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
    changePlayerData: (arg0: playerType, arg1: string) => void,
    addNotification: (arg0: string, arg1: severityType) => void,
}

export default function PlayerCard(props: PlayerCardProps){
  const classes = useStyles(); 

  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
  const [username, setUsername] = React.useState(props.player.username);

  const handleColorChangeComplete = (color: ColorResult) => {
    let new_data: playerType = Object.assign({}, props.player); 
    new_data.color = color.hex;
    props.changePlayerData(new_data, props.player.uuid);
  };

  const handleChangeUsername = () => {
    let new_data: playerType = Object.assign({}, props.player); 
    new_data.username = username;
    props.changePlayerData(new_data, props.player.uuid);
  }

  return (
    <Grid item spacing={1}>
        <Card className={classes.Padding} onClick={() => props.addNotification('click on user','info')}>
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
                        <Grid item><IconButton size="small" onClick={()=>{setColorPickerOpen(true)}}><Person style={{color: props.player.color}}/></IconButton></Grid>
                        <Grid item>
                                <ClickAwayListener onClickAway={() => handleChangeUsername()}><InputBase className={classes.Name} onChange={(e) => setUsername(e.target.value)} defaultValue={props.player.username}/></ClickAwayListener>
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
                        <Grid item><Badge badgeContent={4} showZero className={classes.first} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={14} showZero className={classes.second} color="primary"><EmojiEvents /></Badge></Grid>
                        <Grid item><Badge badgeContent={0} showZero className={classes.third} color="primary"><EmojiEvents /></Badge></Grid>
                    </Grid>
                </Grid>
            </Grid>

            {colorPickerOpen && (
                <ClickAwayListener onClickAway={() => setColorPickerOpen(false)}>
                    <ChromePicker className={classes.ColorPicker} color={props.player.color} onChangeComplete={handleColorChangeComplete} disableAlpha={true}/>
                </ClickAwayListener>
            )}
        </Card>
    </Grid>
    
  );
}