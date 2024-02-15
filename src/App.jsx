import {
  Card,
  CardContent,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Search from "./components/Search";
import Profile from "./components/Profile";
import { faker } from "@faker-js/faker";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;

  const onSearch = (data) => {
    setUserData(data);
  };

  const userRepos = (data) => {
    setRepoData(data);
    setCurrentPage(1); // Reset to the first page when new data is fetched
  };

  console.log(userData);
  console.log(repoData);

  // Logic to calculate indexes of the current page
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repoData.slice(indexOfFirstRepo, indexOfLastRepo);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Search onSearch={onSearch} userRepos={userRepos} />
        <Profile userData={userData} />
        <Typography>Repositories</Typography>
        {currentRepos.map((el, index) => (
          <Card key={index}>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="subtitle2">{el.name}</Typography>
                <Typography variant="caption">
                  Some Description about repo
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  spacing={1}
                >
                  {[...Array(3)].map((elm, idx) => (
                    <Chip
                      variant="filled"
                      size="small"
                      key={idx}
                      label={faker.internet.userName()}
                    />
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
        >
          <Pagination
            count={Math.ceil(repoData.length / reposPerPage)}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
