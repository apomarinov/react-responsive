import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import ListView from "./views/product/ListView";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFA500',
        },
        secondary: {
            main: '#DEDEDE',
        },
    },
    breakpoints: {
        values: {
            xl: 1367,
            lg: 1025,
            md: 769,
            sm: 376,
            xs: 0
        },
    }
})

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header>
                    <Navigation/>
                </header>
                <main>
                    <Container disableGutters={false} maxWidth={false}>
                        <ListView title="Recommended Products"/>
                    </Container>
                </main>
            </ThemeProvider>
        </div>
    );
}

export default App;
