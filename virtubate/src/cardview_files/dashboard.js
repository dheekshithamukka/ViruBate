import React, { useState, Fragment, useContext } from 'react';
import { UserContext } from '../App'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import MediaCard from './cardview';
// import Orders from './orders';
//import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
import HamburgerMenu from 'react-hamburger-menu';
import { createBrowserHistory } from "history";
//import CardView from './src/cardview_files/cardview';
// import CheeseburgerMenu from 'cheeseburger-menu';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import FolderIcon from '@material-ui/icons/Folder';
// import Avatar from '@material-ui/core/Avatar';
import MenuContent from './menuContent';
//import NotificationsIcon from '@material-ui/icons/Notifications';
// import mainListItems from './list_items';
// import secondaryListItems from './list_items';
// import Chart from './Chart';
// import Deposits from './Deposits';
//import Orders from './orders';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import StarBorder from '@material-ui/icons/StarBorder';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import MediaCard from './cardview';
import MediaCardShortlisted from './cardviewshortlisted';
import disableBrowserBackButton from 'disable-browser-back-navigation';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Container,Row,Col} from 'reactstrap';






const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  outer_dashboard: {
    display: 'full screen',
    backgroundColor: "#F0F0F0",
  },
  root: {
    display: 'flex',
    // backgroundColor: '#F0F0F0',
  },
  toolbar: {
    variant: "regular",
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    //...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      // color: "black",
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow : 1,
  },
  section_desktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  drawerPaper: {
    position: 'relative',
   // position: 'absolute',
   whiteSpace: 'nowrap',
   width: drawerWidth,
   transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.enteringScreen,
     variant : 'permanent',
   }),
 },
 drawerPaperClose: {
   overflowX: 'hidden',
   transition: theme.transitions.create('width', {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
     variant : 'permanent',
   }),
   width: theme.spacing(7),
   [theme.breakpoints.up('sm')]: {
     width: theme.spacing(9),
   },
 },
 card_container: {
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),

  // paddingLeft: theme.spacing(4), 
  // paddingRight: theme.spacing(4),
},

  appBarSpacer: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // height: '100vh',
    // overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
}));




export default function Dashboard() {
  // disableBrowserBackButton();
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("SignUp");
  const history = useHistory();
  const [open, setOpen] = React.useState(null);
  const [open_drawer, setOpen_drawer] = React.useState(null);
  const { state, dispatch } = useContext(UserContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  // const [title, setTitle] = useState("SignUp");

  // const [open, setOpen] = React.useState(null);
  // const [open_drawer, setOpen_drawer] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };



  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };

  const onItemClick = title => () => {
    setTitle(title);
    //setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  // const history = createBrowserHistory();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick_drawer = () => {
    setOpen_drawer(!open_drawer);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const Logout = () => {
  //   console.log("Logout")

  // }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const menuId = 'primary-search-account-menu';


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => {
                localStorage.clear()
                dispatch({ type: "CLEAR" })
                history.push('/signin')
              }}>Logout</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mainListItems = (
    <div>
      <List>

        <ListItem button onClick={handleClick_drawer} component={Link} to="/dashboard">
          <ListItemIcon>
            <i class="material-icons">filter_none</i>
          </ListItemIcon>
        Applications

            {open_drawer ? <i class="material-icons">arrow_drop_up</i> : <i class="material-icons">arrow_drop_down</i>}

        </ListItem>
        <Collapse in={open_drawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested} component={Link} to="/cards">
            <ListItemIcon>

<i class="small material-icons"> done_all </i>
</ListItemIcon>
<ListItemText primary="Received" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/cards-shortlisted">
              <ListItemIcon>
                <i class="material-icons">star</i>
              </ListItemIcon>
              <ListItemText primary="Shortlisted" />
            </ListItem>
          
          </List>
        </Collapse>
      </List>
    </div>
  )
  return (
    <div className={classes.outer_dashboard}>
    <div className={classes.root}>
      <CssBaseline />
      <Fragment>
        <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}

            >

              <HamburgerMenu

                //isOpen={handleDrawerClose}

                onClick={<MenuContent />}
                width={40}
                height={30}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
              />
            </IconButton>

            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Dashboard
      </Typography>
      <div className={classes.grow}></div>
      {/* <div className={classes.section_desktop}> */}
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary" onClick={() => {
                localStorage.clear()
                dispatch({ type: "CLEAR" })
                history.push('/signin')
              }}> */}

              {/* </Badge> */}
            {/* </IconButton> */}
            {/* </div> */}

            <div className={classes.section_desktop}>
            <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          edge = "end"
          onClick={handleProfileMenuOpen}
        
        >
          {/* <AccountCircle /> */}
          <i class="material-icons" >account_circle</i>
        </IconButton>
        </div>

          </Toolbar>
        </AppBar>
        {renderMenu}
      </Fragment>

      <Router history={history}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose} closeCallback>
              {/* <ChevronLeftIcon /> */}
              {/* <FolderIcon/> */}
              <i class="material-icons">arrow_back</i>
              {/* <Icon /> */}
              {/* <label >ARCH</label> */}
            </IconButton>

            {/* <Avatar onClick={handleDrawerOpen}>
          <FolderIcon/>
        </Avatar> */}
          </div>
          <Divider />
          <List>{mainListItems}</List>


        </Drawer>

        <Container maxWidth="lg" md={3} className={classes.card_container}>
     
        <div className={classes.card_container}>

        <main className={classes.content}>
          {/* <Check/> */}
        
            <Switch>
              {/* <Route exact path="/" >
                <h1>Virtubate</h1>
              </Route> */}
              <Route exact path="/dashboard" >
                <MediaCard />
              </Route>
              <Route exact path="/cards" >
                <MediaCard />
              </Route>
              <Route exact path="/cards-shortlisted" >
                <MediaCardShortlisted />
              </Route>
              <Route path="/menuCon"
              // component={Check}
              >
                <h1>Hey StartUp</h1>
              </Route>
            </Switch>

        </main>

</div>
</Container>

      </Router>
    </div>
    </div>
  );
}
