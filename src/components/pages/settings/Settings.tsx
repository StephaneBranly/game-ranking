import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
} from "@material-ui/core";
import About from './About';
import LoadSave, { LoadSaveProps } from './LoadSave';


const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export interface SettingsProps{
  handlerSaveData: () => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Settings(props: SettingsProps){
    const classes = useStyles(); 
  
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
          <LoadSave {...LoadSaveProps}></LoadSave>
          <About></About>
       </Grid>
    </Container>
  );
}