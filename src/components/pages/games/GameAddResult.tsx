import React from 'react';

import { gameType, playerType, scoreType, resultType } from '../../../types/data';
import { Delete, NavigateBefore, NavigateNext, PostAdd } from '@material-ui/icons';
import GameAddResultWho from './GamesAddResultWho';
import GameAddResultWhen from './GameAddResultWhen';
import GameAddResultRanks from './GameAddResultRanks';
import { severityType } from '../../../types/notification';
import { getPlayerProfile } from '../../../utils/lib';
import { uuid } from 'uuidv4';
import DeleteResult from './DeleteResult';
import Dialog from '../../dialog/Dialog';
import Button from '../../button/Button';
import ButtonGroup from '../../button/ButtonGroup';

export interface GameAddResultProps{
    game: gameType,
    players: Array<playerType>,
    addResultOpen: {id:string|undefined, open:boolean},
    setAddResultOpen: React.Dispatch<React.SetStateAction<{id: string|undefined, open: boolean}>>,
    addNotification: (arg0: string, arg1: severityType) => void,
    addResult: (result: resultType, id: string | undefined) => void,
    deleteResult: (uuid: string) => void,
}

export default function GameAddResult(props: GameAddResultProps){
  const [currentStep, setCurrentStep] = React.useState("who");
  const [selectedDate, setSelectedDate] = React.useState(props.addResultOpen.id ? props.game.results.filter(item => item.uuid === props.addResultOpen.id)[0].date : new Date());
  const [selectedPlayers, setSelectedPlayers] = React.useState(props.addResultOpen.id ? props.game.results.filter(item => item.uuid === props.addResultOpen.id)[0].ranks : [] as Array<scoreType>);
  const [deleteResultOpen, setDeleteResultOpen] = React.useState(false);

  const displayCurrentStep = () => {
    if(currentStep === "who")
      return (<GameAddResultWho players={props.players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>);

    if(currentStep === "when")
      return (<GameAddResultWhen setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>);

    if(currentStep === "ranks")
      return (<GameAddResultRanks players={props.players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>);

    return <p>ERROR</p>
  }

  const nextStep = () => {
    if(currentStep === "who")
    {
      if(selectedPlayers.length < 2)
        props.addNotification("Please select a least 2 players","error");
      else
      {
        setCurrentStep("when");
        const sorted = selectedPlayers.sort((a, b) => getPlayerProfile(props.players,a.uuid).username > getPlayerProfile(props.players,b.uuid).username ? 1 : -1)
        setSelectedPlayers(sorted);
      }
    }
    else if(currentStep === "when")
      setCurrentStep("ranks");
  }
  const backStep = () => {
    if(currentStep === "when")
      setCurrentStep("who");
    else if(currentStep === "ranks")
      setCurrentStep("when");
  }

  const addResult = () => {
    let rank: number = 0;
    let validResult: boolean = false;
    selectedPlayers.forEach(player => {
      if(rank===0)
        rank=player.rank;
      if(rank!==player.rank)
        validResult=true;
    });
    if(validResult){
      const sorted = selectedPlayers.sort((a, b) => a.rank > b.rank ? 1 : -1)
      setSelectedPlayers(sorted);
      
      const result: resultType = 
      {
        date: selectedDate,
        ranks: selectedPlayers,
        uuid: uuid(),
      }
      if(props.addResultOpen.id)
        props.addNotification("Result correctly edited","success");
      else
        props.addNotification("New result correctly added","success");

      props.setAddResultOpen({id:undefined, open: false})
      props.addResult(result,props.addResultOpen.id);
    }
    else
      props.addNotification("Results need at least two different rank","error");
  }

  const deleteResult = () => {
    setDeleteResultOpen(false)
    props.setAddResultOpen({id:undefined, open:false})
    props.deleteResult(props.addResultOpen.id!)
  }

  const renderActions = () => {
    return (<ButtonGroup>
      <Button onClick={() => props.setAddResultOpen({id:undefined, open:false})} text="Cancel" />
      {props.addResultOpen.id && <Button onClick={() => setDeleteResultOpen(true)} startIcon={<Delete/>} />}
      <Button  disabled={currentStep === "who"} onClick={() => backStep()} startIcon={<NavigateBefore/>} /> 
      {/* autoFocus */}
  
      {currentStep === "ranks" ? 
          <Button onClick={() => addResult()} endIcon={<PostAdd/>} text="Send" />
          :
          <Button onClick={() => nextStep()} startIcon={<NavigateNext/>} /> 
      }
     </ButtonGroup>)
  }
  
  const title = props.addResultOpen.id ? "Edit result" : "Add result";

  return (
    <><Dialog open={props.addResultOpen.open} title={title} content={displayCurrentStep()} actions={renderActions()} onClose={() => props.setAddResultOpen({id:undefined, open:false})} />
      {deleteResultOpen && <DeleteResult setDeleteResultOpen={setDeleteResultOpen} deleteResult={deleteResult}/>}
  </>
  );
}