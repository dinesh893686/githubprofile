import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { GithubLogo } from "@phosphor-icons/react";

const Profile = ({userData}) => {
  return (
    <Card sx={{ width: 1 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src={userData.avatar_url?userData.avatar_url:faker.image} sx={{ width: 50, height: 50 }} />
            <Stack>
              <Typography variant="Subtitle2">
                {userData.login}
              </Typography>
              <Typography variant="caption">{`username`}</Typography>
            </Stack>
          </Stack>
          <Typography variant="body1">{userData.public_repos} Public Repos</Typography>
          <Typography variant="body2">{userData.bio?userData.bio:"some bio about user"}</Typography>
          <Button variant="contained" startIcon={<GithubLogo />}>
            Visit Github Profile
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Profile;
