import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";

const SearchButton = withStyles((theme) => ({
    root: {
        color: "black",
        backgroundColor: theme.colors.main,
        '&:hover': {
            backgroundColor: theme.colors.main,
        },
    },
}))(IconButton);

export default SearchButton;
