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
    })
);

const AddToCartButton = (props) => {
    const {
        inStock,
        noText
    } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            {inStock ? (
                <CustomButton
                    variant="contained"
                    color="default"
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
                    color="default"
                    className={classes.button}
                    startIcon={<NotificationsIcon/>}
                    inverted
                    noMargin
                />
            )}
        </React.Fragment>
    );
};

export default AddToCartButton;
