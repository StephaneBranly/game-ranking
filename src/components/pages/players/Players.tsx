import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,

} from "@material-ui/core";
import PlayersHeader from './PlayersHeader'
import PlayerCard from './PlayerCard'

const useStyles = makeStyles((theme) =>
createStyles({  

}),
);

export default function Players(props: any){
    const classes = useStyles(); 
  
    const renderPlayerCards = (players: any[]) => {
        return (players.map((player: any) => <PlayerCard player={player} changeUserData={changeUserData}></PlayerCard>))
    };

    const changeUserData = (data: any, uuid: string) => {
      let new_data = Object.assign({}, props.data);
      new_data.players.map((el: { uuid: string; }) => (el.uuid === uuid ? Object.assign(el, data) : el))   
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