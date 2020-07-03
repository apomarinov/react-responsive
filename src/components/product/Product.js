import React, {useState} from 'react';
import {isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles/styles";
import Buttons from "./Buttons";
import {Status} from "../Stock";
import ProductInfo from "./ProductInfo";

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
                            <ProductInfo
                                product={product}
                                quantity={quantity}
                                modifyQuantity={modifyQuantity}
                                singleLineView={singleLineView}
                                showBottomButtons={showBottomButtons}
                            />
                        </Grid>
                        {showBottomButtons && (
                            <Grid item xs={12} className={`${classes.productInfo} ${classes.buttons}`}>
                                <Buttons
                                    product={product}
                                    quantity={quantity}
                                    modifyQuantity={modifyQuantity}
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
