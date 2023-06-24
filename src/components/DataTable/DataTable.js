import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";

const DataTable = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        sx={{
          align: "center",
          ml: { md: "12" },

          background: "white",
          fontSize: { xs: "10px", md: "14px" },
        }}
        rows={rows}
        columns={columns}
        columnHeaderHeight={50}
        rowHeight={50}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        components={{
          NoRowsOverlay: () => (
            <Stack
              height="100%"
              alignItems="center"
              justifyContent="center"
              fontSize="45px"
            >
              В этот период матчей не найдено
            </Stack>
          ),
        }}
        pageSizeOptions={[12]}
        disableSelectionOnClick
      />
    </>
  );
};

export default DataTable;
