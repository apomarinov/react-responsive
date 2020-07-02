import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '175px',
            position: 'relative'
        },
        badgeText: {
            position: 'absolute',
            height: '17px',
            backgroundColor: theme.colors.button.background,
            padding: "2px 11px",
            top: '-11px',
            fontWeight: 'bold',
            fontSize: '12px'
        },
        clipMask: {
            display: 'none',
            position: 'absolute',
            height: '17px',
            width: '100%',
            backgroundColor: theme.colors.background,
            top: '0px',
        },
        productInfo: {
            paddingTop: "20px",
            paddingRight: "10px"
        },
        image: {
            padding: "36px 0px 0px 30px"
        },
        name: {
            fontSize: "1.2em"
        },
        details: {
            fontSize: "12px"
        },
        approved: {
            width: '65px',
            height: '52px'
        },
        cover: {
            position: 'absolute'
        },
        productOfTheYearBadge: {
            position: 'relative',
            top: '-70px',
            right: '22px',
        },
        buttons: {
            position: 'absolute',
            bottom: 0,
            width: '100%'
        },
        [theme.breakpoints.down('md')]: {
            image: {
                width: '105px',
                height: '106px',
                padding: "34px 0px 0px 1px"
            },
            productInfo: {
                padding: "10px",
                paddingLeft: "20px"
            },
            root: {
                minHeight: '216px',
                minWidth: '300px'
            },
            name: {
                fontSize: "1em"
            },
        },
        [theme.breakpoints.down('sm')]: {
            clipMask: {
                display: 'block',
            },
            image: {
                width: '103px',
                height: '104px',
                padding: "65px 0px 0px 4px"
            },
            badgeText: {
                top: '5px',
            },
            productInfo: {
                padding: "30px 10px 10px 10px"
            },
            buttons: {
                padding: "0 0 0 10px"
            },
            name: {
                fontSize: "0.9em"
            },
            productOfTheYearBadge: {
                top: '-80px',
                right: '28px',
            },
            root: {
                minHeight: '236px',
            }
        }
    }),
);

export default useStyles;
