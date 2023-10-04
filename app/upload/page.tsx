'use client';
import { NextPage } from 'next';
import {
  Stack,
  Typography,
  Button
} from '@mui/material';

import { CloudUploadOutlined } from '@mui/icons-material';


const UploadCV: NextPage = () => {

  return (
    <Stack display={'flex'} alignItems={'center'}>
      <Button component="label">
        <CloudUploadOutlined sx={{ fontSize: 70 }} />
        <input hidden accept=".pdf, .docx" type='file' />
      </Button>
      <Typography variant='h4' fontFamily={'Times New Roman'}>Upload CV</Typography>
      <Typography variant='body1' textAlign={'center'}>(PDF or DOCX)</Typography>
    </Stack>
  );
};

export default UploadCV;
