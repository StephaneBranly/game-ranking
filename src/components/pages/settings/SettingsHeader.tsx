import React from 'react';
import { Publish, GetApp, Storage, Delete, Favorite, GitHub } from '@material-ui/icons';
import ButtonGroup from '../../button/ButtonGroup';
import Button from '../../button/Button';
import { Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';

export interface SettingsHeaderProps{
    handlerResetData: (cookie: boolean) => void,
    handlerSaveData: (cookie: boolean) => void,
    handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
}

export default function SettingsHeader(props: SettingsHeaderProps){
    const [openDataMenu, setOpenDataMenu] = React.useState(true)
  
    const handleClose = (event: any, reason: string) => {
      setOpenDataMenu(false)
    }

    return (
       <div className='settings-header'>
            <Menu
                open={openDataMenu}
                onClose={handleClose}
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
            <ButtonGroup>
              <Button 
                endIcon={<Favorite/>} 
                onClick={() => window.open("https://www.paypal.com/paypalme/StephaneBranly", "_blank")}
                text='Sponsor'
              />
              <Button 
                endIcon={<GitHub/>}
                onClick={() => window.open("https://github.com/StephaneBranly/game-ranking", "_blank")}
                text='GitHub'
              />
              <Button
                startIcon={<Storage />}
                onClick={() => setOpenDataMenu(true)}
                text='Data'
              />
            </ButtonGroup>
          </div>
  );
}