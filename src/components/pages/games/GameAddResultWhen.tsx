import React from 'react';
import {
  Typography,
  DialogContent,
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export interface GameAddResultWhenProps{
    selectedDate: Date,
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

export default function GameAddResultWhen(props: GameAddResultWhenProps){
  const handleDateChange = (date: MaterialUiPickersDate) => {
    props.setSelectedDate(date as Date);
  };

  return (
    <DialogContent dividers>
        <Typography>When?</Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
            value={props.selectedDate}
            onChange={handleDateChange}
            showTodayButton
            format="dd/MM/yyyy HH:mm"
            />
        </MuiPickersUtilsProvider>
    </DialogContent>);
}