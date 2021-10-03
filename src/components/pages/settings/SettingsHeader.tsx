import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Card,
  Button,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
} from "@material-ui/core";
import { Publish, GetApp, Storage, Delete, Favorite, GitHub } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>
createStyles({  
    padding: {
        padding: theme.spacing(1),
    }
}),
);

export interface SettingsHeaderProps{
    handlerResetData: (cookie: boolean) => void,
    handlerSaveData: (cookie: boolean) => void,
    handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
}

export default function SettingsHeader(props: SettingsHeaderProps){
    const classes = useStyles(); 

    const [openDataMenu, setOpenDataMenu] = React.useState(null as null | HTMLElement)
  
    const handleClose = (event: any, reason: string) => {
      setOpenDataMenu(null)
    }

    return (
        <Grid item>
            <Card>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
            spacing={1}
            className={classes.padding}
          >
              <Menu
                onClose={handleClose}
                open={openDataMenu !== null}
                anchorEl={openDataMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                 <input
                  style={{ display: "none" }}
                  accept=".json"
                  id="contained-button-import"
                  type="file"
                  onChange={props.handlerLoadData}
                />
                <label htmlFor="contained-button-import">
                <MenuItem>
                  <ListItemIcon>
                  <Publish fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Load from file</ListItemText>
                </MenuItem>
                </label>
                <MenuItem onClick={() => props.handlerLoadData(null)}>
                  <ListItemIcon>
                  <Storage fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Load from cookies</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => props.handlerSaveData(false)}>
                  <ListItemIcon>
                  <GetApp fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Save as file</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => props.handlerSaveData(true)}>
                  <ListItemIcon>
                  <Storage fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Save as cookies</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => props.handlerResetData(false)}>
                  <ListItemIcon>
                  <Delete fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Delete current session</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => props.handlerResetData(true)}>
                  <ListItemIcon>
                  <Delete fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Delete cookies</ListItemText>
                </MenuItem>
            </Menu>
            <ButtonGroup                 
                variant="contained"
                color="primary">
              <Button 
                endIcon={<Favorite/>} 
                onClick={() => window.open("https://www.paypal.com/paypalme/StephaneBranly", "_blank")}
                >
                  Sponsor
              </Button>
              <Button 
                endIcon={<GitHub/>}
                onClick={() => window.open("https://github.com/StephaneBranly/game-ranking", "_blank")}
                >
                  GitHub
              </Button>
              <Button
                startIcon={<Storage />}
                onClick={(event) => setOpenDataMenu(event.currentTarget)}
              >
                Data
              </Button>
            </ButtonGroup>
          </Grid>
       </Card>
       </Grid>
  );
}