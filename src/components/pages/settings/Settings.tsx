import React from 'react';
import About from './About';
import SettingsHeader, { SettingsHeaderProps } from './SettingsHeader';


export interface SettingsProps{
  handlerResetData: (cookie: boolean) => void,
  handlerSaveData: (cookie: boolean) => void,
  handlerLoadData: (e: React.ChangeEvent<HTMLInputElement> | null) => void,
}

export default function Settings(props: SettingsProps){  
    return (
    <div>
      <SettingsHeader {...props}/>
      {/* <About/> */}
    </div>
  );
}