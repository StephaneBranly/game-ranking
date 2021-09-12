import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,

} from "@material-ui/core";
import PlayersHeader from './PlayersHeader'
import PlayerCard from './PlayerCard'
import { playerType } from '../../../types/data';
import { severityType } from '../../../types/notification';

const useStyles = makeStyles((theme) =>
createStyles({  

}),
);

export interface PlayersProps{
  players: Array<playerType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>,
  addNotification: (arg0: string, arg1: severityType) => void,
}

export default function Players(props: PlayersProps){
    const classes = useStyles(); 
  
    const renderPlayerCards = (players: Array<playerType>) => {
        return (players.map((player: playerType) => <PlayerCard player={player} changePlayerData={changePlayerData} addNotification={props.addNotification}></PlayerCard>))
    };

    const changePlayerData = (player: playerType, uuid: string) => {
      let new_data: Array<playerType> = props.players;
      new_data.map((el: playerType) => (el.uuid === uuid ? Object.assign(el, player) : el))   
      props.setPlayers(new_data);
    }

  return (
    <Container>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
            <PlayersHeader players={props.players} setPlayers={props.setPlayers}></PlayersHeader>
            {renderPlayerCards(props.players)}
       </Grid>
    </Container>
  );
}