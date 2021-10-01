import React from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import { gameType, playerType, scoreType, resultType } from '../../../types/data';
import { NavigateBefore, NavigateNext, PostAdd } from '@material-ui/icons';
import GameAddResultWho from './GamesAddResultWho';
import GameAddResultWhen from './GameAddResultWhen';
import GameAddResultResults from './GameAddResultResults';
import { severityType } from '../../../types/notification';
import { getPlayerProfile } from '../../../utils/lib';
import { uuid } from 'uuidv4';

export interface GameAddResultProps{
    game: gameType,
    players: Array<playerType>,
    addResultOpen: {id:string|undefined, open:boolean},
    setAddResultOpen: React.Dispatch<React.SetStateAction<{id: string|undefined, open: boolean}>>,
    addNotification: (arg0: string, arg1: severityType) => void,
    addResult: (result: resultType, id: string | undefined) => void,
}

export default function GameAddResult(props: GameAddResultProps){
  const [currentStep, setCurrentStep] = React.useState("who");
  const [selectedDate, setSelectedDate] = React.useState(props.addResultOpen.id ? props.game.results.filter(item => item.uuid === props.addResultOpen.id)[0].date : new Date());
  const [selectedPlayers, setSelectedPlayers] = React.useState(props.addResultOpen.id ? props.game.results.filter(item => item.uuid === props.addResultOpen.id)[0].ranks : [] as Array<scoreType>);

  const displayCurrentStep = () => {
    if(currentStep === "who")
      return (<GameAddResultWho players={props.players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>);

    if(currentStep === "when")
      return (<GameAddResultWhen setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>);

    if(currentStep === "results")
      return (<GameAddResultResults players={props.players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}/>);

    return <Typography>ERROR</Typography>
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
      setCurrentStep("results");
  }
  const backStep = () => {
    if(currentStep === "when")
      setCurrentStep("who");
    else if(currentStep === "results")
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

  return (
    <Dialog fullWidth={true} maxWidth="sm" open={props.addResultOpen.open}>
    {props.addResultOpen.id ?  <DialogTitle>Edit result</DialogTitle> :  <DialogTitle>New result</DialogTitle>}
    {displayCurrentStep()}
    <DialogActions>
        <Button onClick={() => props.setAddResultOpen({id:undefined, open:false})} color="primary" variant="outlined">
            Cancel
        </Button>
        <Button autoFocus disabled={currentStep === "who"} onClick={() => backStep()} color="primary" variant="outlined" startIcon={<NavigateBefore/>}>
            Back
        </Button>
        {currentStep === "results" ? 
            <Button autoFocus onClick={() => addResult()} color="primary" variant="outlined" endIcon={<PostAdd/>}>
              Send
            </Button> :
            <Button autoFocus onClick={() => nextStep()} color="primary" variant="outlined" endIcon={<NavigateNext/>}>
              Next
            </Button>
        }
       
    </DialogActions>
  </Dialog>
  );
}