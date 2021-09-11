import React, { ChangeEvent } from 'react';
import {
  makeStyles,
  createStyles,
} from "@material-ui/core";

export interface NotificationProps{
  text: string,
}

export default function Notification(props: NotificationProps){  
  return (
    <>{props.text}</>
  );
}