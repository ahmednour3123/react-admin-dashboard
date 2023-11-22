


import { Box, useTheme } from '@mui/material';

import Geo from './geo';
import Header from "../../components/Header";

const Geography = () => {

  return (
    <Box>
    <Header title="Geography" subtitle="Simple Geography Chart" />
    <Geo/>
    </Box>
  );
}

export default Geography;
