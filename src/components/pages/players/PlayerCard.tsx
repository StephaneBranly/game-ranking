import React from 'react';

import './PlayerCard.scss';

import { gameType, playerType } from '../../../types/data';
import { calculateNbPosition, getPlayerLabel } from '../../../utils/lib';
import Avatar from '../../avatar/Avatar';


export interface PlayerCardProps{
    player: playerType,
    games: Array<gameType>,
    changePlayerData: (arg0: playerType, arg1: string) => void,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<{player:playerType | undefined, edit: boolean}>>,
    isSelected: boolean
}

export default function PlayerCard(props: PlayerCardProps){
    return (
        <div className={`player-card ${props.isSelected ? 'selected' : ''}`} onClick={() => props.setCurrentPlayer({player:props.player, edit:false})}>
            <Avatar color={props.player.color} label={getPlayerLabel(props.player)} />
            {/* <div className='player-card-content'>
                <div className='player-card-content-username'>{props.player.username}</div>
            </div> */}
        </div>
    )
//   return (
//     <Grid item spacing={1} onClick={() => props.setCurrentPlayer({player:props.player, edit:false})}>
//         <Card className={classes.Padding}>
//             <Grid
//                 container
//                 direction="row"
//                 justify="space-between"
//                 alignItems="baseline"
//             >
//                 <Grid item>
//                     <Grid
//                         container
//                         direction="row"
//                         justify="space-between"
//                         alignItems="baseline"
//                         spacing={1}
//                     >
//                         <Grid item><IconButton size="small"><Person style={{color: props.player.color}}/></IconButton></Grid>
//                         <Grid item>
//                             <Typography>{props.player.username}</Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <Grid item>
//                     <Grid
//                         container 
//                         item
//                         direction="row"
//                         justify="space-between"
//                         alignItems="baseline"
//                         spacing={1}
//                     >
//                         <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,1)} showZero className={classes.first} color="primary"><EmojiEvents /></Badge></Grid>
//                         <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,2)} showZero className={classes.second} color="primary"><EmojiEvents /></Badge></Grid>
//                         <Grid item><Badge badgeContent={calculateNbPosition(props.games,props.player.uuid,3)} showZero className={classes.third} color="primary"><EmojiEvents /></Badge></Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Card>
//     </Grid>
//   );
}