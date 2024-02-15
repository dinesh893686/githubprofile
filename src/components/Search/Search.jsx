import {styled,alpha} from "@mui/material/styles"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));




export default Search;



