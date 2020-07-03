import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthUp} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Stock from "../Stock";

const useStyles = makeStyles((theme) =>
    createStyles({
        boldValue: {
            fontWeight: 'bold',
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            boldValue: {
                fontSize: '0.8em'
            },
            text: {
                fontSize: '0.8em'
            },
            info: {
                fontSize: '0.8em'
            },
        },
    }),
);

const PriceSegment = (props) => {
    const {
        label,
        children,
        singleLine,
        boldValue,
        text,
        infoText,
        infoColor,
    } = props;
    const classes = useStyles();
    const textClass = boldValue ? classes.boldValue : classes.text;
    return (
        <React.Fragment>
            <Grid item>
                {children}
                <div>
                    {label}
                    {singleLine && (
                        <span className={textClass} style={{marginLeft: '5px'}}>
                            {text}
                        </span>
                    )}
                </div>
                {!singleLine && (
                    <span className={textClass}>
                        {text}
                    </span>
                )}
                {singleLine && (
                    <span style={{color: infoColor}} className={classes.info}>
                        {infoText}
                    </span>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default withWidth()(PriceSegment);
