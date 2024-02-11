import { InputBase,Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width : 38%;
    border-radius : 2px;
    margin-left : 10px;
    display: flex;
`;

const SearchIconWrapper = styled(Box)`
    color : #808080;
    margin-left : 345px;
    padding : 5px;
    display : flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;
`



const Search = () => {


    return(
        <SearchContainer>
            <InputBase placeholder='Search for products' 
             />
            <SearchIconWrapper>
               <SearchIcon/> 
            </SearchIconWrapper>
        </SearchContainer>
    )
}
export default Search;