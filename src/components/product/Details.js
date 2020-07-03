import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthDown} from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Stock from "../Stock";
import Price from "../price/Price";
import PriceSegment from "../price/PriceSegment";


const Details = withWidth()((props) => {
    const {
        product,
        quantity,
        price
    } = props;
    const isTablet = isWidthDown('md', props.width);
    return (
        <React.Fragment>
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
                <Price product={product} quantity={quantity} {...price}>
                    {!isTablet && (
                        <Stock data={product.stock}/>
                    )}
                </Price>
            </Grid>
        </React.Fragment>
    );
});

export default Details;
