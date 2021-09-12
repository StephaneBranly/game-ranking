import React, { ChangeEvent } from 'react';
import {
  makeStyles,
  createStyles,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { notificationType } from '../../../types/notification';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export interface NotificationProps{
  notification: notificationType,
  setNotification: any,
}

export default function Notification(props: NotificationProps){  
  const handleClose = (event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setNotification({open: false});
  };

    return (
       props.notification.open ?  
        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal:'right'}}
          open={props.notification.open}
          autoHideDuration={6000} 
          onClose={handleClose}
        >
          <Alert severity={props.notification.severity ? props.notification.severity : "info"} onClose={handleClose}>{props.notification.text}</Alert>
        </Snackbar> 
        :
        <></>
  );
}