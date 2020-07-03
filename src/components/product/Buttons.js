import React from "react";
import Grid from "@material-ui/core/Grid";
import QuantitySelector from "../QuanitySelector";
import {Status} from "../Stock";
import AddToCartButton from "../buttons/AddToCartButton";

const Buttons = (props) => {
    const {
        quantity,
        noText,
        product
    } = props;
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={1}>
                    <QuantitySelector
                        disabled={product.stock.status === Status.OUT}
                        quantity={quantity}
                        onChange={props.modifyQuantity}
                    />
                </Grid>
                <Grid item>
                    <AddToCartButton noText={noText} inStock={product.stock.status !== Status.OUT}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Buttons;
