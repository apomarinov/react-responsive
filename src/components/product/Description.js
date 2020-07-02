import useStyles from "./styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Buttons from "./Buttons";

const Description = (props) => {
    const {
        product
    } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                spacing={2}
            >
                {product.isApproved && (
                    <Grid item xs={5}>
                        <img
                            src="/images/approved.png"
                            alt="Approved product"
                            className={classes.approved}
                        />
                    </Grid>
                )}
                <Grid item xs={7}>
                    {product.descriptionShort}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Description;
