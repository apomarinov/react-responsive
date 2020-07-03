import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles/styles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Description from "./Description";
import Details from "./Details";

const DetailsLarge = withWidth()((props) => {
    const {
        priceDetails,
        quantity,
        product
    } = props;
    const classes = useStyles(product);
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.details}
                spacing={1}
            >
                <Grid item xs={12} lg={6}>
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
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Details product={product} quantity={quantity} price={priceDetails}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
});

export default DetailsLarge;
