import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xl: 1367,
            lg: 1025,
            md: 769,
            sm: 376,
            xs: 0
        },
    },
    colors: {
        main: '#9C9D9D',
        buttonBackground: '#FFA500'
    }
})

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Navigation/>
        </ThemeProvider>
    </div>
  );
}

export default App;
