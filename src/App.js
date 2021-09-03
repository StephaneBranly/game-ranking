import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Pages from './components/pages/Pages'
import React from 'react';

import { createMuiTheme, ThemeProvider, createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00996e",
    },
    secondary: {
      main: "#83fc97",
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
   
  }),
);

function App() {
  let save = {
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



  const classes = useStyles(); 

  const [value, setValue] = React.useState('summary');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Pages value_currentPage={value} save={save}></Pages>
        <Footer className={classes.footer} handleChange_currentPage={handleChange} value_currentPage={value}></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
