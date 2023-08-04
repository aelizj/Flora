import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { registerUser } from "../../store/features/user";
import { VALID_EMAIL_PATTERN } from '../../constants/Validation';
import { LOGIN_USER_URL } from '../../constants/Routes';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton
} from '@mui/material';

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName", {required: "First name is required", minLength: 2, maxLength: 140})}
                id="firstName"
                label="First Name"
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("lastName", {required: "Last name is required", minLength: 2, maxLength: 140})}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                required
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: VALID_EMAIL_PATTERN,
                    message: 'Must enter a valid email address'
                  }
                })}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                required
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("username", {required: "Username is required", minLength: 2, maxLength: 140})}
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                required
                fullWidth
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", {required: "Password is required", minLength: 2, maxLength: 140})}
                id="password"
                name="password"
                label="Password"
                required
                fullWidth
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={LOGIN_USER_URL} underline='hover' variant="body1" color="text.secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
