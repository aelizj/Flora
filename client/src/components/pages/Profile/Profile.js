import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import UserAvatar        from './UserAvatar.js';
import UserInfo          from './UserInfo';
import UserCard          from './UserCard';
import UserAchievements  from './UserAchievements';
import CoverPhoto        from './CoverPhoto.js';
import EditProfileDialog from './EditProfileDialog.js';
import PlantGuideCard    from '../PlantGuideList/PlantGuideCard.js';
import UserBio from './UserBio.js';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user);
  return (
    <div>
      {user.coverImageUrl ? <CoverPhoto user={user}/> : <Box sx={{ padding: 4 }}/>}
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'fit-content',
            paddingBottom: 20
          }}
        >
          <UserAvatar avatar={user.profileImageUrl} />
          <UserInfo name={`${user.firstName} ${user.lastName}`} username={user.username} location={user.location} />
          <Grid
            container
            direction="row"
            columnSpacing={2}
            sx={{ my: 2, width: '100%' }}
          >
            {user.bio ? <UserBio user={user} /> : <></>}
            {[ 'plants', 'interests', 'wishlist'].map((category, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <UserCard
                  user={user}
                  category={category}
                />
              </Grid>
            ))}

            {user.authoredPlantGuides &&(
              <Grid item xs={12} sm={12} paddingTop={6}>
                <Typography variant='h6' color="primary">
                  Authored Plant Guides
                </Typography>
              </Grid>
            )}


            {user.authoredPlantGuides && user.authoredPlantGuides.map(plantGuide => (
              <Grid item xs={4} key={plantGuide.id}>
                <PlantGuideCard plantGuide={plantGuide}/>
              </Grid>
             ))}
          </Grid>
          <div>
            <Grid container spacing={0}>

            </Grid>
          </div>
          { user.achievements ? <UserAchievements achievements={user.achievements} /> : <></> }
          <EditProfileDialog user={user}/>
        </Box>
      </Container>
    </div>
  );
}

export default ProfilePage;
