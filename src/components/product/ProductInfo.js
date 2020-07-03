import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles/styles";
import { isWidthDown } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageView from "./views/ImageView";
import NoImageView from "./views/NoImageView";
import SingleLineView from "./views/SingleLineView";

const ProductInfo = withWidth()((props) => {
    const {
        product,
        quantity,
        singleLineView
    } = props;
    const classes = useStyles(product, singleLineView);
    const isTablet = isWidthDown('md', props.width);
    const priceDetails = getPriceDetails(product, quantity, !isTablet);
    const imageView = product.image?.length;

    return (
        <React.Fragment>
            <Grid
                container
                direction={imageView ? "column" : "row"}
                alignItems={singleLineView ? "center" : "stretch"}
                justify="space-between"
                spacing={1}
            >
            {imageView && (
                <ImageView
                    classes={classes}
                    isTablet={isTablet}
                    priceDetails={priceDetails}
                    {...props}
                />
            )}
            {!imageView && !singleLineView && (
                <NoImageView
                    isTablet={isTablet}
                    classes={classes}
                    priceDetails={priceDetails}
                    {...props}
                />
            )}
            {singleLineView && (
                <SingleLineView
                    classes={classes}
                    priceDetails={priceDetails}
                    {...props}
                />
            )}
            </Grid>
        </React.Fragment>
    );
});

const getPriceDetails = (product, quantity, singleLinePrice) => {
    let useSingleLineTotal = false;
    const price = product.price.value;
    const currency = product.price.currency;
    let total = price * quantity;
    let savingsText = null;
    if (quantity >= product.discount?.condition?.quantity) {
        useSingleLineTotal = true;
        let savings = total;
        total *= product.discount.modifier;
        savings -= total;
        savingsText = `Save ${currency + savings}!`;
    }
    const priceText = currency + price;
    const totalText = currency + total;
    return {
        singleLinePrice,
        priceText,
        useSingleLineTotal,
        totalText,
        savingsText
    };
}

export default ProductInfo;
