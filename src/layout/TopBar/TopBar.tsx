import { AppBar, Toolbar, Typography } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
  title?: string;
}

/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, title = '', ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={{boxShadow: 'none', height: 80}}
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1, backgroundColor: 'white', height: 80 }}>
        {startNode}

        <Typography
          variant="h4"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            fontFamily: 'Times New Roman'
          }}
        >
          {title}
        </Typography>

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
