import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const {user, logOut} = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: '#F6CB3A', color: 'black'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <NavLink to='/'>
               <img style={{width: '11%', padding: '12px'}} src="https://i.ibb.co/Xy515kT/logo.png" alt="" />
             </NavLink>
          </Typography>
          <NavLink style={{textDecoration: 'none'}} to='/services'>
            <Button color="inherit">Services</Button>
          </NavLink>
          {
            user.email &&
            <NavLink style={{textDecoration: 'none'}} to='/dashbord'>
             <Button color="inherit">Dashbord</Button>
            </NavLink>
          }
          { user.email ?
            <Box style={{textDecoration: 'none'}}>
             <Button onClick={logOut} color="inherit">Logout</Button>
            </Box>
            :
            <NavLink style={{textDecoration: 'none'}} to='/login'>
             <Button color="inherit">Login</Button>
            </NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
