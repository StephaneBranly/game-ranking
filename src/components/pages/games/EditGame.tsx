import React from 'react';
import { gameType } from '../../../types/data';
import Button from '../../button/Button';
import Dialog from '../../dialog/Dialog';
import Input from '../../input/Input';
import Select from '../../select/Select';


export interface EditGameProps{
    handleChangeGame: (newGame: gameType) => void,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
    currentGame: gameType,
}

export default function EditGame(props: EditGameProps){  
    const [game, setGame] = React.useState(props.currentGame);
 
    const renderDialogContent = () => {
        return (
            <div className='vertical-centered gap-10'>
                <Input 
                  label="Game name"
                  value={game.gamename}
                  onChange={(e) => setGame({...game, 'gamename': e.target.value })}
                />
                <Select
                  label="Algorithm"
                  defaultValue={game.algorithmSettings.algo}
                  onChange={() => {}}
                  options={[{ value: 'elo', label: 'elo'}]}/>
                <Input
                  label="K factor for n first games"
                  type='number'
                  value={game.algorithmSettings.params.k_first}
                  onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'k_first': Number(e.target.value)} } })}
                />
                <Input
                  label="N"
                  type='number'
                  value={game.algorithmSettings.params.n_first}
                  onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'n_first': Number(e.target.value)} } })}
                />
                <Input
                  label="K factor after n first games"
                  type='number'
                  value={game.algorithmSettings.params.k}
                  onChange={(e) => setGame({...game, 'algorithmSettings': { ...game.algorithmSettings, 'params': { ...game.algorithmSettings.params, 'k': Number(e.target.value)} } })}
                />
            </div>
          )
    }

    return (
    <Dialog
        open={true}
        onClose={() => props.setEditMode(false)}
        title="Change the game settings"
        actions={[
          <Button onClick={() => props.setEditMode(false)} text="Cancel" />,
          <Button onClick={() => { props.handleChangeGame(game); props.setEditMode(false); } } style={{color: "#0DF505", borderColor: "#0DF505"}} text="Update" />
        ]} 
        content={renderDialogContent()}    
    />)
}