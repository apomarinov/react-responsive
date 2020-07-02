import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthDown} from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Stock from "../common/Stock";
import Price from "../common/Price";


const Details = withWidth()((props) => {
    const {
        product
    } = props;
    const isTablet = isWidthDown('md', props.width);
    return (
        <React.Fragment>
            {isTablet ? (
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >
                    <Grid item>
                        <Stock data={product.stock}/>
                    </Grid>
                    <Price product={product}/>
                </Grid>
            ) : (
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-around"
                >
                    <Price singleLinePrice product={product}>
                        <Stock data={product.stock}/>
                    </Price>
                </Grid>
            )}
        </React.Fragment>
    );
});

export default Details;
