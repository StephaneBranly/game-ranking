import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Card,
  Typography,
  Button,
} from "@material-ui/core";
import Publish from '@material-ui/icons/Publish';
import GetApp from '@material-ui/icons/GetApp';
import { PinDropRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export default function Settings(props){
    const classes = useStyles(); 
  
    const onChangeFileHandler = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = JSON.parse(e.target.result);
        console.log(data);
        props.setData(data);
      };
  
      reader.readAsText(e.target.files[0]);
    };

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
                  onChange={onChangeFileHandler}
                />
                <label htmlFor="contained-button-import">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
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
                className={classes.button}
                startIcon={<GetApp />}
                onClick={() => props.handlerSaveData()}
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