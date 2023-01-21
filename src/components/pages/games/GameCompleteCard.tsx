import React from 'react';

import "./GameCompleteCard.scss"

import { gameType, playerType, resultType } from '../../../types/data'
import { Delete, Edit, NavigateBefore, PostAdd } from '@material-ui/icons'
import GameAddResult from './GameAddResult'
import { severityType } from '../../../types/notification'
import { calculatePresentPlayers, calculateRanking } from '../../../utils/lib'
import ResultCard from './ResultCard'
import DeleteGame from './DeleteGame'
import EditGame from './EditGame'
import LineChartResult from '../../lineChartResult/LineChartResult'
import Card from '../../card/Card';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';
import IconButton from '../../iconButton/IconButton';
// import BarChartResult from '../../barChartResult/BarChartResult';

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
    props.addNotification("Game correctly edited","success")
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
        <div className='game-complete-card-container'>
            <div className='game-complete-card'>
                <div className='game-complete-card-header'>
                    <div className='game-complete-card-general-stats'>
                        <div>{props.game.results.length} results</div>
                        <div>{props.game.players.length} players</div>
                        <div>algo: {props.game.algorithmSettings.algo}</div>
                    </div>
                    <div className='game-complete-card-general-gamename'>{props.game.gamename}</div>
                    <div className='game-complete-card-general-actions'>
                        <Button endIcon={<PostAdd/>}  onClick={() => handlerAddResult()} text='New result'/>
                        <Button onClick={() => setEditMode(true)} endIcon={<Edit/>}/>
                        <Button onClick={() => setDeleteGameOpen(true)} endIcon={<Delete/>} />
                    </div>
                </div>
                {props.game.players && 
                    <div className='game-complete-card-stats'><LineChartResult players={props.players} game={props.game}/></div>
                }
                {/* <Grid item>
                    <BarChartResult players={props.players} game={props.game}/>
                </Grid> */}
                {addResultOpen.open ? <GameAddResult game={props.game} players={props.players} addResultOpen={addResultOpen} setAddResultOpen={setAddResultOpen} addNotification={props.addNotification} addResult={addResult} deleteResult={deleteResult}></GameAddResult> : <></>}
                
            </div>
        </div>
        <div className='game-complete-card-results'>
            {displayResults()}
        </div>
    {deleteGameOpen && <DeleteGame setDeleteGameOpen={setDeleteGameOpen} deleteGame={deleteGame}></DeleteGame>}
    {editMode && <EditGame setEditMode={setEditMode} handleChangeGame={handleChangeGame} currentGame={props.game}></EditGame>}
    </>
  )
}
