import React from "react";
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const PlantGuideCard = ({ plantGuide }) => {
  console.log(plantGuide)
  return (
    <Box sx={{p: 2}} >
      <Card sx={{maxWidth: 450}}>
        <CardMedia
          component="img"
          alt={'Picture of ' + plantGuide.commonName}
          height="140"
          image={plantGuide.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
            <Link to={`/plants/${plantGuide._id}`} style={{ textDecoration: 'none', color: 'dimgrey' }}>{plantGuide.commonName}</Link>
          </Typography>
          <Typography component="body1" variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {plantGuide.scientificName}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small">
            <Link to={`/plants/${plantGuide._id}`} style={{ textDecoration: 'none', color: '#59920D' }}>
              <Typography textDecoration="none" textTransform="uppercase" variant="body2" sx={{ textAlign: 'right', fontWeight: '600' }}>
                Learn More
              </Typography>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PlantGuideCard;