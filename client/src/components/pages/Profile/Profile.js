import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid, Button } from '@mui/material';
import UserAvatar from './UserAvatar.js';
import UserInfo from './UserInfo';
import UserCard from './UserCard';
import UserAchievements from './UserAchievements';
import CoverPhoto from './CoverPhoto.js';
import EditProfileDialog from './EditProfileDialog.js';

// const userData = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   avatar: "https://example.com/avatar.jpg",
//   cover: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
//   location: "New York, NY",
//   interests: ["Cacti", "Bonsai", "Orchids"],
//   collection: ["Sansevieria", "Pothos", "Monstera"],
//   wishlist: ["ZZ Plant", "Fiddle Leaf Fig"],
//   achievements: ["100 Days Streak", "Plant Master", "Top Contributor"],
// };


const ProfilePage = () => {
  const userData = useSelector((state) => state.auth.user)

  const handleChipDelete = () => {
    console.log("Chip delete clicked")
  }

  const handleClickAdd = (event) => {
    event.preventDefault();
    console.log(`Clicked add button in ${event.target}`);
  }

  return (
    <div sx={{padding: 0}}>
      {userData.cover ? <CoverPhoto/> : <Box sx={{ p:4 }}/>}

      <Container sx={{ paddingBottom: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'fit-content',
          }}
        >
          <UserAvatar avatar={userData.avatar} />
          <UserInfo name={`${userData.firstName} ${userData.lastName}`} email={userData.email} location={userData.location} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ my: 2, width: '100%' }}
          >
            {[ 'Plants', 'Interests', 'Wishlist'].map((category, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <UserCard category={category} items={userData[category.toLowerCase()]} handleAdd={handleClickAdd} handleDelete={handleChipDelete}/>
              </Grid>
            ))}
          </Grid>
          <UserAchievements achievements={userData.achievements} />

          <EditProfileDialog user={userData}/>
        </Box>
      </Container>

    </div>

  );
}

export default ProfilePage;