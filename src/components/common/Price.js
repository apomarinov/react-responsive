import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthUp} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Stock from "./Stock";

const useStyles = makeStyles((theme) =>
    createStyles({
        boldValue: {
            fontWeight: 'bold',
            fontSize: '1.5em'
        }
    }),
);

const Price = (props) => {
    const {
        children,
        product,
        quantity,
        singleLinePrice,
    } = props;
    const classes = useStyles();
    const useSingleLineTotal = quantity && product.discount?.modifier > 0;
    const price = product.price.value;
    const currency = product.price.currency;
    let total = price * quantity;
    let savingsText = null;
    if (quantity >= product.discount?.condition?.quantity) {
        let savings = total;
        total *= product.discount.modifier;
        savings -= total;
        savingsText = `Save ${currency + savings}!`;
    }
    const priceText = currency + price;
    const totalText = currency + total;
    return (
        <React.Fragment>
            <Grid item>
                {children}
                <div>
                    Price
                    {singleLinePrice && (
                        <span style={{marginLeft: '5px'}}>
                            {priceText}
                        </span>
                    )}
                </div>
                {!singleLinePrice && (
                    <span>{priceText}</span>
                )}
            </Grid>
            <Grid item>
                <div>
                    Total
                    {useSingleLineTotal && (
                        <span className={classes.boldValue} style={{marginLeft: '5px'}}>
                            {totalText}
                        </span>
                    )}
                </div>
                {!useSingleLineTotal && (
                    <span className={classes.boldValue}>
                        {totalText}
                    </span>
                )}
                {useSingleLineTotal && (
                    <span style={{color: 'red'}}>
                        {savingsText}
                    </span>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default withWidth()(Price);
