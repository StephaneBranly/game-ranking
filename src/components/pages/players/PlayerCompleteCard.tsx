import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  IconButton,
  Button,
  ButtonGroup,
  Typography,
//   Tooltip,
} from "@material-ui/core";
import { playerType } from '../../../types/data';
import { Edit, NavigateBefore } from '@material-ui/icons';
import { severityType } from '../../../types/notification';
import EditPlayer from './EditPlayer'

const useStyles = makeStyles((theme) =>
createStyles({  
    Main: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1)
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
export interface PlayerCompleteCardProps{
    player: playerType,
    changePlayerData: (player: playerType, uuid: string) => void,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<playerType|undefined>>,
    addNotification: (arg0: string, arg1: severityType) => void,
}

export default function PlayerCompleteCard(props: PlayerCompleteCardProps){
  const classes = useStyles(); 

  const [editMode, setEditMode] = React.useState(false);
 
  const handleChangePlayer = (player: playerType) => {
    props.changePlayerData(player, player.uuid)
  }

  return (
    <>
    <Card className={classes.Main}>
        <Grid 
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
            spacing={1}
        >
        <Grid item><Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
        >
            <Grid item>
                <Grid item><IconButton size="medium" onClick={() => props.setCurrentPlayer(undefined)}><NavigateBefore/></IconButton></Grid>
            </Grid>
            <Grid item>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={() => setEditMode(true)}><Edit/></Button>
                </ButtonGroup>
            </Grid>
        </Grid></Grid>
        <Grid item>
            <Typography style={{color: props.player.color}} variant="h3" align="center">
                {props.player.username}
            </Typography>
        </Grid>
       
        </Grid>
    </Card>
    {editMode && <EditPlayer setEditMode={setEditMode} handleChangePlayer={handleChangePlayer} player={props.player}></EditPlayer>}
    </>
  );
}