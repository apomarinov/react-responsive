import useStyles from "./styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../CustomButton";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconSuperscript from "../IconSuperscript";
import NotificationsIcon from '@material-ui/icons/Notifications';



const Buttons = (props) => {
    const {
        product
    } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <CustomButton
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<NotificationsIcon/>}
                        inverted
                        noMargin
                    />
                </Grid>
                <Grid item>
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
                        Add to Cart
                    </CustomButton>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Buttons;
