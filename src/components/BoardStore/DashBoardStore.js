import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SingleBedRoundedIcon from "@material-ui/icons/SingleBedRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import "../TheBoard/TheBoard.css";
import BoardStore from "./BoardStore";
import { Link } from "react-router-dom";
import { app } from "../FireBase/Base";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DashBoardStore(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const hist = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SignOutUser = async () => {
    await app.auth().signOut();
    hist.push("/");
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/thedashhome">
          <div className="MatNavContSt">
            <HomeRoundedIcon
              className
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">Home</div>
          </div>
        </Link>
        <Link to="/thedashagent">
          <div className="MatNavContSt">
            <PeopleAltRoundedIcon
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">Other Agents</div>
          </div>
        </Link>
        <Link to="/thedashmyuploads">
          <div className="MatNavContSt">
            <PublishRoundedIcon
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">My Uploads</div>
          </div>
        </Link>
        <div className="MatNavContSt" onClick={SignOutUser}>
          <ExitToAppRoundedIcon
            style={{ color: "#0373ab", fontSize: "30px" }}
          />
          <div className="MatNavText">Sign Out</div>
        </div>
      </List>
      <Divider />
      <List>
        <Link to="/thedashoneroomupload">
          <div className="MatNavContSt">
            <SingleBedRoundedIcon
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">Upload Single Room</div>
          </div>
        </Link>
        <Link to="/thedashstoreupload">
          <div className="MatNavContSt">
            <StorefrontRoundedIcon
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">Upload Store/Shop</div>
          </div>
        </Link>
        <Link to="/thedashflatupload">
          <div className="MatNavContSt">
            <HomeWorkRoundedIcon
              style={{ color: "#0373ab", fontSize: "30px" }}
            />
            <div className="MatNavText">Upload Flat</div>
          </div>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap color="#fff">
            My DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <BoardStore />
      </main>
    </div>
  );
}

DashBoardStore.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoardStore;
