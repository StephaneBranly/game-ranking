import Header from './components/header/Header'
import Footer from './components/footer/Footer'

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
  const classes = useStyles(); 

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Footer className={classes.footer}></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
