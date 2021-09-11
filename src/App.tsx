import Header from './components/header/Header'
import Footer, { FooterProps } from './components/footer/Footer'
import Pages, { PagesProps } from './components/pages/Pages'
import React from 'react';
import { createMuiTheme, ThemeProvider, createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { dataType, gameType, playerType } from './types/data';
import Notifications, { NotificationsProps } from './components/pages/notifications/Notifications';

export const theme = createMuiTheme({
  palette: {
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
  const [notifications, setNotifications] = React.useState([] as any);

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
          addNotification("Data correctly loaded");
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
      addNotification("Error when loading data");
    }
  };

  const addNotification = (text: string) => {
    const new_notification = 
    {
      text: text
    }
    setNotifications(notifications.concat(new_notification))
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
  }

  let footer_prop: FooterProps = {
    handleChangeCurrentPage:handleChangeCurrentPage,
    currentPage:page
  }

  let notifications_props: NotificationsProps = {
    notifications: notifications,
    setNotifications: setNotifications,
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header></Header>
        <Pages {...pages_props}></Pages>
        <Footer {...footer_prop}></Footer>
      </div>
      {/* <Notifications {...notifications_props}></Notifications> */}
    </ThemeProvider>
  );
}

export default App;