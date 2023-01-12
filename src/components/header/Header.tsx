import './Header.scss'

import EmojiEvents from '@material-ui/icons/EmojiEvents'
import React, { Component } from "react"
import { Settings, Group } from '@material-ui/icons';

export interface HeaderProps{
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setPlayersOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = (props: HeaderProps) => {
  return (
      <header>
        <div>
          <h1>Game Ranking</h1>
        </div>
        <div className='header-right'>
          <div className='header-icon-button' onClick={() => props.setSettingsOpen(true)}><Settings fontSize='large'/></div>
          <div className='header-icon-button'  onClick={() => props.setPlayersOpen(true)}><Group fontSize='large'/></div>
          <div className='today-date'>{new Date().toLocaleDateString()}</div>
        </div>
      </header>
    );
}

export default Header