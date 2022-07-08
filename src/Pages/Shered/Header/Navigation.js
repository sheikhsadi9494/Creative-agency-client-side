import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user, logOut} = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#FBD062",
        color: "black",
        // border: "2px solid black",
        pt: 1
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, marginLeft: '80px'}}
          >
          <NavLink to='/'>
           <img style={{width: '170px', padding: '12px'}} src="https://i.ibb.co/Xy515kT/logo.png" alt="" />
         </NavLink>
          </Typography>

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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink style={{ textDecoration: "none" }} to="/services">
                  <Typography textAlign="center">Services</Typography>
                </NavLink>{" "}
                <br />
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: "none" }} to="/services">
                  <Typography textAlign="center">Our Team</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink style={{ textDecoration: "none" }} to="/services">
                  <Typography textAlign="center">Contact Us</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
              <NavLink to='/'>
           <img style={{width: '150px', padding: '12px'}} src="https://i.ibb.co/Xy515kT/logo.png" alt="" />
         </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "flex-end"}, marginRight: '50px'}}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Box style={{ color: "black", marginRight: 28, textTransform: 'capitalize', fontSize: "16px"}}>Home</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/services">
              <Box style={{ color: "black",  marginRight: 28, textTransform: 'capitalize', fontSize: "16px"}}>Services</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/">
              <Box style={{ color: "black", marginRight: 28, textTransform: 'capitalize', fontSize: "16px"}}>Our Portfolio</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/services">
              <Box style={{ color: "black",  marginRight: 28, textTransform: 'capitalize', fontSize: "16px"}}>Our Team</Box>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/services">
              <Box style={{ color: "black" , textTransform: 'capitalize', fontSize: "16px"}}>Contact Us</Box>
            </NavLink>
          </Box>

          {
            user.email ? 

            <Box sx={{ flexGrow: 0, marginRight: {lg: '100px'}}}>
            <Tooltip title="Go to dashbord">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.displayName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "50px"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

                <MenuItem onClick={handleCloseUserMenu}>
                <NavLink style={{textDecoration: 'none'}} to='/dashbord'>
                  <Typography style={{color: 'black'}} textAlign="center">Dashbord</Typography>
                </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                { user.email ?
                   <Box style={{textDecoration: 'none'}}>
                    <Typography style={{color: 'black'}} onClick={logOut} textAlign="center">Logout</Typography>
                   </Box>
                   :
                   <NavLink style={{textDecoration: 'none'}} to='/login'>
                    <Typography style={{color: 'black'}} textAlign="center">Login</Typography>
                   </NavLink>
               }
                </MenuItem>
           
            </Menu>
          </Box>
          :
          <NavLink  style={{textDecoration: 'none'}} to='/login'>
                <Button sx={{ flexGrow: 0, marginRight: {lg: '100px'}, backgroundColor: 'black', ':hover': {backgroundColor: 'black'}, py: 1, px: 4}} variant="contained">
                    <Typography style={{color: 'white', textTransform: 'capitalize'}} textAlign="center">Login</Typography>
                </Button>
              </NavLink>   
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;

// <Box sx={{ flexGrow: 1 }}>
//   <AppBar sx={{backgroundColor: '#F6CB3A', color: 'black'}} position="static">
//     <Toolbar>
//       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //  <NavLink to='/'>
        //    <img style={{width: '11%', padding: '12px'}} src="https://i.ibb.co/Xy515kT/logo.png" alt="" />
        //  </NavLink>
//       </Typography>
//       <NavLink style={{textDecoration: 'none'}} to='/services'>
//         <Button color="inherit">Services</Button>
//       </NavLink>
//       {
//         user.email &&
        // <NavLink style={{textDecoration: 'none'}} to='/dashbord'>
        //  <Button color="inherit">Dashbord</Button>
        // </NavLink>
//       }
      // { user.email ?
      //   <Box style={{textDecoration: 'none'}}>
      //    <Button onClick={logOut} color="inherit">Logout</Button>
      //   </Box>
      //   :
      //   <NavLink style={{textDecoration: 'none'}} to='/login'>
      //    <Button color="inherit">Login</Button>
      //   </NavLink>
      // }
//     </Toolbar>
//   </AppBar>
// </Box>
