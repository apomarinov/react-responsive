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
            color: theme.colors.main
        },
        out: {
            color: '#8E1216'
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

export const Status = {
  FULL: 'full',
  DEPLETING: 'depleting',
  OUT: 'out',
};

const Stock = (props) => {
    const {
        data
    } = props;
    const classes = useStyles();
    const isTabletLandscape = isWidthUp('lg', props.width);
    const sameLineIcon = isTabletLandscape || data.description?.length > 0;
    const icon = Icons(classes)[data.status]();
    const marginClass = !sameLineIcon ? classes.iconMargin : '';
    let description = data.description;
    if (data.status === Status.DEPLETING) {
        description = data.quantity + description;
    }
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
                <span className={classes[data.status]}>{description}</span>
            )}
        </React.Fragment>
    );
};

export default withWidth()(Stock);
