import React from 'react';
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
    return (
        <Paper elevation={0} className={classes.root} square>
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
                        <img src={product.image} alt={product.name} className={classes.image}/>
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
                                        <Details product={product}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {!isTablet && (
                                <Grid item>
                                    <Buttons product={product}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    {isTablet && (
                        <Grid item xs={12} className={classes.productInfo}>
                            <Buttons product={product}/>
                        </Grid>
                    )}
                </Grid>
            </article>
        </Paper>
    );
}

export default withWidth()(ProductLarge);
