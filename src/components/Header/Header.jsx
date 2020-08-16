import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Links from "../NavLinks/NavLinks";
import "./header.css";
import { Link } from "react-router-dom";
import SignOutButton from "../LogOutButton/LogoutButton";
import * as ROUTES from "../../constant/routes";
import { withFirebase } from "../Firebase/index.js";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "#424242",
    },
    marginRight: 50,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: 300,
    },
    color: "#424242",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: "#424242",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const NavigationBar = ({ firebase }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = firebase.currUser();

  const nonAuth = (
    <div style={{ margin: "10px" }}>
      <Link
        to={ROUTES.LOGIN}
        style={{
          textDecorationLine: "none",
          margin: 20,
        }}
        onClick={handleClose}
      >
        Log in
      </Link>
      <Link
        to={ROUTES.REGISTER}
        onClick={handleClose}
        style={{ textDecorationLine: "none", margin: 20 }}
      >
        Register
      </Link>
    </div>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      {user ? (
        <div>
          <div style={{ margin: "15px" }}>{user.email}</div>
          <div style={{ marginLeft: "40px" }}>
            <SignOutButton />
          </div>
        </div>
      ) : (
        nonAuth
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <Grid container>
        <AppBar position="fixed" style={{ backgroundColor: "#e0f7fa" }}>
          <Toolbar>
            <Grid item xs={2}>
              <Typography className={classes.title} variant="h4" noWrap>
                <Link
                  to={ROUTES.HOME}
                  style={{ color: "#424242", textDecorationLine: "none" }}
                >
                  MiniShop
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Links />
            </Grid>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <Link
                aria-label="show 8 new notifications"
                color="inherit"
                to={ROUTES.ORDER}
                style={{ marginTop: 10 }}
              >
                <Badge badgeContent={1} color="secondary">
                  <AddShoppingCartIcon />
                </Badge>
              </Link>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
      {renderMenu}
    </div>
  );
};
export default withFirebase(NavigationBar);
