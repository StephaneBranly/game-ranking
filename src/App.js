import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Pages from './components/pages/Pages'
import React from 'react';
import { createMuiTheme, ThemeProvider, createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
   
  }),
);

function App() {
  let data = {
    players: {
      list: [
        { username: "BranlySt",
          last_update: "202108291455",
          color: "#AAFB00",
        },
        {
          username: "Gazome",
          last_update: "202108291455",
          color: "#BA2B00",
        },
        {
          username: "Sebichou",
          last_update: "202108291455",
          color: "#9ADBF4",
        },
        {
          username: "Lisouille",
          last_update: "202108291455",
          color: "#5A4BD0",
        }
      ]
    }
  }

  const handlerSaveData = () => {
    var FileSaver = require('file-saver');
    var json = JSON.stringify(data);
    var blob = new Blob([json], {type: "application/json"});
    FileSaver.saveAs(blob, "save_game-ranking.json");
  } 

  const classes = useStyles(); 

  const [value, setValue] = React.useState('summary');

  const handleChangeCurrentPage = (event, newValue) => {
    setValue(newValue);
  };

  let pages_props={
    currentPage:value,
    data:data,
    handlerSaveData: handlerSaveData,
  }
  let footer_prop={
    handleChangeCurrentPage:handleChangeCurrentPage,
    currentPage:value
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Pages {...pages_props}></Pages>
        <Footer className={classes.footer} {...footer_prop}></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
