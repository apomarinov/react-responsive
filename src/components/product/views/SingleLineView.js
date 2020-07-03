import Stock, {Status} from "../../Stock";
import React from "react";
import Grid from "@material-ui/core/Grid";
import PriceSegment from "../../price/PriceSegment";
import QuantitySelector from "../../QuanitySelector";
import AddToCartButton from "../../buttons/AddToCartButton";

const SingleLineView = ({product, quantity, classes, priceDetails, isDesktop, modifyQuantity}) => {
    const inStock = product.stock.status !== Status.OUT;
    return (
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
                <AddToCartButton inStock={inStock} noText={isDesktop}/>
            </Grid>
        </React.Fragment>
    );
}

export default SingleLineView;
