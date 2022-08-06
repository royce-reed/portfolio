import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../state/features/themeSlice';

export default function ButtonAppBar() {
  const pages = ['home', 'projects', 'blogs', 'contact'];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  const handleClick = (endpoint, index) => index === 0 ? navigate('/') : navigate(`/${endpoint}`);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pages.map((page, i) => (
              <Button color="inherit" onClick={() => handleClick(page, i)} key={page}>
                {page[0].toUpperCase() + page.slice(1)}
              </Button>
            ))}
          </Typography>
          <Button color="inherit" onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
            { theme === 'light' ? <DarkModeIcon /> : <LightModeIcon /> }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
