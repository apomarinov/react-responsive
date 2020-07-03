import React, {useState} from 'react';
import {isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles/styles";
import Buttons from "./Buttons";
import Details from "./Details";
import DetailsLarge from "./DetailsLarge";
import QuantitySelector from "../QuanitySelector";
import AddToCartButton from "../common/buttons/AddToCartButton";
import Stock, {Status} from "../common/Stock";
import PriceSegment from "../common/price/PriceSegment";

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

const Product = (props) => {
    const {
        product
    } = props;

    const inStock = product.stock.status !== Status.OUT;
    const [quantity, setQuantity] = useState(inStock ? 1 : 0);
    const isTablet = isWidthDown('md', props.width);
    const isTabletLandscape = isWidthUp('lg', props.width);
    const singleLineView = isTabletLandscape && !product.image;
    const classes = useStyles(product, singleLineView);
    const priceDetails = getPriceDetails(product, quantity, !isTablet);
    const showBottomButtons = isTablet && product.image || isTablet && !product.image;
    const infoCols = product.image ? 8 : 12;
    const rootClass = !product.image ? classes.noImageHeight : '';

    const modifyQuantity = (value) => {
        let modified = quantity + value;
        if (modified > product.stock.quantity) {
            return;
        }
        setQuantity(modified < 1 ? 1 : modified);
    }

    return (
        <div className={`${rootClass} ${classes.root}`}>
            <Paper elevation={0} square>
                {product.badgeText?.length > 0 && (
                    <React.Fragment>
                        <span className={classes.clipMask}/>
                        <span className={classes.badgeText}>{product.badgeText}</span>
                    </React.Fragment>
                )}
                <article>
                    <Grid
                        container
                        direction="row"
                        className={classes.root}
                        alignItems="stretch"
                        justify="flex-start"
                        spacing={0}
                    >
                        {product.image && (
                            <Grid item xs={4}>
                                <div className={classes.cover}>
                                    <img src={product.image} alt={product.name} className={classes.image}/>
                                    {product.isProductOfTheYear && (
                                        <img src="images/product-of-the-year.png" alt="Product of The Year" className={classes.productOfTheYearBadge}/>
                                    )}
                                </div>
                            </Grid>
                        )}
                        <Grid item xs={infoCols} className={classes.productInfo}>
                            <Grid
                                container
                                direction={product.image ? "column" : "row"}
                                alignItems={singleLineView ? "center" : "stretch"}
                                justify="space-between"
                                spacing={1}
                            >
                                {/* can combine this in DetailsLarge */}
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
                                            <Details product={product} quantity={quantity} price={priceDetails}/>
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
                        </Grid>
                        {showBottomButtons && (
                            <Grid item xs={12} className={`${classes.productInfo} ${classes.buttons}`}>
                                <Buttons
                                    modifyQuantity={modifyQuantity}
                                    quantity={quantity}
                                    product={product}
                                />
                            </Grid>
                        )}
                    </Grid>
                </article>
            </Paper>
        </div>
    );
}

export default withWidth()(Product);
