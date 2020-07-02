import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";

const SearchButton = withStyles((theme) => ({
    root: {
        color: "black",
        backgroundColor: theme.colors.button.background,
        '&:hover': {
            backgroundColor: theme.colors.button.background,
        },
    },
}))(IconButton);

export default SearchButton;
