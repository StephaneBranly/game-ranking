import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,

} from "@material-ui/core";
import SummaryPlayers from './SummaryPlayers'
import PlayerCard from './PlayerCard'

const useStyles = makeStyles((theme) =>
createStyles({  

}),
);

export default function Players(props){
    const classes = useStyles(); 
  
    const renderPlayerCards = players => {
        return (players.map((player) => <PlayerCard player={player}></PlayerCard>))
    };

  return (
    <Container>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
            <SummaryPlayers data={props.data} setData={props.setData}></SummaryPlayers>
            {renderPlayerCards(props.data.players.list)}
       </Grid>
    </Container>
  );
}