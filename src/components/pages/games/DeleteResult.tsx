import React from 'react';
import Button from '../../button/Button';
import Dialog from '../../dialog/Dialog';

export interface DeleteResultProps{
  deleteResult: () => void,
  setDeleteResultOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function DeleteResult(props: DeleteResultProps){  
    return (
    <Dialog
        open={true}
        onClose={() => props.setDeleteResultOpen(false)}
        title={'Delete this Result?'}
        content={<p>This will delete this Result and all associated results</p>}
        actions={[
            <Button onClick={() => props.setDeleteResultOpen(false)} text='Cancel' />,
            <Button onClick={() => props.deleteResult()} style={{color: "#DD0505", borderColor: "#DD0505"}} text='delete' />
          ]
        }
    />
  );
}