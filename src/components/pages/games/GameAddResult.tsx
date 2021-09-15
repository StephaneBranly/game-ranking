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
  Avatar,
  Badge,
} from "@material-ui/core";
import { gameType, playerType, resultType, scoreType } from '../../../types/data';
import { EmojiEvents, NavigateBefore, NavigateNext, PostAdd } from '@material-ui/icons';
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
  const [selectedPlayers, setSelectedPlayers] = React.useState([] as Array<scoreType>);

  const playerInResults = (uuidPlayer: string) => {
    return (selectedPlayers.filter(player => (player.uuid === uuidPlayer)).length !== 0)
  }
  const togglePlayer = (uuidPlayer: string) => {
    if(playerInResults(uuidPlayer))
      setSelectedPlayers(selectedPlayers.filter(player => player.uuid !== uuidPlayer));
    else
      setSelectedPlayers([...selectedPlayers,{uuid: uuidPlayer, rank: 1}]);
    console.log(selectedPlayers);
  }
  const getPlayerProfile = (uuidPlayer: string) => {
    return (props.players.filter(player => (player.uuid === uuidPlayer))[0])
  }

  const displayCurrentStep = () => {
    if(currentStep === "who")
      return (
      <DialogContent dividers>
        <Typography>Who was playing?</Typography>
        <List>
          {renderCheckboxPlayers(props.players)}
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
          <Grid container spacing={1} direction="column" alignItems="baseline">
            {renderPlayerRank()}
          </Grid>
        </DialogContent>
      );

    return <Typography>ERROR</Typography>
  }
  const renderCheckboxPlayers = (players: Array<playerType>) => {
    return players.map((player) => 
    <ListItem key={player.uuid} dense button onClick={() => togglePlayer(player.uuid)}>
      <ListItemIcon>
          <Checkbox
            edge="end"
            tabIndex={-1}
            disableRipple
            checked={playerInResults(player.uuid)}
            onClick={() => togglePlayer(player.uuid)}
            style={{color: player.color}}
        />
        </ListItemIcon>
        <ListItemText id={player.uuid} primary={player.username} />
      </ListItem>)
  }

  const renderPlayerRank = () => {
    return selectedPlayers.map((player) => 
    <Grid item key={player.uuid}>
      <Grid container
        direction="row"
        spacing={1}
        >
          <Grid item><Avatar alt={player.uuid} style={{backgroundColor: getPlayerProfile(player.uuid).color}}>L</Avatar></Grid>
          <Grid item><Typography>{getPlayerProfile(player.uuid).username}</Typography></Grid>
        </Grid>
      </Grid>)
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