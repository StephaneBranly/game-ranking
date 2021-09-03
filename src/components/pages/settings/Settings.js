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


const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export default function Settings(props){
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
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Publish />}
              >
                Load data
              </Button>
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