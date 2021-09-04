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
    App: {
      paddingBottom: theme.spacing(15)
    }
  }),
);

function App() {
  let datatmp = {
    players: 
    [
      { 
        uuid: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        username: "BranlySt",
        last_update: "202108291455",
        color: "#AAFB00",
      }
    ]
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


  const handlerLoadData = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = JSON.parse(e.target.result);
      console.log(data);
      setData(data);
    };

    reader.readAsText(e.target.files[0]);
  };


  const handleChangeCurrentPage = (event, newValue) => {
    setValue(newValue);
  };

  let pages_props={
    currentPage:value,
    data:data,
    handlerSaveData: handlerSaveData,
    handlerLoadData: handlerLoadData,
    setData: setData,
  }
  let footer_prop={
    handleChangeCurrentPage:handleChangeCurrentPage,
    currentPage:value
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header></Header>
        <Pages {...pages_props}></Pages>
        <Footer className={classes.Footer} {...footer_prop}></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;