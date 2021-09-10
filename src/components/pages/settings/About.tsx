import React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Card,
  Button,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    },
    subSection:
    {
        paddingLeft: theme.spacing(1),
        marginLeft: theme.spacing(2),
        borderLeft: "3px solid rgba(0,0,0,.2)"
    }
}),
);

export interface AboutProps{
}

export default function About(props: AboutProps){
    const classes = useStyles(); 
  
    return (
        <Grid item>
            <Card>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
                    spacing={4}
                    className={classes.padding}
                >
                    <Grid item>
                        <Typography variant="h4" color="primary">About...</Typography>
                    </Grid>
                    <Grid item>
                        <Container className={classes.subSection}>
                            <Typography  variant="h5" color="textSecondary">the author</Typography>
                            <Typography>Made with love by @stephane_branly.</Typography>
                        </Container>
                    </Grid>
                    <Grid item>
                        <Container className={classes.subSection}>
                            <Typography  variant="h5" color="textSecondary">the project</Typography>
                            <Typography>Project made for personal use first. But feel free to use it.</Typography>
                        </Container>
                    </Grid>
                </Grid>
            </Card>
       </Grid>
  );
}