import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        superscript: {
            fontSize: '10px',
            position: 'relative',
            top: '-4px',
            left: '-8px',
        },
    }),
);

const IconSuperscript = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {props.icon}
            <span className={classes.superscript}>
                {props.superscript}
            </span>
        </React.Fragment>
    );
};

export default IconSuperscript;
