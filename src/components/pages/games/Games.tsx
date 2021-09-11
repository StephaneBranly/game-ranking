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
import { dataType, gameType } from '../../../types/data';

const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export interface GamesProps{
    games: Array<gameType>,
    setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>
}

export default function Games(props: GamesProps){
    const classes = useStyles(); 
    
    const renderGameCards = (games: Array<gameType>) => {
        return (games.map((game: gameType) => <GameCard game={game} changeGameData={changeGameData}></GameCard>))
    };

    const changeGameData = (game: gameType, uuid: string) => {
        let new_data: Array<gameType> = props.games
        new_data.map((el: gameType) => (el.uuid === uuid ? Object.assign(el, game) : el))   
        props.setGames(new_data);
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
            <GamesHeader games={props.games} setGames={props.setGames}></GamesHeader>
            {renderGameCards(props.games)}
       </Grid>
    </Container>
  );
}