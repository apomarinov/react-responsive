import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import ProductView from "./components/ProductView";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
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

const useStyles = makeStyles((theme) =>
    createStyles({
        main: {
            // width: '100%'
        }
    }),
);

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header>
                    <Navigation/>
                </header>
                <main className={classes.main}>
                    <Container disableGutters={false} maxWidth={false}>
                        <ProductView title="Recommended Products"/>
                    </Container>
                </main>
            </ThemeProvider>
        </div>
    );
}

export default App;
