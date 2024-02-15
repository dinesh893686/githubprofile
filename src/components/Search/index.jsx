import Search from "./Search"
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchInput = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <MagnifyingGlass />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchInput