import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Card,
  Button,
} from "@material-ui/core";
import GamesHeader from './GamesHeader';
import GameCard from './GameCard';

const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export default function Games(props){
    const classes = useStyles(); 
    
    const renderGameCards = games => {
        return (games.map((game) => <GameCard game={game} changeGameData={changeGameData}></GameCard>))
    };

    const changeGameData = (data, uuid) => {
        let new_data = Object.assign({}, props.data);
        new_data.games.map(el => (el.uuid === uuid ? Object.assign(el, data) : el))   
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
            <GamesHeader data={props.data} setData={props.setData}></GamesHeader>
            {renderGameCards(props.data.games)}
       </Grid>
    </Container>
  );
}