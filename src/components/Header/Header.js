import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import AdbIcon from "@mui/icons-material/SportsSoccer";
import { Box } from "@mui/material";

const pages = [
  { name: "Лиги", link: "leagues" },
  { name: "Команды", link: "teams" },
];

const Header = () => {
  return (
    <>
      <AppBar position="static" width="100%">
        <Container maxWidth="x2" position="absolute">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                mr: { lg: 1 },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: { md: 1 },
                display: { xs: "none", sm: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SoccerStat
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                ml: 1,
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  href={`/${page.link}`}
                  sx={{
                    mr: 2,
                    color: "white",
                    display: "block",
                    fontSize: { xs: "14px", md: "14px" },
                    gap: { xs: "1px" },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
