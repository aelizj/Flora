import React from 'react';
import { Card, CardMedia } from '@mui/material';

const CoverPhoto = ({ userData }) => {
  return (
    <Card sx={{ width: '100%', objectFit: 'cover' }}>
      <CardMedia
        component="img"
        height="140"
        image={userData.coverImageUrl}
        alt="cover photo"
      />
    </Card>
  )
}

export default CoverPhoto;