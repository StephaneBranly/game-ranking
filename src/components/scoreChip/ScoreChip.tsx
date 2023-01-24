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
        if (props.deltaScore) return <></>
        if(rank===1) 
            return <EmojiEvents className='first' fontSize='small' />
        else if(rank===2)
            return <EmojiEvents className='second' fontSize='small'/>
        else if(rank===3)
        return <EmojiEvents className='third' fontSize='small' />
        return <></>
    }

    let text: string = `${Math.round(props.score)}`, deltaClass: string = ""
    if(props.deltaScore){
        text = props.score < 0 ? `${Math.round(props.score)}` : `+${Math.round(props.score)}`
        deltaClass = props.score < 0 ? "delta-negative" : "delta-positive"
    }
    return <div className={`score-chip ${deltaClass}`}>{getRankBadge(props.rank)}{text}</div>
}
