import React from 'react';
import {
  Grid,
  Card,
  Typography,
  Switch,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import Cookies from 'js-cookie'

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

export interface CookiesProps{
}

export default function CookiesComp(props: CookiesProps){
    const classes = useStyles(); 
    
    const updateCookiesAu = (e: any) => {
        console.log(e.target.checked)
        Cookies.set('acceptCookie', e.target.checked)
    }

    return (
        <Grid item>
            <Card className={classes.padding}>
                <Typography>Allow new cookies?<Switch onChange={(e) => updateCookiesAu(e)}/></Typography> 
            </Card>
       </Grid>
  );
}