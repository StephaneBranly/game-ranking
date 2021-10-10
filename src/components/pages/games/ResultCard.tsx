import React from 'react';
import {
  makeStyles,
  createStyles,
  Card,
  Grid,
  Typography,
  Avatar,
  Badge,
  Tooltip,
} from "@material-ui/core";
import { playerRankHistory, playerType, resultType } from '../../../types/data';
import { getPlayerLabel, getPlayerProfile } from '../../../utils/lib';
import ScoreChip from '../../scoreChip/ScoreChip';

const useStyles = makeStyles((theme) =>
createStyles({  
    Padding: {
        padding: theme.spacing(2),
    },
    first: {
        color: "#FFD700",
    },
    second: {
        color: "#C0C0C0",

    },
    third: {
        color: "#cd7f32",
    },
    ColorPicker: {
        position: "absolute",
        zIndex: 2
    },
}),
);

export interface ResultCardProps{
    result: resultType,
    players: Array<playerType>,
    setAddResultOpen: React.Dispatch<React.SetStateAction<{id: string|undefined, open: boolean}>>,
    playersRank: Array<playerRankHistory>
}

export default function ResultCard(props: ResultCardProps){
  const classes = useStyles(); 

  
  const displayPlayersBadges = () => {
    return (props.result.ranks.map((rank) => 
    {
        const playerRank = props.playersRank.filter(player => player.playerUuid === rank.uuid)[0] 
        const title = `${getPlayerProfile(props.players, rank.uuid).username} - New score: ${Math.round(playerRank.score)}`

        return <Grid item>
            <Tooltip title={title}>
            <Badge
            overlap="circle"
            style={{borderColor: "rgba(0,0,0,0)"}}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            badgeContent={<ScoreChip rank={rank.rank} score={playerRank.deltaScore} deltaScore={true}/>}
            >
            
            <Avatar alt={getPlayerProfile(props.players,rank.uuid).username} style={{backgroundColor: getPlayerProfile(props.players,rank.uuid).color}}>{getPlayerLabel(getPlayerProfile(props.players,rank.uuid))}</Avatar>
            </Badge>
            </Tooltip>
        </Grid>
    }
    ));
  }

  return (
    <Grid item>
        <Card className={classes.Padding} onClick={()=>props.setAddResultOpen({id: props.result.uuid, open:true})}>
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
                spacing={1}
            >
            <Grid item>
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="stretch"
                    spacing={4}
                >
                    {displayPlayersBadges()}
                </Grid>
            </Grid>
            <Grid item>
                <Typography>{props.result.date.toLocaleString()}</Typography>
            </Grid>
            </Grid>
        </Card>
    </Grid>
  );
}