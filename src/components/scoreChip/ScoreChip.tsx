import React from 'react';
import { EmojiEvents } from '@material-ui/icons';

import './ScoreChip.scss';

export interface ScoreChipProps{
  rank: number
  score: number
  deltaScore: boolean
}

export default function ScoreChip(props: ScoreChipProps){
    const getRankBadge = (rank: number) => 
    {
        if(rank===1) 
            return <EmojiEvents className='first' fontSize='small' />
        else if(rank===2)
            return <EmojiEvents className='second' fontSize='small'/>
        else if(rank===3)
        return <EmojiEvents className='third' fontSize='small' />
        return <></>
    }

    let text: string = `${Math.round(props.score)}`, color: string = "#FDFDFD"
    if(props.deltaScore){
        text = props.score < 0 ? `${Math.round(props.score)}` : `+${Math.round(props.score)}`
        color= props.score < 0 ? "#FF2020" : "#10FFB0"
    }
    return <div className={`score-chip ${color}`}>{getRankBadge(props.rank)}{text}</div>
}
