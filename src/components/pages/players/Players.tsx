import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,

} from "@material-ui/core";
import PlayersHeader from './PlayersHeader'
import PlayerCard from './PlayerCard'
import { dataType, playerType } from '../../../types/data';

const useStyles = makeStyles((theme) =>
createStyles({  

}),
);

export interface PlayersProps{
  data: dataType,
  setData: React.Dispatch<React.SetStateAction<dataType>>
}

export default function Players(props: PlayersProps){
    const classes = useStyles(); 
  
    const renderPlayerCards = (players: Array<playerType>) => {
        return (players.map((player: playerType) => <PlayerCard player={player} changePlayerData={changePlayerData}></PlayerCard>))
    };

    const changePlayerData = (data: playerType, uuid: string) => {
      let new_data: dataType = Object.assign({}, props.data);
      new_data.players.map((el: playerType) => (el.uuid === uuid ? Object.assign(el, data) : el))   
      props.setData(new_data);
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
            <PlayersHeader data={props.data} setData={props.setData}></PlayersHeader>
            {renderPlayerCards(props.data.players)}
       </Grid>
    </Container>
  );
}