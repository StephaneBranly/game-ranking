import './Header.scss'

import EmojiEvents from '@material-ui/icons/EmojiEvents'
import React, { Component } from "react"

const Header = () => {
  return (
      <header>
        <EmojiEvents />
        <h1>Game Ranking</h1>
      </header>
    );
}

export default Header