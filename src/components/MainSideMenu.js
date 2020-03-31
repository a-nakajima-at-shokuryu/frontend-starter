import React from 'react'
import { Drawer, makeStyles, Divider, Toolbar, IconButton, Tooltip, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom'
const MainSideMenu = ({
  links = [], 
  open, 
  chevronClick, 
  ...other 
}) => {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Drawer
      open={open}
      {...other}
      classes={{
        paper: other.className, 
      }}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={chevronClick}>
          {open ? <ChevronLeftIcon/> : <ChevronRightIcon/> }
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {links.map(({ icon, name, title }) => (
          <Tooltip title={title} key={name}>
            <ListItem button
              component={RouterLink}
              to={`${match.url}/${name}`}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItem>
          </Tooltip>
        ))}
      </List>

    </Drawer>
  )
}

export default MainSideMenu;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingLeft: theme.spacing(1), 
  }, 
}));