import { Card, Grid, Stack } from '@mui/material';
import { FunctionComponent } from 'react';
import ReactPlayer from 'react-player'
import styles from './carousel.module.css'
const VideoCard: FunctionComponent = () => {
  return (
    <Grid item xs={12} md={6} className={styles.gridleft} display={'flex'} sx={{mb: 4, px: 4}}>
      <Card sx={{ borderRadius: 3, height: '365px' }} className={styles.card}>
        <Stack sx={{width: '100%', height: '100%'}} direction="row" flexWrap="wrap" justifyContent="center" alignItems="center">
          <ReactPlayer
            className={styles.player}
            url="https://www.youtube.com/watch?v=U9rAmaxdvNw"
            width="100%"
            height="100%"
            playing={false}
            muted={true}
            controls={true}
          />
        </Stack>
      </Card>
    </Grid>
  );
};

export default VideoCard;
