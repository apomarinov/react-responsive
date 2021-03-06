import React from "react";
import CustomButton from "./CustomButton";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconSuperscript from "../IconSuperscript";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        minWidth: {
                width: '140px'
        }
    })
);

const AddToCartButton = (props) => {
    const {
        inStock,
        noText
    } = props;
    const classes = useStyles();
    const buttonClass = noText ? '' : classes.minWidth;
    return (
        <React.Fragment>
            {inStock ? (
                <CustomButton
                    variant="contained"
                    className={classes.button}
                    startIcon={
                        <IconSuperscript
                            icon={<ShoppingCartSharpIcon fontSize="small"/>}
                            superscript={<AddCircleIcon style={{ fontSize: 13 }}/>}
                        />
                    }
                >
                    {noText ? '' : 'Add to Cart'}
                </CustomButton>
            ) : (
                <CustomButton
                    variant="contained"
                    className={`${classes.button} ${buttonClass}`}
                    startIcon={<NotificationsIcon/>}
                    inverted
                    noMargin
                >
                    {noText ? '' : 'Notify Me!'}
                </CustomButton>
            )}
        </React.Fragment>
    );
};

export default AddToCartButton;
