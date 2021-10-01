import React from "react"
import {
  createMuiTheme, ThemeProvider, createStyles, makeStyles, Theme,
} from "@material-ui/core/styles"
import Header from "./components/header/Header"
import Footer, { FooterProps } from "./components/footer/Footer"
import Pages, { PagesProps } from "./components/pages/Pages"
import { dataType, gameType, playerType } from "./types/data"
import Notifications, { NotificationProps } from "./components/pages/notifications/Notification"
import { notificationType, severityType } from "./types/notification"
import { generateGameFromLoadedData } from "./utils/lib"

export const theme = createMuiTheme({
  palette: {
    error: {
      main: "#DD0505",
    },
    primary: {
      main: "#3f5efb",
    },
    secondary: {
      main: "#d2d2d2",
    },
  },
})

const useStyles = makeStyles((theme) => createStyles({
  App: {
    paddingBottom: theme.spacing(15),
  },
}))

function App() {
  const [page, setPage] = React.useState("summary")
  const [players, setPlayers] = React.useState([]as Array<playerType>)
  const [games, setGames] = React.useState([] as Array<gameType>)
  const [notification, setNotification] = React.useState({ open: false } as notificationType)

  const classes = useStyles()

  const handlerSaveData = () => {
    const data = {
      players,
      games: games.map(game => { return { uuid: game.uuid, gamename: game.gamename, results: game.results }})
    }
    const FileSaver = require("file-saver")
    const json = JSON.stringify(data)
    const blob = new Blob([json], { type: "application/json" })
    FileSaver.saveAs(blob, "save_game-ranking.json")
  }

  const handlerLoadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => {
        if (e.target?.result) {
          const data = JSON.parse(e.target.result as string)
          setPlayers(data.players)
          const games: Array<gameType> = data.games.map((game: { uuid: any; gamename: any; results: any }) => generateGameFromLoadedData(game))
          setGames(games)
          addNotification("Data correctly loaded", "success")
          setPage("summary")
        }
      }
      if (e.target?.files) {
        reader.readAsText(e.target.files[0])
      }
    } catch {
      addNotification("Error when loading data", "error")
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

  const handleChangeCurrentPage = (event: React.ChangeEvent<{}>, newPage: string) => {
    setPage(newPage)
  }

  const pagesProps: PagesProps = {
    currentPage: page,
    games,
    setGames,
    players,
    setPlayers,
    handlerSaveData,
    handlerLoadData,
    addNotification,
  }

  const footerProps: FooterProps = {
    handleChangeCurrentPage,
    currentPage: page,
  }

  const notificationsProps: NotificationProps = {
    notification,
    setNotification,
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header />
        <Pages {...pagesProps} />
        <Footer {...footerProps} />
      </div>
      <Notifications {...notificationsProps} />
    </ThemeProvider>
  )
}

export default App
