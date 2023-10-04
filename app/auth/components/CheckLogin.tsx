import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const CheckLogin = () => {
  return (
    <Box sx={{mb: 2}} display='flex'>
      <Typography sx={{ fontSize: "14px", color: "gray" }}>
        Already have an account?&nbsp;
      </Typography>
      <Link href="/auth/login">
        <Typography sx={{ fontSize: "14px", textDecoration: 'underline'}}>Log in</Typography>
      </Link>
    </Box>
  );
};

export default CheckLogin;
