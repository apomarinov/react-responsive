import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles/styles";
import { isWidthDown } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Stock, {Status} from "../Stock";
import PriceSegment from "../price/PriceSegment";
import DetailsLarge from "./DetailsLarge";
import Buttons from "./Buttons";
import QuantitySelector from "../QuanitySelector";
import AddToCartButton from "../buttons/AddToCartButton";
import Price from "../price/Price";

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

const ProductInfo = withWidth()((props) => {
    const {
        product,
        quantity,
        showBottomButtons,
        modifyQuantity,
        singleLineView
    } = props;
    const inStock = product.stock.status !== Status.OUT;
    const classes = useStyles(product, singleLineView);
    const isTablet = isWidthDown('md', props.width);
    const priceDetails = getPriceDetails(product, quantity, !isTablet);

    return (
        <React.Fragment>
            <Grid
                container
                direction={product.image ? "column" : "row"}
                alignItems={singleLineView ? "center" : "stretch"}
                justify="space-between"
                spacing={1}
            >
            {product.image && (
                <React.Fragment>
                    <Grid item>
                        <strong className={classes.name}><u>{product.name}</u></strong>
                    </Grid>
                    <Grid item>
                        <DetailsLarge
                            priceDetails={priceDetails}
                            quantity={quantity}
                            product={product}
                        />
                    </Grid>
                    {!showBottomButtons && (
                        <Grid item>
                            <Buttons
                                modifyQuantity={modifyQuantity}
                                product={product}
                                quantity={quantity}
                            />
                        </Grid>
                    )}
                </React.Fragment>
            )}
            {!product.image && !singleLineView && (
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
            )}
            {singleLineView && (
                <React.Fragment>
                    <Grid item xs={2}>
                        <strong className={classes.name}><u>{product.name}</u></strong>
                    </Grid>
                    {product.isApproved && (
                        <Grid item xs={1}>
                            <img
                                src="/images/approved.png"
                                alt="Approved product"
                                className={classes.approved}
                            />
                        </Grid>
                    )}
                    <Grid item xs={2}>
                        {product.descriptionShort}
                    </Grid>
                    <Grid item xs={1}>
                        <Stock data={product.stock}/>
                    </Grid>
                    <Grid item xs={1}>
                        <PriceSegment
                            label="Price"
                            singleLine={priceDetails.singleLinePrice}
                            text={priceDetails.priceText}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <QuantitySelector
                            disabled={!inStock}
                            quantity={quantity}
                            onChange={modifyQuantity}
                        />
                    </Grid>
                    <Grid item/>
                    <Grid item xs={1}>
                        <PriceSegment
                            label="Total"
                            singleLine
                            boldValue
                            text={priceDetails.totalText}
                            infoText={priceDetails.savingsText}
                            infoColor="red"
                        />
                    </Grid>
                    <Grid item >
                        <AddToCartButton inStock={inStock} noText/>
                    </Grid>
                </React.Fragment>
            )}
            </Grid>
        </React.Fragment>
    );
});

export default ProductInfo;
