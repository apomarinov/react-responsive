import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {DefaultStyle, NoImageStyle, SingleLineViewStyle} from "./custom";

const getCustomStyle = (product, singleLineView) => {
    if(singleLineView) {
        return SingleLineViewStyle;
    }
    if (!product.image) {
        return NoImageStyle;
    }
    return DefaultStyle;
};

const useStyles = (product, singleLineView = false) => {
    const style = getCustomStyle(product, singleLineView);
    return makeStyles((theme) =>
        createStyles({
            root: {
                height: style.height.default,
                position: 'relative'
            },
            badgeText: {
                position: 'absolute',
                height: '17px',
                backgroundColor: theme.colors.main,
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
                backgroundColor: theme.colors.accent,
                top: '0px',
            },
            productInfo: style.productInfo.default,
            image: {
                padding: "36px 0px 0px 30px"
            },
            name: {
                fontSize: style.name.fontSize
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
                productInfo: style.productInfo.md,
                root: {
                    height: style.height.md,
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
                productInfo: style.productInfo.sm,
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
                    height: style.height.sm,
                }
            }
        }),
    )();
}

export default useStyles;
