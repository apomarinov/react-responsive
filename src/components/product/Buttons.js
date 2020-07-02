import useStyles from "./styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Buttons;
