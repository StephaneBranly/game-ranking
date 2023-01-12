import React, { useEffect } from "react"

import "./App.scss"

import Header from "./components/header/Header"
import { dataType, gameType, playerType } from "./types/data"
import Notification, { NotificationProps } from "./components/pages/notification/Notification"
import { notificationType, severityType } from "./types/notification"
import { generateGameFromLoadedData } from "./utils/lib"
import Games from "./components/pages/games/Games"
import Settings, { SettingsProps } from "./components/pages/settings/Settings"
import Dialog from "./components/dialog/Dialog"
import Players from "./components/pages/players/Players"

function App() {
  const [players, setPlayers] = React.useState([]as Array<playerType>)
  const [games, setGames] = React.useState([] as Array<gameType>)
  const [notification, setNotification] = React.useState({ open: false } as notificationType)

  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const [playersOpen, setPlayersOpen] = React.useState(false)

  const getJsonSavedData = () => {
    const data = {
      players,
      games: games.map(game => { return { uuid: game.uuid, gamename: game.gamename, results: game.results, algorithmSettings: game.algorithmSettings }})
    }
    return data
  }

  useEffect(() => {
    handlerLoadData(null)
  }, [])

  const handlerSaveData = (cookie: boolean) => {
    const stringifiedData = JSON.stringify(getJsonSavedData())

    if(cookie)
    {
      try {
        localStorage.setItem('data', stringifiedData)
        addNotification('Data saved as cookies', "success")
      } catch(e) {
        addNotification('Error when saving as cookies', "error")
      }
    }
    else {
      const FileSaver = require("file-saver")
      const blob = new Blob([stringifiedData], { type: "application/json" })
      FileSaver.saveAs(blob, "save_game-ranking.json")
    }
  }

  const handlerLoadData = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if(e){
      try {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
          if (e.target?.result) {
            const data = JSON.parse(e.target.result as string)
            setPlayers(data.players)
            const games: Array<gameType> = data.games.map((game: { uuid: any; gamename: any; results: any, algorithmSettings: any }) => generateGameFromLoadedData(game))
            setGames(games)
            addNotification("Data correctly loaded", "success")
          }
        }
        if (e.target?.files) {
          reader.readAsText(e.target.files[0])
        }
      } catch {
        addNotification("Error when loading data", "error")
      }
    }
    else{
      if(localStorage.getItem('data'))
      {
        const data = JSON.parse(localStorage.getItem('data')!)
        setPlayers(data.players)
        const games: Array<gameType> = data.games.map((game: { uuid: any; gamename: any; results: any, algorithmSettings: any  }) => generateGameFromLoadedData(game))
        setGames(games)
        addNotification("Data correctly loaded", "success")
      }
      else 
        addNotification("Data not found in cookies", "warning")
    }
  }

  const handlerResetData = (cookie: boolean) => {
    if(cookie){
      localStorage.removeItem('data')
      addNotification("Cookie correctly removed", "success")
    } else {
      setPlayers([])
      setGames([])
      addNotification("Current session correctly reinitiliazed", "success")
    }
  }

  const addNotification = (text: string, severity?: severityType) => {
    const new_notification = {
      open: true,
      text,
      severity: severity || undefined,
    }
    setNotification(new_notification)
  }

  const notificationProps: NotificationProps = {
    notification,
    setNotification,
  }

  const settingsProps: SettingsProps = {
    handlerSaveData,
    handlerLoadData,
    handlerResetData,
  }

  return (
    <div className="app">
      <Header setSettingsOpen={setSettingsOpen} setPlayersOpen={setPlayersOpen} />
      <Games games={games} setGames={setGames} players={players} addNotification={addNotification}></Games>  
      {playersOpen && <Players players={players} setPlayers={setPlayers} games={games} addNotification={addNotification} setPlayersOpen={setPlayersOpen} />}
      <Notification {...notificationProps} />
      <Dialog open={settingsOpen} title={'Settings'} content={<Settings {...settingsProps} />} actions={<></>} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}

export default App
