import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: '175px'
        },
        productInfo: {
            paddingTop: "30px",
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
        [theme.breakpoints.down('md')]: {
            image: {
                width: '105px',
                height: '106px',
                padding: "34px 0px 0px 1px"
            },
            productInfo: {
                padding: "10px"
            },
            root: {
                minHeight: '236px',
                minWidth: '300px'
            },
            name: {
                fontSize: "1em"
            },
        },
        [theme.breakpoints.down('sm')]: {
            image: {
                width: '103px',
                height: '104px',
                padding: "45px 0px 0px 4px"
            },
            productInfo: {
                padding: "10px"
            },
            name: {
                fontSize: "0.9em"
            },
        }
    }),
);

export default useStyles;
