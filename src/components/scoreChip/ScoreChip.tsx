import React from 'react';
import { Chip, createStyles, makeStyles } from "@material-ui/core";
import { EmojiEvents } from '@material-ui/icons';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        backgroundColor: "rgba(0,0,0,0.9)",
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
        border: "2px solid #FFFFFF",
        zIndex: 0
    },
    first: {
        color: "#FFD700",
    },
    second: {
        color: "#C0C0C0",
    },
    third: {
        color: "#cd7f32",
    }
}),
);
export interface ScoreChipProps{
  rank: number
  score: number
  deltaScore: boolean
}

export default function ScoreChip(props: ScoreChipProps){
    const classes = useStyles(); 

    const getRankBadge = (rank: number) => 
    {
        if(rank===1) 
            return <EmojiEvents className={classes.first}/>
        else if(rank===2)
            return <EmojiEvents className={classes.second}/>
        else if(rank===3)
        return <EmojiEvents className={classes.third}/>
        return <></>
    }

    let text: string = `${Math.round(props.score)}`, color: string = "#FDFDFD"
    if(props.deltaScore){
        text = props.score < 0 ? `${Math.round(props.score)}` : `+${Math.round(props.score)}`
        color= props.score < 0 ? "#FF2020" : "#10FFB0"
    }
    return <Chip className={classes.root} icon={getRankBadge(props.rank)} label={text} size="small" variant="outlined" style={{color: color}}/>
}
