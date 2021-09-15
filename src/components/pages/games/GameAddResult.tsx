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
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { gameType, playerType, resultType } from '../../../types/data';
import { NavigateBefore, NavigateNext, PostAdd } from '@material-ui/icons';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const useStyles = makeStyles((theme) =>
createStyles({  
    
}),
);
export interface GameAddResultProps{
    game: gameType,
    players: Array<playerType>,
    changeGameData: (game: gameType, uuid: string) => void,
    addResultOpen: boolean,
    setAddResultOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GameAddResult(props: GameAddResultProps){
  const classes = useStyles(); 

  const [currentStep, setCurrentStep] = React.useState("who");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const displayCurrentStep = () => {
    if(currentStep === "who")
      return (
      <DialogContent dividers>
        <Typography>Who was playing?</Typography>
        <List>
          {renderPlayers(props.players)}
        </List>
      </DialogContent>);

    if(currentStep === "when")
      return (
        <DialogContent dividers>
          <Typography>When?</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                showTodayButton
                format="dd/MM/yyyy HH:mm"
              />
          </MuiPickersUtilsProvider>
        </DialogContent>);

    if(currentStep === "results")
      return (
        <DialogContent dividers>
          <Typography>Results</Typography>
        </DialogContent>
      );

    return <Typography>ERROR</Typography>
  }
  const renderPlayers = (players: Array<playerType>) => {
    return players.map((player) => 
    <ListItem key={player.uuid} dense button onClick={() => {}}>
      <ListItemIcon>
          <Checkbox
            edge="end"
            tabIndex={-1}
            disableRipple
        />
        </ListItemIcon>
        <ListItemText id={player.uuid} primary={player.username} />
      </ListItem>)
  }

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setSelectedDate(date as any);
  };

  const nextStep = () => {
    if(currentStep === "who")
      setCurrentStep("when");
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