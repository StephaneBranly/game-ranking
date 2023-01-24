import React from 'react';

import PersonAdd from '@material-ui/icons/PersonAdd';
import { uuid } from 'uuidv4';
import { playerType } from '../../../types/data';
import Button from '../../button/Button';

export interface PlayersHeaderProps{
  players: Array<playerType>,
  setPlayers:React.Dispatch<React.SetStateAction<Array<playerType>>>
  setCurrentPlayer: React.Dispatch<React.SetStateAction<{player:playerType | undefined, edit: boolean}>>,
}

export default function PlayersHeader(props: PlayersHeaderProps){
  const addPlayer = () => {
    var randomColor = require('randomcolor'); // import the script
    var color = randomColor();
    let newPlayer: playerType = 
    {   
      uuid: uuid(),
      username: "New Player",
      color: color,
    };    
    props.setPlayers(props.players.concat(newPlayer));
    props.setCurrentPlayer({player:newPlayer, edit:true})
  }


  return (
    <div className='player-header'>
        <Button
          startIcon={<PersonAdd />}
          onClick={() => addPlayer()}
          text='Add a new player'
        />
    </div>
  );
}