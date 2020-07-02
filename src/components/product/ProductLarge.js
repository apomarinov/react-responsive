import React, {useState} from 'react';
import {isWidthDown} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";
import useStyles from "./styles";
import Description from "./Description";
import Buttons from "./Buttons";
import Details from "./Details";

const ProductLarge = (props) => {
    const {
        product
    } = props;
    const classes = useStyles();
    const isTablet = isWidthDown('md', props.width);
    const detailsCols = isTablet ? 12 : 6;

    const [quantity, setQuantity] = useState(1);
    const modifyQuantity = (value) => {
        let modified = quantity + value;
        if (modified > product.stock.quantity) {
            return;
        }
        setQuantity(modified < 1 ? 1 : modified);
    }

    return (
        <div className={classes.root}>
            <Paper elevation={0} square>
                {product.badgeText?.length && (
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
                        <Grid item xs={4}>
                            <div className={classes.cover}>
                                <img src={product.image} alt={product.name} className={classes.image}/>
                                {product.isProductOfTheYear && (
                                    <img src="images/product-of-the-year.png" alt="Product of The Year" className={classes.productOfTheYearBadge}/>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={8} className={classes.productInfo}>
                            <Grid
                                container
                                direction="column"
                                alignItems="stretch"
                                justify="space-between"
                                spacing={1}
                            >
                                <Grid item>
                                    <strong className={classes.name}><u>{product.name}</u></strong>
                                </Grid>
                                <Grid item>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                        className={classes.details}
                                        spacing={1}
                                    >
                                        <Grid item xs={detailsCols}>
                                            <Description product={product}/>
                                        </Grid>
                                        <Grid item xs={detailsCols}>
                                            <Details product={product} quantity={quantity}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {!isTablet && (
                                    <Grid item>
                                        <Buttons
                                            modifyQuantity={modifyQuantity}
                                            product={product}
                                            quantity={quantity}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        {isTablet && (
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

export default withWidth()(ProductLarge);
