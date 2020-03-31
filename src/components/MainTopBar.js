import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Link, makeStyles, Tooltip } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom'; 
const MainTopBar = ({
  title, 
  menuClick, 
  ...other 
}) => {
  const match = useRouteMatch();
  const classes = useStyles();

  return (
    <AppBar {...other}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={menuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <Link component={RouterLink} to={`${match.url}`} color="inherit" underline="none">
            {title}
          </Link>
        </Typography>
        <div className={classes.grow} />
        <Tooltip title="Gitリポジトリ">
          <IconButton color="inherit" href="https://github.com">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default MainTopBar;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1, 
  }, 
}));
