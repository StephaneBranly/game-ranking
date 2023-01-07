import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import { playerType, gameType } from '../../types/data';

export interface BarChartResultProps {
  players: Array<playerType>,
  game: gameType,
}

export default function BarChartResult(props: BarChartResultProps) {

  const dataMapping = () => {
    const lastGame = props.game.rankHistory[props.game.rankHistory.length-1]
    const deltaCol = 100
    let scoreMin = lastGame.playersRank.reduce((prev, current) => current.score < prev.score ? current : prev).score
    let scoreMax = lastGame.playersRank.reduce((prev, current) => current.score > prev.score ? current : prev).score
    scoreMin = scoreMin - scoreMin % deltaCol
    scoreMax = scoreMax + scoreMax % deltaCol
    const data = []
    for (let col = scoreMin; col < scoreMax; col += deltaCol)
    {
      const nbPlayersInCol = lastGame.playersRank.filter((rank) => rank.score >= col && rank.score < col + deltaCol ).length
      data.push({ amt: nbPlayersInCol, name: `[${col} - ${col+deltaCol}[`, rank: col})
    }
    return data
  }

    return (
      <div style={{width:'100%', height:'400px'}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataMapping()} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="amt" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}
