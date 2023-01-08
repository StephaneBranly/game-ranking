import "./Games.scss"

import React, { useState } from 'react';
import GamesAdd from './GamesAdd';
import GameCard from './GameCard';
import { gameType, playerType } from '../../../types/data';
import GameCompleteCard from './GameCompleteCard';
import { severityType } from '../../../types/notification';

export interface GamesProps{
    games: Array<gameType>,
    players: Array<playerType>
    setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>,
    addNotification: (arg0: string, arg1: severityType) => void,
}

export default function Games(props: GamesProps){
    const [currentGame, setCurrentGame] = useState({game: undefined, edit: false} as unknown as {game: gameType|undefined, edit: boolean});

    const renderGameCards = (games: Array<gameType>) => {
        return (games.map((game: gameType) => <GameCard game={game} changeGameData={changeGameData} setCurrentGame={setCurrentGame} players={props.players} active={currentGame.game===game} />))
    };

    const changeGameData = (game: gameType, uuid: string) => {
        let new_data: Array<gameType> = props.games
        new_data.map((el: gameType) => (el.uuid === uuid ? Object.assign(el, game) : el))   
        props.setGames(new_data);
    }

    const deleteGame = (uuid: string) => {
        let new_data: Array<gameType> = props.games.filter(item => item.uuid !== uuid);
        setCurrentGame({game: undefined, edit: false});
        props.setGames(new_data);
        props.addNotification("Game correctly deleted","success");
    }

    return (
        <div className="games-container">
            <div className='games'>
                <GamesAdd games={props.games} setGames={props.setGames} setCurrentGame={setCurrentGame} />
                {renderGameCards(props.games)}
            </div>
            {currentGame.game && <GameCompleteCard game={currentGame.game} edit={false} changeGameData={changeGameData} setCurrentGame={setCurrentGame} players={props.players} deleteGame={deleteGame} addNotification={props.addNotification}></GameCompleteCard>}
        </div>
    );
}
