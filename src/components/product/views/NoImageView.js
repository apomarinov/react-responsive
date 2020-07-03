import React from "react";
import Grid from "@material-ui/core/Grid";
import Stock from "../../Stock";
import Price from "../../price/Price";

const NoImageView = ({product, quantity, isTablet, classes, priceDetails}) => {
    return (
        <React.Fragment>
            <Grid item xs={7}>
                <strong className={classes.name}><u>{product.name}</u></strong>
            </Grid>
            <Grid item xs={5}>
                {product.descriptionShort}
            </Grid>
            {product.isApproved && (
                <Grid item xs={3}>
                    <img
                        src="/images/approved.png"
                        alt="Approved product"
                        className={classes.approved}
                    />
                </Grid>
            )}
            <Grid item xs={9} lg={6}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify={isTablet ? "space-between" : "space-around"}
                >
                    {isTablet && (
                        <Grid item>
                            <Stock data={product.stock}/>
                        </Grid>
                    )}
                    <Price product={product} quantity={quantity} {...priceDetails}>
                        {!isTablet && (
                            <Stock data={product.stock}/>
                        )}
                    </Price>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default NoImageView;
