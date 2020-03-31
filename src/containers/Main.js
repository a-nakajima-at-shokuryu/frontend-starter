import React, { useState } from 'react';
import MainTopBar from '../components/MainTopBar';
import MainSideMenu from '../components/MainSideMenu';
import { makeStyles, Toolbar } from '@material-ui/core';
import GridOnIcon from '@material-ui/icons/GridOn'; 
import GridOffIcon from '@material-ui/icons/GridOff'; 
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Sales from './Sales';
import Tables from './Tables';

const links = [
  { icon: <GridOnIcon/>, name: 'sales', title: '売上伝票入力', component: Sales, }, 
  { icon: <GridOffIcon/>, name: 'tables', title: 'テーブル定義一覧', component: Tables, }, 
];

const Main = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles(open);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const match = useRouteMatch();

  return (
    <div className={classes.root}>
      <MainTopBar 
        title="株式会社ショクリュー" 
        className={classes.topbar}
        menuClick={toggleOpen}
      />
      <MainSideMenu 
        className={classes.sideMenu}
        open={open}
        variant="permanent"
        chevronClick={toggleOpen}
        links={links}
      />
      <main>
        <Toolbar />
        <div className={classes.mainContents}>
          <Switch>
            {links.length && (
              <Route exact path={`${match.url}`} component={links[0].component} />
            )}
            {links.map(({ name, component }) => (
              <Route path={`${match.url}/${name}`} component={component} />
            ))}
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default Main;

const drawerWidth = 240;
const sideMenuWidthMin = theme => theme.spacing(8);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
  }, 
  topbar: {
    width: open => open ? 
      `calc(100% - ${drawerWidth}px)` : 
      `calc(100% - ${sideMenuWidthMin(theme)}px)`, 
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.enteringScreen, 
      easing: theme.transitions.easing.sharp, 
    }), 
  }, 
  sideMenu: {
    width: open => open ? 
      drawerWidth : 
      sideMenuWidthMin(theme), 
    transition: theme.transitions.create(['width'], {
      duration: theme.transitions.duration.enteringScreen, 
      easing: theme.transitions.easing.sharp, 
    }), 
    whiteSpace: 'nowrap', 
    overflowX: 'hidden', 
  }, 
  mainContents: {
    padding: theme.spacing(3), 
  }, 
}));
