import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";

const SearchButton = withStyles((theme) => ({
    root: {
        color: "black",
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}))(IconButton);

export default SearchButton;
