
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

import Header from "../../components/Header";

const Dashboard = () => {

  return (
    <div>
    
<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
  
        <Header isDashboard={true} title={"DASHBOARD"} subtitle={"Welcome to your dashboard"}/>
  
        
</Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
