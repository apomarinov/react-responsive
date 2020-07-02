import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '120px',
            height: '40px',
            paddingRight: '2px',
            backgroundColor: theme.colors.background
        },
        centerText: {
            textAlign: 'center'
        },
        marginZero: {
            margin: 0
        }
    }),
);

const PlusButton = withStyles((theme) => ({
    root: {
        color: "black",
        minWidth: '40px',
        height: '38px',
        margin: 1,
        fontSize: '15px',
        borderRadius: '0px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    startIcon: { }
}))(Button);

const QuantitySelector = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <PlusButton
                        startIcon={<RemoveIcon fontSize="small"/>}
                        classes={{startIcon: classes.marginZero}}
                        onClick={() => props.onChange(-1)}
                    />
                </Grid>
                <Grid item xs={4} className={classes.centerText}>
                    {props.quantity}
                </Grid>
                <Grid item xs={4}>
                    <PlusButton
                        startIcon={<AddIcon fontSize="small"/>}
                        classes={{startIcon: classes.marginZero}}
                        onClick={() => props.onChange(1)}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default QuantitySelector;
