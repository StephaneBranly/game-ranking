import React, { ChangeEvent, useEffect } from 'react';

import "./Notification.scss"

import { notificationType } from '../../../types/notification';

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

  useEffect(() => {
    if(props.notification.open){
      setTimeout(() => {
        props.setNotification({open: false});
      }, 3000);
    }
  }, [props.notification.open])

  const severity = props.notification.severity ? props.notification.severity : "info"

  return (
    <div className={`notification ${props.notification.open?'open':'close'}`}>
      <div className={`notification-content ${severity}`}>
        {props.notification.text}
      </div>
    </div> 
  );
}