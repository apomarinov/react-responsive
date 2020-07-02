import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProductLarge from "./product/ProductLarge";
import withWidth from "@material-ui/core/withWidth";


const useStyles = makeStyles((theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            scrollView: {
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'scroll',
                backgroundColor: theme.colors.background,
                width: '95%',
                position: 'absolute',
                display: 'flex'
            },
            gridList: {
                marginBottom: 0,
                flexWrap: 'nowrap',
                transform: 'translateZ(0)',
            }
        },
    }),
);

const RecommendedProductView = (props) => {
    const classes = useStyles();
    const isTablet = isWidthUp('md', props.width);
    const cols = isTablet ? 6 : 12;
    const {
        products
    } = props;
    return (
        <React.Fragment>
            <div className={classes.scrollView}>
                <Grid container className={classes.gridList} spacing={2}>
                    {products.map((product) =>
                        <Grid key={product.id} item sm={cols}>
                            <ProductLarge product={product}/>
                        </Grid>
                    )}
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default withWidth()(RecommendedProductView);
