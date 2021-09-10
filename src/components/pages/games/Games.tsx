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

export default function Games(props: any){
    const classes = useStyles(); 
    
    const renderGameCards = (games: any[]) => {
        return (games.map((game: any) => <GameCard game={game} changeGameData={changeGameData}></GameCard>))
    };

    const changeGameData = (data: any, uuid: any) => {
        let new_data = Object.assign({}, props.data);
        new_data.games.map((el: { uuid: any; }) => (el.uuid === uuid ? Object.assign(el, data) : el))   
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