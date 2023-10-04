'use client'
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Grid, Stack, Typography } from '@mui/material';
import VideoCard from 'app/dev/components/VideoCard';
import GradientCard from 'app/dev/components/GradientCard';
import FeedbackCard from 'app/dev/components/FeedbackCard';
import { TESTIMONIES as data } from '../Constants'
import { CloudUploadOutlined } from '@mui/icons-material';

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {

  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const slideRight = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    let timerId = setInterval(slideRight, 5000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <Stack sx={{ height: '100%' }} spacing={2} padding={2}>
      <Grid container justifyContent={"center"}>
        <VideoCard />
        <GradientCard start='#DBB898' end='#9DC1CE' path='/auth/signup'>
          <Stack display={'flex'} alignItems={'center'}>
            <CloudUploadOutlined sx={{ fontSize: 70 }} />
            <Typography variant='h4' fontFamily={'Times New Roman'}>Upload CV</Typography>
            <Typography variant='body1' textAlign={'center'}>(PDF or DOCX)</Typography>
          </Stack>
        </GradientCard>
        <FeedbackCard index={index} data={data} slideLeft={slideLeft} slideRight={slideRight} />
        <GradientCard start={'#C5DCE4'} end={'#DBB898'} path='/'>
          <Typography variant='h3' fontFamily={'Times New Roman'}>Create CV with AI</Typography>
        </GradientCard>
      </Grid>
    </Stack>
  );
};

export default Home;
