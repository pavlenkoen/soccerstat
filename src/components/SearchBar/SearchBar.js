import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

import { Card } from "@mui/material";

const SearchBar = ({ setValue }) => {
  return (
    <Card
      sx={{
        maxWidth: "50%",
        minHeight: "5%",

        width: { xs: "200px", md: "400px" },
        height: "50px",
        ml: { md: 2, lg: 3 },
      }}
    >
      <SearchIcon fontSize="medium" align="center" />

      <Input
        placeholder="Поиск"
        onChange={(event) => setValue(event.target.value)}
      />
    </Card>
  );
};

export default SearchBar;
