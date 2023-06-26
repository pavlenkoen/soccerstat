import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CompetitionCard from "../Cards/CompetitionCard";

const CompetitionsGridBox = ({ ordersArray }) => {
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
        {ordersArray.map((compet, index) => (
          <Grid item xs={1} sm={2} md={2} key={index}>
            <CompetitionCard props={compet} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompetitionsGridBox;
