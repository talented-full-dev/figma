import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCoins, FaRocket } from "react-icons/fa";
import { GiCardRandom, GiRollingDices } from "react-icons/gi";
import "./layoutStyle.css";

const pages = [
  { name: "Coinflip", icon: <FaCoins /> },
  { name: "Blackjack", icon: <GiCardRandom /> },
  { name: "Crash", icon: <FaRocket /> },
  { name: "Dice", icon: <GiRollingDices /> }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="flex flex-wrap justify-between items-center w-full sm:pl-4">
      <AppBar position="static" className="radius custom-black w-75">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="navbar">
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {page.icon}&nbsp;&nbsp;&nbsp;
                    {page.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "27px",
                    textTransform: "unset"
                  }}
                >
                  <div className="flex items-center">
                    {page.icon}&nbsp;&nbsp;&nbsp;
                    {page.name}
                  </div>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Button className="rad-btn custom-purple poppins" variant="contained">
        Login
      </Button>
    </div>
  );
}
export default Navbar;
