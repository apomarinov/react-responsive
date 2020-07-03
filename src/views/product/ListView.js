import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Product from "../../components/product/Product";
import RecommendedProductView from "./RecommendedView";
import dataSource from '../../dataSource.json'
import withWidth from "@material-ui/core/withWidth";
import CustomButton from "../../components/buttons/CustomButton";
import { withTheme } from '@material-ui/core/styles';
import Filters from "../../components/Filters";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) =>
    createStyles({
        recommendedView: {
            height: '190px',
        },
        title: {
            fontSize: '22px',
            margin: '15px 0 0 0'
        },
        loadMoreButton: {
            width: '100%',
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

const GetProductList = (dataSource, from, to) => {
    return dataSource.list.slice(from, to).map((product) => {
        return Object.assign(Object.create(dataSource.product), product);
    })
};

const ListView = (props) => {
    const {
        title,
        theme
    } = props;
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
    const recommendedProducts = dataSource.recommended.map((product) => {
        return Object.assign(Object.create(dataSource.product), product);
    });

    let itemsPerPage = 3;
    if (isWidthUp('md', props.width) && isWidthDown('md', props.width)) {
        itemsPerPage = 4;
    }
    const [productList, setProductList] = useState(GetProductList(dataSource, 0, itemsPerPage));

    const loadMoreResults = () => {
        let next = page + 1;
        let newPage = GetProductList(dataSource, 0, itemsPerPage * next);
        let nextPage = GetProductList(dataSource, 0, itemsPerPage * (next + 1));
        if (nextPage.length === newPage.length) {
            setShowLoadMoreButton(false);
        }
        setPage(next);
        setProductList(newPage);
    }

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
                    <Filters/>
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
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
                {showLoadMoreButton && (
                    <Grid item xs={12}>
                        <CustomButton
                            className={classes.loadMoreButton}
                            mainColor="black"
                            secondaryColor={theme.palette.secondary.main}
                            variant="contained"
                            borderSize={1}
                            onClick={() => loadMoreResults()}
                            inverted
                        >
                            <b>Load More Results</b>
                        </CustomButton>
                    </Grid>
                )}
            </Grid>
        </React.Fragment>
    );
}

export default withTheme(withWidth()(ListView));
