import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import withWidth from "@material-ui/core/withWidth";
import {createStyles, isWidthDown, isWidthUp} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Stock from "../Stock";
import PriceSegment from "./PriceSegment";

const Price = (props) => {
    const {
        singleLinePrice,
        priceText,
        useSingleLineTotal,
        totalText,
        savingsText
    } = props;
    return (
        <React.Fragment>
            <PriceSegment
                label="Price"
                singleLine={singleLinePrice}
                text={priceText}
            >
                {props.children}
            </PriceSegment>
            <PriceSegment
                label="Total"
                singleLine={useSingleLineTotal}
                boldValue
                text={totalText}
                infoText={savingsText}
                infoColor="red"
            />
        </React.Fragment>
    );
};

export default withWidth()(Price);
