import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import './MyDrawer.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddIcon from '@mui/icons-material/Add';
import DataArrayIcon from '@mui/icons-material/DataArray';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MailIcon from '@mui/icons-material/Mail';



export default function MyDrawer() {

  const {user, logoutUser} = useContext(AuthContext);

  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem key={"Home"} disablePadding>
              <ListItemButton onClick={() => navigate('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
              </ListItemButton>
          </ListItem>
      </List>

      {user &&<> 
        <List>
          <ListItem key={"My Submissions"} disablePadding>
              <ListItemButton onClick={() => navigate('/my-submissions')}>
              <ListItemIcon>
                <DataArrayIcon />
              </ListItemIcon>
              <ListItemText primary={"My Submissions"} />
              </ListItemButton>
          </ListItem>
      </List>


        <List>
          <ListItem key={"New Submission"} disablePadding>
              <ListItemButton onClick={() => navigate('/new-submission')}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={"New Submission"} />
              </ListItemButton>
          </ListItem>
      </List>
      
      <List>
          <ListItem key={"Credits"} disablePadding>
              <ListItemButton onClick={() => navigate('/credits')}>
              <ListItemIcon>
                <CreditScoreIcon />
              </ListItemIcon>
              <ListItemText primary={"Credits"} />
              </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem key={"MyStatistics"} disablePadding>
              <ListItemButton onClick={() => navigate('/my-statistics')}>
              <ListItemIcon>
                <QueryStatsIcon />
              </ListItemIcon>
              <ListItemText primary={"My Statistics"} />
              </ListItemButton>
          </ListItem>
      </List>

      <List>
          <ListItem key={"My Notifications"} disablePadding>
              <ListItemButton onClick={() => navigate('/my-notifications')}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={"My Notifications"} />
              </ListItemButton>
          </ListItem>
      </List>

      </>}


      <Divider />
      {user && 
      <List>
          <ListItem key={"Logout"} disablePadding>
            <ListItemButton onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>
      </List>
    }
    {!user && <>
      <List>
          <ListItem key={"SignIn"} disablePadding>
            <ListItemButton onClick={() => navigate('/auth/login')}>
              <ListItemIcon>
                <LoginIcon/>
              </ListItemIcon>
              <ListItemText primary={"Sign In"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={"SignUp"} disablePadding>
            <ListItemButton onClick={() => navigate('/auth/register')}>
              <ListItemIcon>
                <AppRegistrationIcon/>
              </ListItemIcon>
              <ListItemText primary={"Sign Up"} />
            </ListItemButton>
          </ListItem>
      </List>
      </>
    }
    </Box>
  );

  return (
    <div className='header'>
        <React.Fragment key={"left"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            onClick={toggleDrawer("left", true)}
            edge="start"
           sx={{ ml: 2 }}
          >
            <MenuIcon style={{ color: '#fff' }}/>
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}