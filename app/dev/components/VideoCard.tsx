import { Card, Grid, Stack } from '@mui/material';
import { FunctionComponent } from 'react';

const VideoCard: FunctionComponent = () => {
  return (
    <Grid item xs={12} md={6} justifyContent={'center'} display={'flex'} marginBottom={4}>
      <Card sx={{ borderRadius: 3, height: '365px', width: '90%' }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center">
          <img
            src="/img/video.png"
            title="Default image with only .src property specified"
            width={'100%'}
            height={365} />
        </Stack>
      </Card>
    </Grid>
  );
};

export default VideoCard;
