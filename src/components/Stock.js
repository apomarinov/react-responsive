import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
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
            color: theme.palette.primary.main
        },
        out: {
            color: '#8E1216',
            transform: "rotate(45deg)",
        },
        outX: {
            position: 'absolute',
            color: 'white',
            transform: "rotate(133deg)",
            fontSize: '13px',
            top: '1px',
            left: '1px',
        },
        icon: {
            fontSize: '15px',
        },
        iconMargin: {
            marginLeft: '30%',
        },
        infoText: {
            fontSize: '0.8em',
        },
        depletingText: {
            color: 'black',
        }
    }),
);

const Icons = (classes) => ({
    full: () => (<CheckCircleIcon className={`${classes.full} ${classes.icon}`} />),
    depleting: () => (<RemoveCircleIcon className={`${classes.depleting} ${classes.icon}`} />),
    out: () => (<span style={{position: 'relative'}}>
        <RemoveCircleIcon className={`${classes.out} ${classes.icon}`} />
        <RemoveSharpIcon className={classes.outX} />
    </span>),
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
    let infoClass = classes[data.status];
    let description = data.description;
    if (data.status === Status.DEPLETING) {
        description = data.quantity + description;
        infoClass = classes.depletingText;
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
                <b className={`${infoClass} ${classes.infoText}`}>{description}</b>
            )}
        </React.Fragment>
    );
};

export default withWidth()(Stock);
