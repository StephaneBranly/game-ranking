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
    data: dataType,
    setData: React.Dispatch<React.SetStateAction<dataType>>
}

export default function Games(props: GamesProps){
    const classes = useStyles(); 
    
    const renderGameCards = (games: Array<gameType>) => {
        return (games.map((game: gameType) => <GameCard game={game} changeGameData={changeGameData}></GameCard>))
    };

    const changeGameData = (data: gameType, uuid: string) => {
        let new_data: dataType = Object.assign({}, props.data) ;
        new_data.games.map((el: gameType) => (el.uuid === uuid ? Object.assign(el, data) : el))   
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