import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
    createStyles({
        marginLeft: {
            margin: "0 0 0 7px"
        },
        marginZero: {
            margin: 0
        },
        invertedButton: {
            backgroundColor: 'white',
            border: `2px solid #${theme.colors.button.background}`
        }
    }),
);

const StyledButton = withStyles((theme) => ({
    root: {
        color: "black",
        borderRadius: '30px',
        textTransform: 'none',
        backgroundColor: theme.colors.button.background,
        '&:hover': {
            backgroundColor: theme.colors.button.background,
        },
    },
    startIcon: { }
}))(Button);

const InvertedButton = withStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        border: `2px solid ${theme.colors.button.background}`,
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    startIcon: { }
}))(StyledButton);

const CustomButton = (props) => {
    const {noMargin, inverted, ...btnProps} = props;
    const classes = useStyles();
    let btnClass = classes.marginLeft;
    if (props.children || noMargin) {
        btnClass = classes.marginZero;
    }
    return (
        <React.Fragment>
            {inverted ? (
                <InvertedButton
                    {...btnProps}
                    disableElevation
                    classes={{startIcon: btnClass}}
                >
                    {props.children}
                </InvertedButton>
            ) : (
                <StyledButton
                    {...btnProps}
                    disableElevation
                    classes={{startIcon: btnClass}}
                >
                    {props.children}
                </StyledButton>
            )}
        </React.Fragment>
    );
};

export default CustomButton;
