import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            '& label': {
                marginRight: '5px'
            }
        },
        select: {
            border: `1px solid ${theme.palette.secondary.dark}`,
            borderRadius: '16px',
            paddingTop: '5px',
            height: '23px',
            width: '115px',
            paddingLeft: '11px',
            fontSize: '1em',
            outline: 'none',
            backgroundColor: theme.palette.secondary.main,
        },
        icon: {
            position: 'absolute',
            fontSize: '15px',
            right: '13px',
            top: '9px'
        }
    }),
);

const Select = (props) => {
    const {
        label,
        value,
    } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <label>{label}</label>
            <div className={classes.select}>
                {value.text}
                <ExpandMoreIcon className={classes.icon}/>
            </div>
        </div>
    );
}

export default Select;
