'use client';
import { useState } from 'react'
import { NextPage } from 'next';
import {
  Grid,
  Button,
  Box,
  Typography,
  CssBaseline,
  Checkbox,
  FormControlLabel,
  Divider
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { FacebookOutlined, Twitter } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';
import SignupButton from '../components/SignupButton'
import CheckLogin from '../components/CheckLogin';
import ValidateTextField from '../components/ValidateTextField';
import Link from 'next/link';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<any>({})

  const onSignup = () => {
    let newErrors: any = {
    }
    if (!firstName) {
      newErrors['firstname'] = true
    }
    if (!lastName) {
      newErrors['lastname'] = true
    }
    if (!email) {
      newErrors['email'] = true
    }
    if (!password) {
      newErrors['password'] = true
    }
    setErrors(newErrors)
    if (firstName && lastName && email && password) {
      router.push('/auth/login');
    }
  };

  return (
    <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
      <Grid
        container
        component="main"
        sx={{
          height: "87vh",
          width: "1000px",
          mt: 3,
          borderRadius: "10px",
          backgroundColor: "#fff",
          textAlign: "left"
        }}>
        <CssBaseline />
        <Grid item xs sm={8} md={7} container>
          <Box
            sx={{
              m: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: "90%"
            }}
          >
            <Box >
              <Typography sx={{ fontSize: "26px", mb: 2 }}>
                Create an account
              </Typography>
              <CheckLogin />
            </Box>
            <SignupButton>
              <FacebookOutlined sx={{ fontSize: "25px", color: "rgb(24, 119, 242)", mr: 1 }} />Continue with Facebook
            </SignupButton>
            <SignupButton>
              <FcGoogle size={"25px"} style={{ marginRight: 8 }} />Continue with Google
            </SignupButton>
            <SignupButton>
              <Twitter sx={{ fontSize: "25px", mr: 1 }} color="primary" />Continue with Twitter
            </SignupButton>
            <Divider sx={{ color: "#aaa" }}> Or </Divider>
            <Grid container spacing={5} justifyContent="space-around">
              <Grid item xs sm={6} md={6} >
                <ValidateTextField
                  label="First Name"
                  placeholder="Jane"
                  value={firstName}
                  setValue={setFirstName}
                  errorMessage={errors!['firstname']}
                />
              </Grid>
              <Grid item xs sm={6} md={6}>
                <ValidateTextField
                  label="Last Name"
                  placeholder="Doe"
                  value={lastName}
                  setValue={setLastName}
                  errorMessage={errors!['lastname']}
                />
              </Grid>
            </Grid>
            <Box sx={{ mb: 2 }}>
              <ValidateTextField
                label="Email"
                type="email"
                placeholder='Jane@gmail.com'
                value={email}
                setValue={setEmail}
                errorMessage={errors!['email']}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <ValidateTextField
                label="Password"
                placeholder="**********"
                type="password"
                value={password}
                setValue={setPassword}
                errorMessage={errors!['password']}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <FormControlLabel
                label="Subscribe to our monthly newsletter"
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }} />}
              />
            </Box>
            <Typography sx={{ fontSize: "14px", mt: 2, mb: 1, color: "#999" }}>
              By clicking below you agree to our
              <Link href="#" color="#000"> <u>Terms of Service</u></Link> and <Link href="#" color="#000"><u>Privacy Policy</u></Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="info"
              sx={{
                backgroundColor: "black",
                mb: 1,
                height: "50px",
                borderRadius: "25px",
                border: "none",
                color: "white",
                textTransform: 'none',
                fontSize: "15px"
              }}
              onClick={onSignup}
            >
              Sign up
            </Button>
            <Box sx={{ textAlign: "center" }}>
              <CheckLogin />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: "url(../pic.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        />
      </Grid>
    </Box>
  );
};

export default SignUp;
