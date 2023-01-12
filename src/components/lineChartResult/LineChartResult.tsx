import "./LineChartResult.scss"
import { useState } from "react";
import { LineChart, XAxis, Legend, CartesianGrid, Tooltip, Line, ResponsiveContainer, YAxis, Brush } from "recharts";
import { gameType, historyEntryType, playerType, resultType, scoreType } from "../../types/data";
import { getPlayerLabel, getPlayerProfile, getResult, toChartScore } from "../../utils/lib";
import ScoreChip from "../scoreChip/ScoreChip";
import Avatar from "../avatar/Avatar";
import Tooltip1 from "../tooltip/Tooltip";  

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
        return <Line key={player.uuid} type="natural" strokeWidth={lineDesign.width[player.uuid]} strokeOpacity={lineDesign.opacity[player.uuid]} dataKey={player.uuid} stroke={getPlayerProfile(props.players,player.uuid).color} yAxisId={1} dot={false} />
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
      <div className="linechart-result-legend">
        {
          props.game.rankHistory[props.game.rankHistory.length-1].playersRank.sort((a, b) => a.score < b.score ? 1 : -1).map((player,index) => {
            const playerProfile = getPlayerProfile(props.players,player.playerUuid)
                  return <div key={index} onMouseEnter={() => handleMouseEnter(player.playerUuid)} onMouseLeave={() => handleMouseLeave()} className="linechart-result-legend-player">
                      {/* <Tooltip1 content={playerProfile.username} position="top"> */}
                    {/* <Badge
                      overlap="circle"
                      style={{borderColor: "rgba(0,0,0,0)"}}
                      anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                      badgeContent={<ScoreChip rank={index+1} score={player.score} deltaScore={false}/>}
                  > */}
                      <ScoreChip rank={index+1} score={player.score} deltaScore={false} />
                      <Avatar color={playerProfile.color} label={getPlayerLabel(playerProfile)} />
                  {/* </Tooltip1> */}
                  </div>
            })
        }
      </div>
    );
  }
  const generateLineScorePlayer = (historyEntry: historyEntryType, playerUuid: string, playing: boolean) => {
    const playerRank = historyEntry.playersRank.filter((player) => player.playerUuid === playerUuid)[0]
    const playerInfo = getPlayerProfile(props.players, playerUuid)
    if(playing)
    {
      const color = playerRank.deltaScore < 0 ? "#FF2020" : "#10FFB0" 
      const deltaScore = playerRank.deltaScore < 0 ? `${Math.round(playerRank.deltaScore)}` : `+${Math.round(playerRank.deltaScore)}`
      return <>
              <div className="linechart-tooltip-score player" style={{backgroundColor: playerInfo.color, color: "#FFFFFF"}}>{playerInfo.username}</div>
              <div className="linechart-tooltip-score score">{Math.round(playerRank.score)}</div> 
              <div className="linechart-tooltip-score delta-score" style={{color: color}}>({deltaScore})</div>
            </>
    }
    else
      return <>
              <div className="linechart-tooltip-score player" style={{borderColor: playerInfo.color, color: "#FFFFFF"}}>{playerInfo.username}</div>
              <div className="linechart-tooltip-score score">{Math.round(playerRank.score)}</div> 
              <div className="linechart-tooltip-score delta-score"></div>
            </>
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
        <div className="linechart-tooltip">
          <p>{label ? getResult(props.game.results,label).date.toLocaleString() : "Start"}</p>
          <div className="linechart-tooltip-scores">{renderPlayersScore(getResult(props.game.results, label), payload)}</div>
        </div>
      );
    }

    return null;
  };

  const brushStartIndex = props.game.rankHistory.length > 25 ? props.game.rankHistory.length - 25 : 0
  const brushEndIndex = props.game.rankHistory.length - 1
  
  return (
    props.game.rankHistory.length && props.game.players.length ? 
    <div style={{width:'100%'}}>
    <ResponsiveContainer width="100%" height={400}>
    <LineChart
      height={400}
      data={toChartScore(props.game.rankHistory)}
      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
      <XAxis dataKey="resultUuid" tick={false} axisLine={{ stroke: '#fefefe' }}/>
      <YAxis yAxisId={1} domain={['dataMin - 50', 'dataMax + 50']} tick={{ fill: "#fefefe" }} axisLine={{ stroke: '#fefefe' }}/>
      <Tooltip content={renderTooltip} />
      <Legend verticalAlign="top" content={renderLegend}/>
      {/* <CartesianGrid stroke="#fdfdfd" strokeDasharray="3 3"/> */}
      {generateLines(props.game.players).flat()}
      <Brush height={30} stroke="#091011" />
    </LineChart></ResponsiveContainer></div> : <></>
  );  
}
