import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, isWidthDown} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import withWidth from "@material-ui/core/withWidth";
import SearchButton from "./SearchButton";

const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            width: '93%',
            height: '36px',
            border: `1px solid ${theme.colors.main}`,
            borderRadius: '40px',
            fontSize: '0.8em',
            paddingLeft: '15px',
            outline: 'none'
        },
        button: {
            position: "relative",
            width: '93%',
            "& div": {
                backgroundColor: theme.colors.button.background,
                position: "absolute",
                right: "-16px",
                border: "none",
                borderRadius: "30px",
                height: "12px",
                width: "12px",
            }
        },
        [theme.breakpoints.up('sm')]: {
            button: {
                marginTop: "-2.4em",
            },
        },
        buttonMargin: {
            marginTop: "-1.6em",
        }
    }),
);

const SearchField = (props) => {
    const classes = useStyles();
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const isMobile = isWidthDown('xs', props.width)
    const showSearch = isMobile && showMobileSearch || !isMobile;
    const search = () => {
        if (showSearch) {
            // search
            console.log('search');
            return;
        }

        setShowMobileSearch(true);
        if (props.onShowMobile) {
            props.onShowMobile();
        }
    }
    return (
        <div>
            {showSearch && (
                <input type="text" className={classes.input} placeholder="Search"/>
            )}
            <div className={classes.button}>
                <SearchButton
                    component="div"
                    onClick={search}
                    className={showMobileSearch && isMobile ? classes.buttonMargin : ''}
                >
                    <SearchIcon/>
                </SearchButton>
            </div>
        </div>
    );
}

export default withWidth()(SearchField);
