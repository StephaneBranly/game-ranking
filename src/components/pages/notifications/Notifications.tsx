import React, { ChangeEvent } from 'react';
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";
import Notification from './Notification';

export interface NotificationsProps{
  notifications: any,
  setNotifications: any,
}

export default function Notifications(props: NotificationsProps){  
    const displayNotifications = (notifications: any) =>
    {
        return (notifications.map((notification: any) => <Notification {...notification}></Notification>));
    }
    return (
        <>
            {displayNotifications(props.notifications)}
        </>
  );
}