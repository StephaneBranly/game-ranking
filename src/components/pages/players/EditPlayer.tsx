import React from 'react';

import { playerType } from '../../../types/data';
import { ChromePicker } from 'react-color';
import Dialog from '../../dialog/Dialog';
import Button from '../../button/Button';

export interface EditPlayerProps{
    player: playerType
    handleChangePlayer: (player: playerType) => void,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function EditPlayer(props: EditPlayerProps){  
    const [player, setPlayer] = React.useState(props.player);
 
    const handleClose = () => {
        props.setEditMode(false);
    };

    const renderDialogContent = () => {
      return (<div>
          <input type='text' value={player.username} onChange={(e) => setPlayer({...player, username: e.target.value})} />
          <ChromePicker color={player.color} onChangeComplete={(c) => setPlayer({...player, color: c.hex})} disableAlpha={true}/>
          </div>)
    }
    return (
      <Dialog
          open={true}
          onClose={handleClose} 
          title={'Edit player'} 
          content={renderDialogContent()}
          actions={<>
          <Button onClick={() => props.setEditMode(false)} text='Cancel'/>
          <Button onClick={() => {props.handleChangePlayer(player); props.setEditMode(false);}} text='Update' />
        </>}    />
  );
}

