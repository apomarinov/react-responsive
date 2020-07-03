import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginTop: '-6px'
        },
        text: {
            fontSize: '0.5em',
            color: theme.colors.navigationMain,
            marginTop: '-14px'
        },
        icon: {
            color: theme.colors.navigationMain
        },
        button: {
            position: "relative",
            float: "right"
        },
        [theme.breakpoints.down('xs')]: {
            text: {
                display: 'none'
            },
        },
    }),
);

const Navigation = (props) => {
    const {
        text,
        children
    } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.root}
                spacing={0}
            >
                <Grid item  className={classes.icon}>
                    <IconButton>
                        {children}
                    </IconButton>
                </Grid>
                <Grid item className={classes.text}>
                    {text}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Navigation;
