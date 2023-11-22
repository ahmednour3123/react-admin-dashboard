

import { Box} from '@mui/material';

import Pie from './pie';


import Header from "../../components/Header";




const PieChart = () => {

  return (
    <Box>
       <Header title="Pie Chart" subtitle="Simple Pie Chart" />
    <Pie />
    </Box>
  );
}

export default PieChart;
