import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthUp} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) =>
    createStyles({
        full: {
            color: 'green'
        },
        depleting: {
            transform: "rotate(90deg)",
            color: theme.colors.button.background
        },
        out: {
            color: 'red'
        },
        icon: {
            fontSize: '15px',
        },
        iconMargin: {
            marginLeft: '30%',
        }
    }),
);

const Icons = (classes) => ({
    full: () => (<CheckCircleIcon className={`${classes.full} ${classes.icon}`} />),
    depleting: () => (<RemoveCircleIcon className={`${classes.depleting} ${classes.icon}`} />),
    out: () => (<CheckCircleIcon className={`${classes.out} ${classes.icon}`} />),
});

const Stock = (props) => {
    const {
        data
    } = props;
    const classes = useStyles();
    const isTabletLandscape = isWidthUp('lg', props.width);
    const sameLineIcon = isTabletLandscape || data.description?.length > 0;
    const icon = Icons(classes)[data.status]();
    const marginClass = !sameLineIcon ? classes.iconMargin : '';
    return (
        <React.Fragment>
            <div>
                Stock
                {sameLineIcon && icon}
            </div>
            <div className={marginClass}>
                {!sameLineIcon && icon}
            </div>
            {data.description && (
                <span className={classes[data.status]}>{data.description}</span>
            )}
        </React.Fragment>
    );
};

export default withWidth()(Stock);
