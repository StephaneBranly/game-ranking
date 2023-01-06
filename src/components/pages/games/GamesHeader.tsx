import React from 'react';

import Games from '@material-ui/icons/Games';
import { uuid } from 'uuidv4';
import { gameType } from '../../../types/data';
import Card from '../../card/Card';
import Button from '../../button/Button';

import './GamesHeader.scss'

export interface GamesHeaderProps{
  games: Array<gameType>,
  setGames: React.Dispatch<React.SetStateAction<Array<gameType>>>,
  setCurrentGame: React.Dispatch<React.SetStateAction<{game: gameType|undefined, edit: boolean}>>

}

export default function GamesHeader(props: GamesHeaderProps){
  const addGame = () => {
    let newGame: gameType = 
    {   
      uuid: uuid(),
      gamename: "New game",
      results: [],
      players: [],
      rankHistory: [],
      algorithmSettings: {
        algo: 'elo',
        params: {
          k_first: 40,
          n_first: 5,
          k: 25,
        }
      }
    }
    props.setGames(props.games.concat(newGame));
    props.setCurrentGame({game: newGame, edit: true})
  }


  return (
    <Card className='games-header'>
        <p>{props.games.length} games</p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Games />}
            onClick={() => addGame()}
            text="Add a new game"
          />
    </Card>
  );
}