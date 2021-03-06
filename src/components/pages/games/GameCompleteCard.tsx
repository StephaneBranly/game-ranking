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
} from "@material-ui/core"
import { gameType, playerType, resultType } from '../../../types/data'
import { Delete, Edit, NavigateBefore, PostAdd } from '@material-ui/icons'
import GameAddResult from './GameAddResult'
import { severityType } from '../../../types/notification'
import { calculatePresentPlayers, calculateRanking } from '../../../utils/lib'
import ResultCard from './ResultCard'
import DeleteGame from './DeleteGame'
import EditGame from './EditGame'
import LineChartResult from '../../lineChartResult/LineChartResult'
import BarChartResult from '../../barChartResult/BarChartResult';

const useStyles = makeStyles((theme) =>
createStyles({  
    Main: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
        overflow: 'visible',
        zIndex: 150
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
)
export interface GameCompleteCardProps{
    game: gameType,
    players: Array<playerType>,
    changeGameData: (game: gameType, uuid: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<{game: gameType|undefined, edit: boolean}>>,
    addNotification: (arg0: string, arg1: severityType) => void,
    deleteGame: (uuid: string) => void,
    edit: boolean
}

export default function GameCompleteCard(props: GameCompleteCardProps){
  const classes = useStyles()

  const [addResultOpen, setAddResultOpen] = React.useState({id: undefined as string|undefined, open:false})
  const [editMode, setEditMode] = React.useState(props.edit)
  const [deleteGameOpen, setDeleteGameOpen] = React.useState(false)

  const handleChangeGame = (newGame: gameType) => {
    let newData: gameType = Object.assign({}, newGame)
    newData.rankHistory = calculateRanking(newData)

    if(newData.players)
    {
        const sortedRanks = newData.players.sort((a, b) => a.rank > b.rank ? 1 : -1)
        newData.players = sortedRanks
    }

    props.changeGameData(newData, props.game.uuid)
  }

  const deleteGame = () => {
    props.addNotification("Game correctly deleted","success")
    setDeleteGameOpen(false)
    props.deleteGame(props.game.uuid)
  }

  const deleteResult = (id: string) => {
    let newData: gameType = Object.assign({}, props.game)
    newData.results = newData.results.filter(result => result.uuid !== id)
    newData.players = calculatePresentPlayers(newData)
    newData.rankHistory = calculateRanking(newData)

    props.addNotification("Result correctly deleted","success")

    props.changeGameData(newData, props.game.uuid)
  }

  const addResult = (newResult: resultType, id: string|undefined) => {
    let newData: gameType = Object.assign({}, props.game)
    if(!newData.results)
        newData.results = []
    else if(id)
        newData.results = newData.results.filter(item => item.uuid !== id)
    newData.results.push(newResult)
    newData.players = calculatePresentPlayers(newData)
    newData.rankHistory = calculateRanking(newData)

    if(newData.players)
    {
        const sortedRanks = newData.players.sort((a, b) => a.rank > b.rank ? 1 : -1)
        newData.players = sortedRanks
    }

    props.changeGameData(newData, props.game.uuid)
  }

  const displayResults = () => {
    if (props.game.results){
        return props.game.results.sort((a,b) => a.date < b.date ? 1 : -1).map(result => {
            const playersRank = props.game.rankHistory.filter((entry) => entry.resultUuid === result.uuid)[0].playersRank
            return <ResultCard result={result} players={props.players} setAddResultOpen={setAddResultOpen} playersRank={playersRank}></ResultCard>}
        );
    }
  }

  const handlerAddResult = () => {
    if(props.players.length<2)
        props.addNotification("You must add at least 2 players before", "error")
    else
        setAddResultOpen({id: undefined, open:true})
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
                <Grid item><IconButton size="medium" onClick={() => props.setCurrentGame({game: undefined, edit: false})}><NavigateBefore/></IconButton></Grid>
            </Grid>
            <Grid item>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button endIcon={<PostAdd/>}  onClick={() => handlerAddResult()}>New result</Button>
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
            <LineChartResult players={props.players} game={props.game}/>
        </Grid>}
        {/* <Grid item>
            <BarChartResult players={props.players} game={props.game}/>
        </Grid> */}
        </Grid>
        {addResultOpen.open ? <GameAddResult game={props.game} players={props.players} addResultOpen={addResultOpen} setAddResultOpen={setAddResultOpen} addNotification={props.addNotification} addResult={addResult} deleteResult={deleteResult}></GameAddResult> : <></>}
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
    {editMode && <EditGame setEditMode={setEditMode} handleChangeGame={handleChangeGame} currentGame={props.game}></EditGame>}
    </>
  )
}
