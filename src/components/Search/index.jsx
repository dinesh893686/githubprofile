
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState,useEffect } from "react";
import axios from "axios";
import _ from "lodash"
const SearchInput = ({onSearch,userRepos}) => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState('');
  const [repoData, setRepoData] = useState('');
  const delayedSetUserName = _.debounce((value) => setUserName(value), 1000);

  useEffect(() => {
    // Fetch user data when userName state changes
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        console.log(response)
                        
               //setUserData(response.data); // Update user data state
               onSearch(response.data)
               const repoDataResp=await axios.get(response.data.repos_url);
               console.log(repoDataResp)
               userRepos(repoDataResp.data)
               //setRepoData(repoDataResp.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserData(null); // Reset user data state in case of error
      }
    };

    if (userName) { // Check if userName is not empty
      fetchUserData(); // Call fetchUserData function
    }
  }, [userName]); // useEffect will trigger when userName state changes

   

  const handleInputChange = (e) => {
    delayedSetUserName(e.target.value); // Call debounce function
  };
  return (
    <Search>
      <SearchIconWrapper>
        <MagnifyingGlass />
      </SearchIconWrapper>
      <StyledInputBase
        fullWidth
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInputChange}
      />
    </Search>
  );
};

export default SearchInput;
