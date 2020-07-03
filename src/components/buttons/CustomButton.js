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
        }
    }),
);

const GetStyledButton = (mainColor = undefined, secondaryColor = undefined) => {
    return withStyles((theme) => {
        mainColor = mainColor || theme.palette.primary.main;
        return {
            root: {
                color: "black",
                borderRadius: '30px',
                textTransform: 'none',
                minWidth: '78px',
                minHeight: '40px',
                backgroundColor: mainColor,
                '&:hover': {
                    backgroundColor: mainColor,
                },
            },
            startIcon: { }
        }
    })(Button)
};

const GetInvertedButton = (mainColor = undefined, secondaryColor = undefined, borderSize = 2) => {
    return withStyles((theme) => {
        mainColor = mainColor || theme.palette.primary.main;
        secondaryColor = secondaryColor || theme.palette.grey['50'];
        return {
            root: {
                backgroundColor: secondaryColor,
                border: `${borderSize}px solid ${mainColor}`,
                '&:hover': {
                    backgroundColor: secondaryColor,
                },
            },
            startIcon: { }
        }
    })(GetStyledButton(mainColor))
};

const CustomButton = (props) => {
    const {
        inverted,
        noMargin,
        borderSize,
        mainColor,
        secondaryColor,
        ...btnProps
    } = props;
    const StyledButton = GetStyledButton(mainColor);
    const InvertedButton = GetInvertedButton(mainColor, secondaryColor, borderSize);
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
