import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import TeamCard from "../Cards/TeamCard";

const TeamsGridBox = ({ ordersArray }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: { xs: "85%", md: "90%", sm: "80%" },
        ml: "1.5%",
      }}
    >
      <Grid
        container
        spacing={{ xs: 8, sm: 8, md: 10, lg: 10 }}
        columns={{ xs: 2, sm: 6, md: 8, lg: 10 }}
      >
        {ordersArray.map((team, index) => (
          <Grid item xs={1} sm={2} md={2} key={index}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 2, sm: 2, md: 0 }}
            >
              <TeamCard props={team} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamsGridBox;
