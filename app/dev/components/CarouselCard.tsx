import { FunctionComponent } from 'react';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
interface CarouselProps {
	img?: string,
	name?: string,
	description?: string,
	cardStyle?: any
}
/**
 * Renders "CarouselCard" for CarouselCard component
 * @component CarouselCard
 */

const CarouselCard: FunctionComponent<CarouselProps> = ({
	img,
	name,
	description,
	cardStyle
}) => {
	return <Grid item className={cardStyle} position={'absolute'}
		alignItems='center' width='80%' height='100%'
		sx={{ transition: 'all 0.5s' }}>
		<Stack display='flex' alignItems='center' height='40%' marginTop={4}>
			<Avatar src={img} sx={{ width: 64, height: 64 }} />
			<Typography
				sx={{
					fontFamily: 'Times New Roman',
					fontSize: 28,
					color: 'black',
					marginBottom: 1
				}}>
				{name}
			</Typography>
		</Stack>
		<Typography
			variant='body1'
			textAlign={'center'}
			color={'gray'}>
			{description}
		</Typography>
	</Grid>
}
export default CarouselCard;
