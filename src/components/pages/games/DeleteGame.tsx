import React, { ChangeEvent, VoidFunctionComponent } from 'react';
import Button from '../../button/Button';
import Dialog from '../../dialog/Dialog';

export interface DeleteGameProps{
  deleteGame: () => void,
  setDeleteGameOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DeleteGame(props: DeleteGameProps){  
    return (
    <Dialog
        open={true}
        onClose={() => props.setDeleteGameOpen(false)}
        title={"Delete this game?"}
        content={<p>This will delete this game and all associated results.</p>}
        actions={
          [
            <Button onClick={() => props.setDeleteGameOpen(false)} text="Cancel"/>,
            <Button onClick={() => props.deleteGame()} style={{color: "#DD0505", borderColor: "#DD0505"}} text="Delete" />
          ]
        }
    />

  );
}