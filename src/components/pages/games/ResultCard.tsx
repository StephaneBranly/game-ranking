import React from 'react';

import "./ResultCard.scss"

import { playerRankHistory, playerType, resultType } from '../../../types/data';
import { getPlayerLabel, getPlayerProfile } from '../../../utils/lib';
import ScoreChip from '../../scoreChip/ScoreChip';
import Card from '../../card/Card';
import Tooltip from '../../tooltip/Tooltip';
import Avatar from '../../avatar/Avatar';

export interface ResultCardProps{
    result: resultType,
    players: Array<playerType>,
    setAddResultOpen: React.Dispatch<React.SetStateAction<{id: string|undefined, open: boolean}>>,
    playersRank: Array<playerRankHistory>
}

const ResultCard = (props: ResultCardProps) => {
  const displayPlayersBadges = () => {
    return (props.result.ranks.map((rank) => 
    {
        const playerRank = props.playersRank.filter(player => player.playerUuid === rank.uuid)[0] 
        const title = `${getPlayerProfile(props.players, rank.uuid).username} - New score: ${Math.round(playerRank.score)}`

        return <div className='result-card-player'>
            {/* <Tooltip content={title}> */}
            {/* <Badge
                overlap="circle"
                style={{borderColor: "rgba(0,0,0,0)"}}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                badgeContent={<ScoreChip rank={rank.rank} score={playerRank.deltaScore} deltaScore={true}/>}
            > */}
              <ScoreChip rank={rank.rank} score={playerRank.deltaScore} deltaScore={true}/>
              <Avatar label={getPlayerLabel(getPlayerProfile(props.players,rank.uuid))} color={getPlayerProfile(props.players,rank.uuid).color}/>
              {/* </Badge> */}
            {/* </Tooltip> */}
            <div className='result-card-rank'>#{rank.rank}</div>

        </div>
    }
    ));
  }

  return (
    <div className='result-card' onClick={()=>props.setAddResultOpen({id: props.result.uuid, open:true})}>
        <div className='result-card-players'>{displayPlayersBadges()}</div>
        <p>{props.result.date.toLocaleString()}</p>
    </div>
  );
}

export default ResultCard