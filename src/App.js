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
  let datatmp = {
    players: {
      list: [
        { username: "BranlySt",
          last_update: "202108291455",
          color: "#AAFB00",
        }
      ]
    }
  }

  const [value, setValue] = React.useState('summary');
  const [data, setData] = React.useState(datatmp);

  const classes = useStyles(); 

  

  const handlerSaveData = () => {
    var FileSaver = require('file-saver');
    var json = JSON.stringify(data);
    var blob = new Blob([json], {type: "application/json"});
    FileSaver.saveAs(blob, "save_game-ranking.json");
  } 

  const handleChangeCurrentPage = (event, newValue) => {
    setValue(newValue);
  };

  let pages_props={
    currentPage:value,
    data:data,
    handlerSaveData: handlerSaveData,
    setData: setData,
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
