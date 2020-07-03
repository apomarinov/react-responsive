import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Select from "./Select";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            fontSize: '13px',
        },
        chip: {
            padding: '5px',
            height: '30px'
        }
    }),
);

const Filters = () => {
    const classes = useStyles();
    const sortOptions = [
        {
            value: 'popularity',
            text: 'Popularity'
        },
        {
            value: 'relevance',
            text: 'Relevance'
        },
        {
            value: 'new',
            text: 'New'
        },
    ];
    const [sort, setSort] = useState(sortOptions[0]);
    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                spacing={1}
            >
                <Grid item>
                    <span>Selected Filters:</span>&nbsp;
                    <Chip
                        size="small"
                        label="Continental"
                        onDelete={() => {}}
                        variant="outlined"
                        classes={{root: classes.chip}}
                    />
                </Grid>
                <Grid item/>
                <Grid item>
                    <Select
                        label="Sort by:"
                        value={sort}
                        options={sortOptions}
                        onChange={(v) => setSort(v)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Filters;
