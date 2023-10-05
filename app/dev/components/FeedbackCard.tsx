import { FunctionComponent } from 'react';
import { Card, CardContent, CardHeader, Grid, Stack, Typography, Avatar, IconButton, Box } from '@mui/material';
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material'
import CarouselCard from './CarouselCard';
import styles from './carousel.module.css'

interface FeedbackCardProps {
  index: any,
  slideLeft: any,
  slideRight: any,
  data: any
}

const FeedbackCard: FunctionComponent<FeedbackCardProps> = ({
  index,
  slideLeft,
  slideRight,
  data
}) => {

  return (
    <Grid item xs={12} md={6} className={styles.gridleft} display={'flex'} sx={{mb: 4, px: 4}}>
      <Card
        className={styles.card}
        sx={{
          borderRadius: 3,
          height: '365px',
        }}>
        <Stack height={'100%'} flexWrap="wrap" justifyContent="center" alignItems="center">
          <Grid container sx={{
            position: 'relative',
            height: '78%'
          }}>
            {
              data.map((item: any, ind: any) => {
                let position = ind > index ? styles.nextCard : ind === index ?
                  styles.activeCard : styles.prevCard;
                if (index === 0 && ind === data.length - 1) {
                  position = styles.prevCard
                }
                if (index === data.length - 1 && ind === 0) {
                  position = styles.nextCard
                }
                return <CarouselCard
                  key={`carouselcard-${ind}`}
                  img={`/img/avatar${ind + 1}.png`}
                  name={item.name}
                  description={item.description}
                  cardStyle={position}
                />
              })
            }
          </Grid>
          <Stack display={'flex'} direction={'row'} height={'22%'}>
            <IconButton onClick={slideLeft} sx={{ padding: 0, height: 56 }}>
              <ArrowCircleLeftOutlined sx={{ fontSize: 56 }} />
            </IconButton>
            <IconButton onClick={slideRight} sx={{ padding: 0, height: 56 }}>
              <ArrowCircleRightOutlined sx={{ fontSize: 56 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};

export default FeedbackCard;
