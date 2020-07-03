import React from "react";
import Grid from "@material-ui/core/Grid";
import Stock from "../../Stock";
import Price from "../../price/Price";
import Buttons from "../Buttons";

const ImageView = ({product, quantity, showBottomButtons, isTablet, classes, priceDetails, modifyQuantity}) => {
    return (
        <React.Fragment>
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
                </Grid>
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
    );
}

export default ImageView;
