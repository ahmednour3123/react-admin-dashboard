

import { Box, useTheme } from '@mui/material';

import Line from './line';

import Header from "../../components/Header";



const LineCart = () => {
  const theme=useTheme()
  return (
    <Box>
         <Header title="Line Chart" subtitle="Simple Line Chart" />
<Line/>
</Box>
  );
}

export default LineCart;
