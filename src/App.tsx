import Header from './components/header/Header'
import Footer, { FooterProps } from './components/footer/Footer'
import Pages, { PagesProps } from './components/pages/Pages'
import React from 'react';
import { createMuiTheme, ThemeProvider, createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { dataType, gameType, playerType } from './types/data';
import Notifications, { NotificationProps } from './components/pages/notifications/Notification';
import { notificationType, severityType } from './types/notification';

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
});

const useStyles = makeStyles((theme) =>
  createStyles({
    App: {
      paddingBottom: theme.spacing(15)
    }
  }),
);

function App() {
  const [page, setPage] = React.useState('summary');
  const [players, setPlayers] = React.useState([]as Array<playerType>);
  const [games, setGames] = React.useState([] as Array<gameType>);
  const [notification, setNotification] = React.useState({open: false} as notificationType);

  const classes = useStyles(); 

  

  const handlerSaveData = () => {
    let data: dataType = {
      players: players,
      games: games
    }
    var FileSaver = require('file-saver');
    var json = JSON.stringify(data);
    var blob = new Blob([json], {type: "application/json"});
    FileSaver.saveAs(blob, "save_game-ranking.json");
  } 

  const handlerLoadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    try
    {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {   
        if(e.target?.result)
        {
          const data = JSON.parse(e.target.result as string);
          setPlayers(data.players);
          setGames(data.games);
          addNotification("Data correctly loaded", "success");
          setPage("summary")
        }
      };
      if(e.target?.files)
      {
        reader.readAsText(e.target.files[0]);
      }
    }
    catch
    {
      addNotification("Error when loading data", "error");
    }
  };

  const addNotification = (text: string, severity?: severityType) => {
    const new_notification = 
    {
      open: true,
      text: text,
      severity: severity ? severity : undefined
    }
    setNotification(new_notification)
  }

  const handleChangeCurrentPage = (event: React.ChangeEvent<{}>, new_page: string) => {
    setPage(new_page);
  };

  let pages_props: PagesProps = {
    currentPage:page,
    games:games,
    setGames: setGames,
    players: players,
    setPlayers: setPlayers,
    handlerSaveData: handlerSaveData,
    handlerLoadData: handlerLoadData,
    addNotification: addNotification,
  }

  let footer_prop: FooterProps = {
    handleChangeCurrentPage:handleChangeCurrentPage,
    currentPage:page
  }

  let notifications_props: NotificationProps = {
    notification: notification,
    setNotification: setNotification,
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header></Header>
        <Pages {...pages_props}></Pages>
        <Footer {...footer_prop}></Footer>
      </div>
      <Notifications {...notifications_props}></Notifications>
    </ThemeProvider>
  );
}

export default App;