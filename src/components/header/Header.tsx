import './Header.scss'

import EmojiEvents from '@material-ui/icons/EmojiEvents'
import React, { Component } from "react"
import { Settings, Group } from '@material-ui/icons';

const Header = () => {
  return (
      <header>
        <div>
          <h1>Game Ranking</h1>
        </div>
        <div className='header-right'>
          <div className='header-icon-button'><Settings fontSize='large'/></div>
          <div className='header-icon-button'><Group fontSize='large'/></div>
          <div className='today-date'>{new Date().toLocaleDateString()}</div>
        </div>
      </header>
    );
}

export default Header