import * as React from "react";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { VALID_EMAIL_PATTERN } from "../../constants/Validation";
import { loginUser } from "../../store/features/user";
import { REGISTER_USER_URL } from "../../constants/Routes";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography
} from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?plants)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h4" color="text.secondary">
            Sign in
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextField
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: VALID_EMAIL_PATTERN,
                  message: 'Must enter a valid email address'
                }
              })}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              required
              fullWidth
              autoFocus
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              {...register("password", {required: "Password is required", minLength: 2, maxLength: 140})}
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              fullWidth
              margin="normal"
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

            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              sx={{ mt: 2, mb: 2, fontWeight: 600 }}
            >
              <Typography variant="button">
                Sign In
              </Typography>
            </Button>

            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href={REGISTER_USER_URL} underline='hover' variant="body1" color="text.secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
