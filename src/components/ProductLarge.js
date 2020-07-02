import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '175px'
        },
        [theme.breakpoints.down('sm')]: {
            root: {
                minHeight: '236px',
            },
        },
        [theme.breakpoints.down('xs')]: {
            root: {
                minWidth: '280px'
            },
        },
    }),
);

const ProductLarge = (props) => {
    const {
        text,
        children
    } = props;
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root} square style={{backgroundColor: 'blue'}}>
            <Grid
                container
                direction="column"
                alignItems="center"

                spacing={0}
            >
                <Grid item xs={12}>
                    AAAAAABBBBBBCCCCCDDDDDDEEEEFFFFF
                    {/*<div style={{width:'100px', height: '100px', backgroundColor: 'blue'}}></div>*/}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProductLarge;
