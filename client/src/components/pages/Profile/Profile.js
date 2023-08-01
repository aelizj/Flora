import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid, } from '@mui/material';
import UserAvatar        from './UserAvatar.js';
import UserInfo          from './UserInfo';
import UserCard          from './UserCard';
import UserAchievements  from './UserAchievements';
import CoverPhoto        from './CoverPhoto.js';
import EditProfileDialog from './EditProfileDialog.js';
import UserBio from './UserBio.js';

const ProfilePage = () => {
  const userData = useSelector((state) => state.user.user)
  console.log(userData)

  const handleChipDelete = () => {
    console.log("Chip delete clicked")
  }

  const handleClickAdd = (event) => {
    event.preventDefault();
    console.log(`Clicked add button in ${event.target}`);
  }

  return (
    <div>
      {userData.coverImageUrl ? <CoverPhoto userData={userData}/> : <Box sx={{ padding: 4 }}/>}
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'fit-content',
          }}
        >
          <UserAvatar avatar={userData.profileImageUrl} />
          <UserInfo name={`${userData.firstName} ${userData.lastName}`} email={userData.email} location={userData.location} />
          <Grid
            container
            direction="row"
            columnSpacing={2}
            sx={{ my: 2, width: '100%' }}
          >
            {userData.bio ? <UserBio userData={userData} /> : <></>}
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
