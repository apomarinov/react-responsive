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
        }
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
    const textClass = boldValue ? classes.boldValue : '';
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
                    <span style={{color: infoColor}}>
                        {infoText}
                    </span>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default withWidth()(PriceSegment);
