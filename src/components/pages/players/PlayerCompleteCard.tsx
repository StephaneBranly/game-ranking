import React from 'react';

import "./PlayerCompleteCard.scss"

import { playerType } from '../../../types/data';
import { Edit } from '@material-ui/icons';
import { severityType } from '../../../types/notification';
import EditPlayer from './EditPlayer'
import Button from '../../button/Button';

export interface PlayerCompleteCardProps{
    player: playerType,
    changePlayerData: (player: playerType, uuid: string) => void,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<{player:playerType | undefined, edit: boolean}>>,
    addNotification: (arg0: string, arg1: severityType) => void,
    edit: boolean
}

export default function PlayerCompleteCard(props: PlayerCompleteCardProps){
  const [editMode, setEditMode] = React.useState(props.edit);
 
  const handleChangePlayer = (player: playerType) => {
    props.changePlayerData(player, player.uuid)
  }

  return (
    <>
        <div className='player-complete-card'>
            <Button onClick={() => setEditMode(true)} startIcon={<Edit />} />
            <p>
                {props.player.username}
            </p>
        </div>
        {editMode && <EditPlayer setEditMode={setEditMode} handleChangePlayer={handleChangePlayer} player={props.player}></EditPlayer>}
    </>
  );
}