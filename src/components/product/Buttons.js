import React from "react";
import Grid from "@material-ui/core/Grid";
import QuantitySelector from "../QuanitySelector";
import {Status} from "../common/Stock";
import AddToCartButton from "../common/buttons/AddToCartButton";

const Buttons = (props) => {
    const {
        quantity,
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
                    <AddToCartButton inStock={product.stock.status !== Status.OUT}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Buttons;
