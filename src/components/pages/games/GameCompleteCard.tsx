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
  Avatar,
  Badge,
} from "@material-ui/core";
import { gameType, playerType, resultType } from '../../../types/data';
import { Delete, Edit, EmojiEvents, NavigateBefore, PostAdd } from '@material-ui/icons';
import { AvatarGroup } from '@material-ui/lab';
import GameAddResult from './GameAddResult';
import { severityType } from '../../../types/notification';
import { calculateRanking, getPlayerLabel, getPlayerProfile } from '../../../utils/lib';
import ResultCard from './ResultCard';
import DeleteGame from './DeleteGame';
import EditGame from './EditGame';

const useStyles = makeStyles((theme) =>
createStyles({  
    Main: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1)
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
    players: Array<playerType>,
    changeGameData: (game: gameType, uuid: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<gameType|undefined>>,
    addNotification: (arg0: string, arg1: severityType) => void,
    deleteGame: (uuid: string) => void
}

export default function GameCompleteCard(props: GameCompleteCardProps){
  const classes = useStyles(); 

  const [addResultOpen, setAddResultOpen] = React.useState({id: undefined as string|undefined, open:false});
  const [editMode, setEditMode] = React.useState(false);
  const [deleteGameOpen, setDeleteGameOpen] = React.useState(false);

  const handleChangeGamename = (newGamename: string) => {
    let new_data: gameType = Object.assign({}, props.game); 
    new_data.gamename = newGamename;
    props.changeGameData(new_data, props.game.uuid);
  }

  const deleteGame = () => {
    props.addNotification("Game correctly deleted","success");
    setDeleteGameOpen(false);
    props.deleteGame(props.game.uuid);
  }


  const addResult = (newResult: resultType, id: string|undefined) => {
    let new_data: gameType = Object.assign({}, props.game);
    if(!new_data.results)
        new_data.results = [];
    else if(id)
        new_data.results = new_data.results.filter(item => item.uuid !== id);
    new_data.results.push(newResult);
    newResult.ranks.forEach(rank => {
        if(new_data.players)
        {
            if(!new_data.players.some(player => player.uuid === rank.uuid))
                new_data.players?.push({uuid:rank.uuid,rank:0});
        }
        else
            new_data.players=[{uuid:rank.uuid,rank:0}];
    });
    
    new_data.rankHistory = calculateRanking(new_data);

    if(new_data.players)
    {
        const sortedRanks = new_data.players.sort((a, b) => a.rank > b.rank ? 1 : -1)
        new_data.players = sortedRanks;
    }

    props.changeGameData(new_data, props.game.uuid);
  }

  const displayPlayersBadges = () => {
    if(props.game.players)
    return (props.game.players.map((player) => 
    <Badge
        overlap="circle"
        style={{borderColor: "rgba(0,0,0,0)"}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<EmojiEvents className={classes.first}/>}
      >
        <Avatar alt={getPlayerProfile(props.players,player.uuid).username} style={{backgroundColor: getPlayerProfile(props.players,player.uuid).color}}>{getPlayerLabel(getPlayerProfile(props.players,player.uuid))}</Avatar>
    </Badge>
    ));
    return <></>
  }

  const displayResults = () => {
    if (props.game.results){
        return props.game.results.map(result => <ResultCard result={result} players={props.players} setAddResultOpen={setAddResultOpen}></ResultCard>);
    }
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
                <Grid item><IconButton size="medium" onClick={() => props.setCurrentGame(undefined)}><NavigateBefore/></IconButton></Grid>
            </Grid>
            <Grid item>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button endIcon={<PostAdd/>}  onClick={() => setAddResultOpen({id: undefined, open:true})}>New result</Button>
                    <Button onClick={() => setEditMode(true)}><Edit/></Button>
                    <Button onClick={() => setDeleteGameOpen(true)}><Delete/></Button>
                </ButtonGroup>
            </Grid>
        </Grid></Grid>
        <Grid item>
            <Typography color="primary" variant="h3" align="center">
                {props.game.gamename}
            </Typography>
        </Grid>
        {props.game.players && 
        <Grid item>
            <Typography>Players:</Typography>
            <AvatarGroup max={15}>
                {displayPlayersBadges()}
            </AvatarGroup>
        </Grid>}
        </Grid>
        {addResultOpen.open ? <GameAddResult game={props.game} players={props.players} addResultOpen={addResultOpen} setAddResultOpen={setAddResultOpen} addNotification={props.addNotification} addResult={addResult}></GameAddResult> : <></>}
    </Card>
    <Grid 
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        spacing={1}
    >
        {displayResults()}
    </Grid>
    {deleteGameOpen && <DeleteGame setDeleteGameOpen={setDeleteGameOpen} deleteGame={deleteGame}></DeleteGame>}
    {editMode && <EditGame setEditMode={setEditMode} handleChangeGamename={handleChangeGamename} currentGamename={props.game.gamename}></EditGame>}
    </>
  );
}
