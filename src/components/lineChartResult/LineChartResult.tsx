import {
    Grid,
    Chip,
    Avatar,
    Badge,
    Typography,
    Paper,
    Tooltip as Tooltip1
  } from "@material-ui/core";
import { useState } from "react";
import { LineChart, XAxis, Legend, CartesianGrid, Tooltip, Line, ResponsiveContainer, YAxis } from "recharts";
import { theme } from "../../App";
import { gameType, historyEntryType, playerType, resultType, scoreType } from "../../types/data";
import { getPlayerLabel, getPlayerProfile, getResult, toChartScore } from "../../utils/lib";
import ScoreChip from "../scoreChip/ScoreChip";
  
export interface LineChartResultProps {
  players: Array<playerType>,
  game: gameType,
}

export default function LineChartResult(props: LineChartResultProps){
  const stateLineDesign = (players: Array<scoreType>, uuid: string) => {
    let opacity: Record<string, number> = {}
    let width: Record<string, number> = {}
   
    players.forEach((player) => {
      if(uuid && player.uuid===uuid)
      {
        opacity[player.uuid] = 1
        width[player.uuid] = 4
      } else if(uuid) {
        opacity[player.uuid] = 0.7
        width[player.uuid] = 2
      } else {
        opacity[player.uuid] = 1
        width[player.uuid] = 2
      }
    })
    return { opacity: opacity, width: width }
  }
  const [lineDesign, setLineDesign] = useState(stateLineDesign(props.game.players, ""));

  const generateLines = (players: Array<scoreType>) => {
    return players.map((player) => {
        return <Line key={player.uuid} type="natural" strokeWidth={lineDesign.width[player.uuid]} strokeOpacity={lineDesign.opacity[player.uuid]} dataKey={player.uuid} stroke={getPlayerProfile(props.players,player.uuid).color} yAxisId={1}/>
      })
  }

  const handleMouseEnter = (uuid: string) => {
    setLineDesign(stateLineDesign(props.game.players, uuid))
  };

  const handleMouseLeave = () => {
    setLineDesign(stateLineDesign(props.game.players, ""));
  };


  const renderLegend = () => {
    return (
      <Grid container direction="row" justify="flex-start"  spacing={5} style={{paddingBottom: theme.spacing(2)}}>
        {
          props.game.rankHistory[props.game.rankHistory.length-1].playersRank.sort((a, b) => a.score < b.score ? 1 : -1).map((player,index) => {
            const playerProfile = getPlayerProfile(props.players,player.playerUuid)
                  return <Grid item key={index} onMouseEnter={() => handleMouseEnter(player.playerUuid)} onMouseLeave={() => handleMouseLeave()}><Tooltip1 title={playerProfile.username}><Badge
                      overlap="circle"
                      style={{borderColor: "rgba(0,0,0,0)"}}
                      anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                      badgeContent={<ScoreChip rank={index+1} score={player.score} deltaScore={false}/>}
                  >
                      <Avatar alt={playerProfile.username} style={{backgroundColor: playerProfile.color}}>{getPlayerLabel(playerProfile)}</Avatar>
                  </Badge></Tooltip1></Grid>
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
      return <Grid key={playerInfo.uuid} container item direction="row" justify="space-between" alignContent="center" alignItems="baseline">
              <Grid item xs={5}><Chip label={playerInfo.username} style={{backgroundColor: playerInfo.color, color: "#FFFFFF"}} /></Grid>
              <Grid item xs={3}>{Math.round(playerRank.score)}</Grid> 
              <Grid item xs={1} style={{color: color}}>({deltaScore})</Grid>
            </Grid>
    }
    else
      return <Grid key={playerInfo.uuid} container item direction="row" justify="space-between" alignContent="center" alignItems="baseline">
              <Grid item xs={5}><Chip label={playerInfo.username} variant="outlined" style={{borderColor: playerInfo.color}} /></Grid>
              <Grid item xs={3}>{Math.round(playerRank.score)}</Grid> 
              <Grid item xs={1}></Grid>
            </Grid>
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
        <Paper variant="outlined" style={{ paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2),paddingLeft: theme.spacing(2),paddingRight: theme.spacing(4)}}>
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
      <XAxis dataKey="resultUuid" tick={false} />
      <YAxis yAxisId={1} domain={['dataMin - 50', 'dataMax + 50']}/>
      <Tooltip content={renderTooltip} />
      <Legend verticalAlign="top" content={renderLegend}/>
      <CartesianGrid stroke="#d5d5d5" strokeDasharray="3 3"/>
      {generateLines(props.game.players).flat()}
    </LineChart></ResponsiveContainer></div> : <></>
  );  
}
