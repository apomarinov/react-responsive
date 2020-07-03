import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Product from "../../components/product/Product";
import RecommendedProductView from "./RecommendedView";
import dataSource from '../../dataSource.json'
import withWidth from "@material-ui/core/withWidth";


const useStyles = makeStyles((theme) =>
    createStyles({
        recommendedView: {
            height: '190px',
        },
        title: {
            fontSize: '22px',
        },
        [theme.breakpoints.down('md')]: {
            recommendedView: {
                height: '230px',
            },
        },
        [theme.breakpoints.down('sm')]: {
            recommendedView: {
                height: '250px',
            },
        },
    }),
);

const ListView = (props) => {
    const {
        title
    } = props;
    const classes = useStyles();

    let page = 1;
    let itemsPerPage = 3;
    if (isWidthUp('md', props.width) && isWidthDown('md', props.width)) {
        itemsPerPage = 4;
    }

    const recommendedProducts = dataSource.recommended.map((product) => {
        return Object.assign(Object.create(dataSource.product), product);
    });
    const productList = dataSource.list.slice(0, itemsPerPage).map((product) => {
        return Object.assign(Object.create(dataSource.product), product);
    });
    return (
        <React.Fragment>
            <Grid
                container
                justify="center"
                spacing={2}
            >
                <Grid item xs={12}>
                    <h1 className={classes.title}>{title}</h1>
                </Grid>
                <Grid item xs={12}>
                    <div style={{width:'100%', height: '60px', backgroundColor: 'red'}}>filters</div>
                </Grid>
                <Grid item xs={12} className={classes.recommendedView}>
                    <RecommendedProductView products={recommendedProducts}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        justify="space-around"
                        spacing={2}
                    >
                        {productList.map((product) =>
                            <Grid key={product.id} item xs={12} md={6} lg={12}>
                                <Product product={product}/>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withWidth()(ListView);
