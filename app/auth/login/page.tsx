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
import { useAppStore } from 'src/store';
import { useRouter } from 'next/navigation';
import { FacebookOutlined, Twitter } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';
import SignupButton from '../components/SignupButton'
import Link from 'next/link';
import ValidateTextField from '../components/ValidateTextField';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<any>({})
  const [, dispatch] = useAppStore();

  const onLogin = () => {
    let newErrors: any = {}
    if (!password) {
      newErrors['password'] = true
    }
    if (!email) {
      newErrors['email'] = true
    }
    setErrors(newErrors)
    if (password && email) {
      router.push('/upload');
    }
  };

  return (
    <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
      <Grid
        container
        component="main"
        sx={{
          height: "85vh",
          width: "1000px",
          mt: 4,
          borderRadius: "10px",
          backgroundColor: "#fff",
          textAlign: "left"
        }}>
        <CssBaseline />
        <Grid item xs={10} sm={8} md={7} container>
          <Box
            component="form" noValidate
            sx={{
              m: 3,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              width: "90%"
            }}
          >
            <Box >
              <Typography sx={{ fontSize: "26px" }}>
                Create an account
              </Typography>
              <Typography sx={{ fontSize: "16px" }}>
                Don't you have an account? <Link href="/auth/signup"><u>Sign up</u></Link>
              </Typography>
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
            <ValidateTextField
              label="Email"
              type="email"
              placeholder='Jane@gmail.com'
              value={email}
              setValue={setEmail}
              errorMessage={errors['email']}
            />
            <ValidateTextField
              label="Password"
              placeholder="**********"
              type='password'
              value={password}
              setValue={setPassword}
              errorMessage={errors['password']}
            />
            <Box sx={{ mt: 3 }}>
              <FormControlLabel
                label="Subscribe to our monthly newsletter"
                control={<Checkbox />}
              />
            </Box>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <Typography sx={{ fontSize: "14px", color: 'gray' }}>
                By clicking below you agree to our&nbsp;
              </Typography>
              <Typography sx={{ fontSize: "14px", color: 'black' }}>
                <Link href="/"><u>Terms of Service</u></Link> and <Link href="/"><u>Privacy Policy</u></Link>
              </Typography>
            </Box>
            <Button
              type="button"
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
              onClick={onLogin}
            >
              Log in
            </Button>
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
