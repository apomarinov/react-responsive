import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, isWidthDown} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NavButton from "./NavButton";
import PersonIcon from '@material-ui/icons/Person';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import SearchField from "./SearchField";
import Badge from "@material-ui/core/Badge";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) =>
    createStyles({
        nav: {
            width: '100%',
            height: '80px',
            backgroundColor: '#fff',
            padding: '15px',
            boxShadow: "0px 0px 23px 6px rgba(0,0,0,0.15)"
        },
        logo: {
            height: '100%',
            width: '50px',
            backgroundColor: theme.colors.main
        },
        navSection: {
            height: '100%'
        },
        searchField: {
            paddingTop: '5px'
        },
        customBadge: {
            backgroundColor: theme.colors.buttonBackground,
        }
    }),
);

const Navigation = (props) => {
    const classes = useStyles();
    const [hideButtons, setHideButtons] = useState(false);
    const isMobile = isWidthDown('xs', props.width);
    return (
        <React.Fragment>
            <header>
                <Grid
                    component="nav"
                    className={classes.nav}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className={classes.navSection}>
                        <div className={classes.logo}/>
                    </Grid>
                    <Grid
                        item
                        className={`${classes.navSection} ${classes.searchField}`}
                        xs={hideButtons ? 9 : 1 }
                        sm={4}>
                        <SearchField onShowMobile={() => setHideButtons(true)}/>
                    </Grid>
                    {(!hideButtons || !isMobile) && (
                        <Grid item className={classes.navSection}>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Grid item>
                                    <NavButton text={"Account"}>
                                        <PersonIcon fontSize="large"/>
                                    </NavButton>
                                </Grid>
                                <Grid item>
                                    <NavButton text={"Orders"}>
                                        <DescriptionSharpIcon fontSize="large"/>
                                    </NavButton>
                                </Grid>
                                <Grid item>

                                    <NavButton text={"Cart"}>
                                        <Badge color="error" variant="dot" classes={{ badge: classes.customBadge }}>
                                            <ShoppingCartSharpIcon fontSize="large"/>
                                        </Badge>
                                    </NavButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </header>
        </React.Fragment>
    );
}

export default withWidth()(Navigation);
