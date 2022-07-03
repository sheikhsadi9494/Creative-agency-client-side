import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { Button, ListItemButton } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

function Dashbord(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{border: 'none'}}>
      <Toolbar />
      
      <nav style={{border: 'none'}}>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/dashbord">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">My Orders</ListItemButton>
        </Link>
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="review">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Make Review</ListItemButton>
        </Link>
        {admin &&
        <>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="makeAdmin">
             <ListItemButton style={{paddingLeft: '40px'}} variant="text">Make Admin</ListItemButton>
          </Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="orderList">
             <ListItemButton style={{paddingLeft: '40px'}} variant="text">Order List</ListItemButton>
          </Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="addService">
             <ListItemButton style={{paddingLeft: '40px'}} variant="text">Add Service</ListItemButton>
          </Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="deleteService">
             <ListItemButton style={{paddingLeft: '40px'}} variant="text">Delete Service</ListItemButton>
          </Link>
        </>
        }
        <Link style={{textDecoration: 'none', color: 'black', fontSize: "xxl-large,"}}  to="/services">
          <ListItemButton style={{paddingLeft: '40px'}} variant="text">Back To Home</ListItemButton>
        </Link>
      </nav>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          boxShadow: 0,
          border: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, border: 'none'}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            border: 'none'
          }}
          // style={{border: '5px solid black'}}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />

      <main>
        <Outlet />
      </main>

      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
