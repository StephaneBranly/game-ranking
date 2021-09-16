import React, { useState } from 'react';
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
import { gameType, playerType } from '../../../types/data';
import GameCompleteCard from './GameCompleteCard';
import { severityType } from '../../../types/notification';

const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export interface GamesProps{
    games: Array<gameType>,
    players: Array<playerType>
    setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>,
    addNotification: (arg0: string, arg1: severityType) => void,
}

export default function Games(props: GamesProps){
    const classes = useStyles(); 
    
    const [currentGame, setCurrentGame] = useState(undefined as unknown as gameType|undefined);

    const renderGameCards = (games: Array<gameType>) => {
        return (games.map((game: gameType) => <GameCard game={game} changeGameData={changeGameData} setCurrentGame={setCurrentGame}></GameCard>))
    };

    const changeGameData = (game: gameType, uuid: string) => {
        let new_data: Array<gameType> = props.games
        new_data.map((el: gameType) => (el.uuid === uuid ? Object.assign(el, game) : el))   
        props.setGames(new_data);
    }

    return (
    <Container>
        { currentGame?
            <GameCompleteCard game={currentGame} changeGameData={changeGameData} setCurrentGame={setCurrentGame} players={props.players} addNotification={props.addNotification}></GameCompleteCard>
            :
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
        }
    </Container>
  );
}