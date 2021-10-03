import React from 'react';
import {
  Container,
  Grid,
} from "@material-ui/core";
import About from './About';
import LoadSave, { LoadSaveProps } from './LoadSave';
import CookiesComp from './CookiesComp';


export interface SettingsProps{
  handlerSaveData: () => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Settings(props: SettingsProps){  
    const LoadSaveProps: LoadSaveProps = 
    { 
      handlerSaveData: props.handlerSaveData,
      handlerLoadData: props.handlerLoadData,
    }
    return (
    <Container>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
          <LoadSave {...LoadSaveProps}/>
          <CookiesComp/>
          <About/>
       </Grid>
    </Container>
  );
}