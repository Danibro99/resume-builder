import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

function Header() {
  const projectInfo="CareerCraft is an intelligent and easy-to-use resume builder designed to help users create professional, standout resumes effortlessly. With a clean interface and guided steps, CareerCraft allows anyone to craft a polished resume in minutes, review past creations, and make updates anytime — ensuring every user presents their best professional self with confidence."
  return (
    <div><Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"yellowgreen"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img style={{height:"40px"}} src="/headerlog.png"alt="Logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} className='text-light text-decoration-none'>CareerCraft</Link>
          </Typography>
          <Tooltip sx={{textAlign:"justify"}} title={projectInfo}><Button color="inherit">About</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Header