import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProductLarge from "./product/ProductLarge";
import RecommendedProductView from "./RecommendedProductView";
import products from '../products.json'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%'
        }
    }),
);

const ProductView = (props) => {
    const {
        title
    } = props;
    const classes = useStyles();
    const recommendedProducts = products.recommended.map((product) => {
        return Object.assign(Object.create(products.product), product);
    });
    return (
        <React.Fragment>
            <Grid
                container
                justify="center"
                spacing={2}
            >
                <Grid item xs={12}>
                    <h1>{title}</h1>
                </Grid>
                <Grid item xs={12}>
                    <div style={{width:'100%', height: '60px', backgroundColor: 'red'}}>filters</div>
                </Grid>
                <Grid item xs={12}>
                    <RecommendedProductView products={recommendedProducts}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProductView;
