import React from 'react';
import { Publish, GetApp, Storage, Delete, Favorite, GitHub } from '@material-ui/icons';
import ButtonGroup from '../../button/ButtonGroup';
import Button from '../../button/Button';
import Menu from '../../menu/Menu';
import MenuItem from '../../menu/MenuItem';
import Separator from '../../menu/Separator';

export interface SettingsHeaderProps{
    handlerResetData: (cookie: boolean) => void,
    handlerSaveData: (cookie: boolean) => void,
    handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
}

export default function SettingsHeader(props: SettingsHeaderProps){
    const [openDataMenu, setOpenDataMenu] = React.useState(false)
  
    const handleClose = () => {
      setOpenDataMenu(false)
    }

    const ref = React.useRef<HTMLDivElement>(null)

    return (
       <div className='settings-header'>
            <Menu
                open={openDataMenu}
                onClose={handleClose}
                anchorEl={ref.current?? undefined}
              >
                <input
                  style={{ display: "none" }}
                  accept=".json"
                  id="contained-button-import"
                  type="file"
                  onChange={props.handlerLoadData}
                />
                <label htmlFor="contained-button-import">
                <MenuItem
                  icon={<Publish fontSize="small" />}
                  text='Load from file'
                />
                </label>
                <MenuItem
                  onClick={() => props.handlerLoadData(null)}
                  icon={<Storage fontSize="small" />}
                  text='Load from cookies'
                />
                <Separator />
                <MenuItem
                    onClick={() => props.handlerSaveData(false)}
                    icon={<GetApp fontSize="small" />}
                    text='Save as file'
                  />
                <MenuItem
                  onClick={() => props.handlerSaveData(true)}
                  icon={<Storage fontSize="small" />}
                  text='Save as cookies'
                />
                <Separator />
                <MenuItem
                  onClick={() => props.handlerResetData(false)}
                  icon={<Delete fontSize="small" />}
                  text='Delete current session'
                />
                <MenuItem
                  onClick={() => props.handlerResetData(true)}
                  icon={<Delete fontSize="small" />}
                  text='Delete cookies'
                />
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
              <div ref={ref}>
                <Button
                  startIcon={<Storage />}
                  onClick={() => setOpenDataMenu(true)}
                  text='Data'
                  className='data-menu'
                />
              </div>
            </ButtonGroup>
          </div>
  );
}