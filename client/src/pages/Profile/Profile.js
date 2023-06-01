import React from 'react';
import { Box, Card, CardMedia, Grid, Button } from '@mui/material';
import UserAvatar from './UserAvatar.js';
import UserInfo from './UserInfo';
import UserCard from './UserCard';
import UserAchievements from './UserAchievements';

const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://example.com/avatar.jpg",
  cover: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
  location: "New York, NY",
  interests: ["Cacti", "Bonsai", "Orchids"],
  collection: ["Sansevieria", "Pothos", "Monstera"],
  wishlist: ["ZZ Plant", "Fiddle Leaf Fig"],
  achievements: ["100 Days Streak", "Plant Master", "Top Contributor"],
};

const ProfilePage = () => {
  return (
    <div sx={{padding: 0}}>
      <Card sx={{ width: '100%', objectFit: 'cover' }}>
        <CardMedia
          component="img"
          height="140"
          image={userData.cover}
          alt="cover photo"
        />
      </Card>

      <Container sx={{ paddingBottom: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'fit-content',
            padding: 2,
          }}
        >
          <UserAvatar avatar={userData.avatar} />
          <UserInfo name={userData.name} email={userData.email} location={userData.location} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ mt: 2, width: '100%' }}
          >
            {['Interests', 'Collection', 'Wishlist'].map((category, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <UserCard category={category} items={userData[category.toLowerCase()]} />
              </Grid>
            ))}
          </Grid>
          <UserAchievements achievements={userData.achievements} />
          <Button
            sx={{
              mt: 2,
              fontSize: { xs: 'body2.fontSize', sm: 'body1.fontSize' },
            }}
            variant="outlined"
          >
            Edit Profile
          </Button>
        </Box>
      </Container>

    </div>

  );
}

export default ProfilePage;