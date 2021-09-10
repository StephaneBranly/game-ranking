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
    players: [],
    games: []
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


  const handlerLoadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {   
      if(e.target?.result)
      {
        const data = JSON.parse(e.target.result as string);
        setData(data);  
      }
    };
    if(e.target?.files)
    {
      reader.readAsText(e.target.files[0]);
    }
  };


  const handleChangeCurrentPage = (event: EventListener, newValue: string) => {
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
        <Footer {...footer_prop}></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;