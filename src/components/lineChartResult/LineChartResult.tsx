

import {
    makeStyles,
    createStyles,
    Grid,
    Chip,
    Avatar,
    Badge,
    Typography,
    Paper,
  } from "@material-ui/core";
import React, { Component } from "react";
import { LineChart, XAxis, Legend, CartesianGrid, Tooltip, Line, ResponsiveContainer } from "recharts";
import { theme } from "../../App";
import { gameType, historyEntryType, playerType, resultType, scoreType } from "../../types/data";
import { getPlayerLabel, getPlayerProfile, getResult, toChartScore } from "../../utils/lib";
import ScoreChip from "../scoreChip/ScoreChip";
  
  
const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  }
}),
);
  
export interface LineChartResultProps {
  players: Array<playerType>,
  game: gameType,
}



export default function LineChartResult(props: LineChartResultProps){
  const classes = useStyles(); 
  
  // console.log(props.players)
  const generateLines = (players: Array<scoreType>) => {
    return players.map((player) => {
        return <Line type="monotone" strokeWidth={2} dataKey={player.uuid} stroke={getPlayerProfile(props.players,player.uuid).color} yAxisId={1} />
      })
  }

  const renderLegend = () => {
    return (
      <Grid container direction="row" justify="flex-start"  spacing={5} style={{paddingBottom: theme.spacing(2)}}>
        {
          props.game.rankHistory[props.game.rankHistory.length-1].playersRank.sort((a, b) => a.score < b.score ? 1 : -1).map((player,index) => {
              // <Tooltip title={Math.round(player.score)}>
                  return <Grid item><Badge
                      overlap="circle"
                      style={{borderColor: "rgba(0,0,0,0)"}}
                      anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                      badgeContent={<ScoreChip rank={index+1} score={player.score} deltaScore={false}/>}
                  >
                      <Avatar alt={getPlayerProfile(props.players,player.playerUuid).username} style={{backgroundColor: getPlayerProfile(props.players,player.playerUuid).color}}>{getPlayerLabel(getPlayerProfile(props.players,player.playerUuid))}</Avatar>
                  </Badge></Grid>
            })
        }
      </Grid>
    );
  }
  const generateLineScorePlayer = (historyEntry: historyEntryType, playerUuid: string, playing: boolean) => {
    const playerRank = historyEntry.playersRank.filter((player) => player.playerUuid === playerUuid)[0]
    const playerInfo = getPlayerProfile(props.players, playerUuid)
    if(playing)
    {
      const color = playerRank.deltaScore < 0 ? "#FF2020" : "#10FFB0" 
      const deltaScore = playerRank.deltaScore < 0 ? `${Math.round(playerRank.deltaScore)}` : `+${Math.round(playerRank.deltaScore)}`
      return <Grid item><Grid container direction="row" justify="space-between" alignContent="center" alignItems="baseline">
              <Grid item><Chip label={playerInfo.username} style={{backgroundColor: playerInfo.color}} /></Grid>
              <Grid>{Math.round(playerRank.score)}</Grid> 
              <Grid style={{color: color}}>({deltaScore})</Grid>
            </Grid></Grid>
    }
    else
      return <Grid item><Grid container direction="row" justify="space-between">
              <Grid item><Chip label={playerInfo.username} variant="outlined" style={{borderColor: playerInfo.color}} /></Grid>
              <Grid>{Math.round(playerRank.score)}</Grid> 
              <Grid></Grid>
            </Grid></Grid>
  }

  const renderPlayersScore = (result: resultType, data: any) => {
    const historyEntry = props.game.rankHistory.filter((entry) => entry.resultUuid === result.uuid)[0] as historyEntryType

    const uuidPresentPlayers: Array<string> = []
    const uuidOtherPlayers: Array<string> = []
    result.ranks.forEach(rank => uuidPresentPlayers.push(rank.uuid))
    props.game.players.filter((player) => uuidPresentPlayers.indexOf(player.uuid) <= -1).forEach((player) => uuidOtherPlayers.push(player.uuid))
    const componentPresentPlayers = uuidPresentPlayers.map((player) => 
    {
      return generateLineScorePlayer(historyEntry, player, true)
    })
    const componentOtherPlayers = uuidOtherPlayers.map((player) => 
    {
      return generateLineScorePlayer(historyEntry, player, false)
    })
   
    return [componentPresentPlayers,componentOtherPlayers]
  }

  const renderTooltip = (propsTooltip: any) => {
    const { active, payload, label} = propsTooltip
    if (active && payload && payload.length && label) {
      return (
        <Paper variant="outlined" style={{padding: theme.spacing(1)}}>
          <Typography>{label ? getResult(props.game.results,label).date.toLocaleString() : "Start"}</Typography>
          <Grid container direction="column" spacing={1}>{renderPlayersScore(getResult(props.game.results, label), payload)}</Grid>
        </Paper>
      );
    }

    return null;
};
  
  return (
    props.game.rankHistory.length && props.game.players.length ? 
    <div style={{width:'100%'}}>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart
      height={400}
      data={toChartScore(props.game.rankHistory)}
      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
      <XAxis dataKey="resultUuid" />
      <Tooltip content={renderTooltip} />
      <Legend verticalAlign="top" content={renderLegend}/>
      <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3"/>
      {generateLines(props.game.players).flat()}
    </LineChart></ResponsiveContainer></div> : <></>
  );  
}
