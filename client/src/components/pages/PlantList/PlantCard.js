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

const PlantCard = ({ plant }) => {
  return (
    <Box sx={{p: 2}} >
      <Card sx={{maxWidth: 450}}>
        <CardMedia
          component="img"
          alt={'Picture of ' + plant.commonName}
          height="140"
          image={plant.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
            <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {plant.scientificName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="">Share</Button>
          <Button size="">Learn More</Button>
        </CardActions>
      </Card>

    </Box>

  );
};

export default PlantCard;