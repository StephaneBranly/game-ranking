import React from 'react';
import {
  makeStyles,
  createStyles,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Avatar,
} from "@material-ui/core";
import { gameType, playerType, scoreType } from '../../../types/data';
import { NavigateBefore, NavigateNext, PostAdd } from '@material-ui/icons';
import GameAddResultWho from './GamesAddResultWho';
import GameAddResultWhen from './GameAddResultWhen';
import GameAddResultResults from './GameAddResultResults';
import { severityType } from '../../../types/notification';

const useStyles = makeStyles((theme) =>
createStyles({  
    
}),
);
export interface GameAddResultProps{
    game: gameType,
    players: Array<playerType>,
    changeGameData: (game: gameType, uuid: string) => void,
    addResultOpen: boolean,
    setAddResultOpen: React.Dispatch<React.SetStateAction<boolean>>,
    addNotification: (arg0: string, arg1: severityType) => void,
}

export default function GameAddResult(props: GameAddResultProps){
  const classes = useStyles(); 

  const [currentStep, setCurrentStep] = React.useState("who");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedPlayers, setSelectedPlayers] = React.useState([] as Array<scoreType>);

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
        setCurrentStep("when");
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

  return (
    <Dialog fullWidth={true} maxWidth="sm" open={props.addResultOpen}>
    <DialogTitle>
      New result
    </DialogTitle>
    {displayCurrentStep()}
    <DialogActions>
        <Button onClick={() => props.setAddResultOpen(false)} color="primary" variant="outlined">
            Cancel
        </Button>
        <Button autoFocus disabled={currentStep === "who"} onClick={() => backStep()} color="primary" variant="outlined" startIcon={<NavigateBefore/>}>
            Back
        </Button>
        {currentStep === "results" ? 
            <Button autoFocus onClick={() => props.setAddResultOpen(false)} color="primary" variant="outlined" endIcon={<PostAdd/>}>
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