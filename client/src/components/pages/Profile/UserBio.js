import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";

const UserBio = ({ user }) => {
  return (
      <Grid item xs={12} sm={12}sx={{ pb: 2}}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Box component="span">
            <Typography variant="h6" marginBottom={1}>Bio</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {user.bio}
            </Typography>
          </Box>
        </Paper>
      </Grid>
  );
};

export default UserBio;
