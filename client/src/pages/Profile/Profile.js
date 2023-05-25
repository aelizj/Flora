import React from 'react';
import { Box, Typography, Avatar, Button, Grid, Chip, Paper, Card, CardMedia, Stack } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
        padding: 2,
      }}
    >
      <Card sx={{ width: '100%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="140"
          image={userData.cover}
          alt="cover photo"
        />
      </Card>
      <Box
        sx={{
          position: 'relative',
          bottom: '28px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Avatar
          sx={{
            bgcolor: amber[500],
            height: { xs: 56, sm: 80 },
            width: { xs: 56, sm: 80 }
          }}
          src={userData.avatar}
        />
      </Box>
      <Typography
        sx={{
          mt: 1,
          fontWeight: 'bold',
          fontSize: { xs: 'h6.fontSize', sm: 'h4.fontSize' }
        }}
        variant="h5"
      >
        {userData.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body1"
        sx={{ fontSize: { xs: 'body2.fontSize', sm: 'body1.fontSize' } }}
      >
        {userData.email}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body2"
        sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
      >
        <LocationOnIcon fontSize="small" />
        {userData.location}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2, width: '100%' }}
      >
        {['Interests', 'Collection', 'Wishlist'].map((category, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={2} sx={{ padding: 2 }}>
              <Typography variant="h6">{category}</Typography>
              <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                {userData[category.toLowerCase()].map((item, i) => {
                  console.log('index: ' + index + ' category: ' + category + '\ni: ' + i + ' item: ' + item)
                  return (
                   <Chip key={i} label={item} color="primary" />
                  )
                })}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        sx={{ mt: 2 }}
      >
        Achievements
      </Typography>
      <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
        {userData.achievements.map((achievement, index) => (
          <Chip
            key={index}
            label={achievement}
            color="success"
            variant="outlined"
            sx={{ bgcolor: teal[50] }}
          />
        ))}
      </Stack>
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
  );
}

export default ProfilePage;


