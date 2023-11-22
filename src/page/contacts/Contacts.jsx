
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box} from "@mui/material";
import { rows, columns } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box style={{ height: 600, width: "98%", mx :"auto" }}>
       <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  );
}

export default Contacts;
