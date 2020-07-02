import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import ProductView from "./components/ProductView";
import Container from "@material-ui/core/Container";

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
        background: '#DEDEDE',
        button: {
            background: '#FFA500'
        }
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
                        <ProductView title="Recommended Products"/>
                    </Container>
                </main>
            </ThemeProvider>
        </div>
    );
}

export default App;
