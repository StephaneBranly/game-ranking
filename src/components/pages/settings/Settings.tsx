import React from 'react';
import {
  Container,
  Grid,
} from "@material-ui/core";
import About from './About';
import SettingsHeader, { SettingsHeaderProps } from './SettingsHeader';


export interface SettingsProps{
  handlerResetData: (cookie: boolean) => void,
  handlerSaveData: (cookie: boolean) => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
}

export default function Settings(props: SettingsProps){  
    return (
    <Container>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
          <SettingsHeader {...props}/>
          <About/>
       </Grid>
    </Container>
  );
}