import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Card,
  Button,
} from "@material-ui/core";
import Publish from '@material-ui/icons/Publish';
import GetApp from '@material-ui/icons/GetApp';


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
  
    return (
    <Container>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
            <Grid item>
            <Card>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            spacing={1}
            className={classes.padding}
          >
            <Grid item>
              <input
                  style={{ display: "none" }}
                  accept=".json"
                  // className={classes.input}
                  id="contained-button-import"
                  type="file"
                  onChange={props.handlerLoadData}
                />
                <label htmlFor="contained-button-import">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<Publish />}
                  >
                    Load data
                  </Button>
                </label>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GetApp />}
                onClick={props.handlerSaveData}
              >
                Save data
              </Button>
            </Grid>
          </Grid>
       </Card>
       </Grid>
       </Grid>
    </Container>
  );
}