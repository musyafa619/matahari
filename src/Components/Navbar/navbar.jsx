import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <img
              src="https://www.matahari.com/svg/profile.svg"
              style={{ maxWidth: "20px" }}
            />
          </IconButton>
          <p>Login</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <img
              src="https://www.matahari.com/svg/heart-outline.svg"
              style={{ maxWidth: "20px" }}
            />
          </IconButton>
          <p>Love</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <img src="https://www.matahari.com/svg/shopping-bag.svg" />
          </IconButton>
          <p>Tas</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "white", color: "#616161" }}
        >
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTQ1LjgzOCA0LjY3M2MtLjkzNCAwLTEuNjkuNzYtMS42OSAxLjY5N3YuMTMzaDMuMzA3djkuNzg2aDIuMzIxVjYuNTAzaDMuMzE1di0xLjgzaC03LjI1M3pNOTEuNzA3IDkuNjMyaC0uNzYzVjYuNTAzaC43NjNjMS4xNiAwIDIuNDUzLjExNyAyLjQ1MyAxLjUxNiAwIDEuNDQ4LTEuMzA2IDEuNjE0LTIuNDUzIDEuNjE0di0uMDAxem0zLjcxMyAyLjExNmMtLjIzMy0uNTE3LS41OTUtMS4xNDgtMS4yMjYtMS4xOTl2LS4wMzNhMi42NTQgMi42NTQgMCAwIDAgMi4zODYtMi42OThjMC0zLjIyNy0yLjk2OC0zLjE0NS01LjQ1My0zLjE0NWgtLjgxNGExLjY5NCAxLjY5NCAwIDAgMC0xLjY4OCAxLjY5N3Y5LjkyOGgyLjMxOXYtNC44MzRoLjc0NmMuOTc4IDAgMS4yNzYuMzMzIDEuNjA5IDEuMTk2bDEuMzkxIDMuNjI5aDIuNTc5bC0xLjg1LTQuNTR6TTEwMC4zNiA0LjY3M2MtLjkzMyAwLTEuNjkuNzYtMS42OSAxLjY5N3Y5LjkyOGgyLjMyVjQuNjg1bC0uNjMtLjAxMnpNNzMuNzYxIDQuNjczYy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djIuOTk3aC00LjY0VjQuNjczaC0uNjI5Yy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djkuOTI4aDIuMzJ2LTUuMWg0LjY0M3Y1LjA5aDIuMzJWNC42NzZsLS42MzQtLjAwMnpNMzAuMjgyIDQuNjczYy0uOTQ4LjE0LTEuNzQuNzkyLTIuMDY0IDEuNjk3TDI2IDEzLjQ3N2gtLjAzNGwtMi43NjUtOC44MDRoLTIuMDEzYy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djkuOTI4aDIuMjIyVjYuNzQ1bC4wMzQtLjAzNCAzLjExNSA5LjU4N2gyLjIybDMuMTE4LTkuNTg3aC4wMzR2OS41NzhoMi4yMlY0LjY3NWwtMi4xOC0uMDAyek0zNy41MyAxMS43OTVsMS42NzktNC43OTNoLjAzNGwxLjY3OSA0Ljc5M0gzNy41M3ptMy4wNS03LjExOGgtMS4yMTJhMi42MDIgMi42MDIgMCAwIDAtMS45OSAxLjQ5OWwtLjA3Mi4xODctMy44NSA5LjkyOGgyLjQwMmwxLjAxMS0yLjY2NGg0LjY5bC45OTUgMi42NjRoMi41N0w0MC41OCA0LjY3N3pNNTYuMTg1IDExLjc5NWwxLjY3OS00Ljc5M2guMDMzbDEuNjggNC43OTNoLTMuMzkyem0zLjA1LTcuMTE4aC0xLjIxM2EyLjYwMiAyLjYwMiAwIDAgMC0xLjk4OCAxLjQ5OSAxLjg3OCAxLjg3OCAwIDAgMC0uMDczLjE4N2wtMy44NSA5LjkyOGgyLjQwNGwxLjAxMS0yLjY2NGg0LjY5bC45OTUgMi42NjRoMi41NjlMNTkuMjM1IDQuNjc3ek03OS43OTUgMTEuNzk1bDEuNjc5LTQuNzkzaC4wMzNsMS42OCA0Ljc5M2gtMy4zOTJ6bTMuMDUtNy4xMThoLTEuMjEzYTIuNjAyIDIuNjAyIDAgMCAwLTEuOTg4IDEuNDk5IDEuOSAxLjkgMCAwIDAtLjA3My4xODdsLTMuODUgOS45MjhoMi40MDJsMS4wMTEtMi42NjRoNC42OWwuOTk1IDIuNjY0aDIuNTYyTDgyLjg0NSA0LjY3N3oiIGZpbGw9IiMyQjJGMzIiLz48cGF0aCBkPSJNMTUuNzk5IDguNjQ2aC0uOTkzYS43MDguNzA4IDAgMCAwLS42OS41NjJjMCAuMDM0IDAgLjA2OC0uMDEzLjEwMS0uMDEzLjAzNCAwIC4wMzggMCAuMDU3LS4zODMgMi44MjQtMi45MSA0Ljg0Ni01LjczOCA0LjU5LTIuODI3LS4yNTYtNC45NTQtMi43LTQuODI4LTUuNTQ2LjEyNi0yLjg0OCAyLjQ2LTUuMDkyIDUuMjk5LTUuMDk1VjEuNzFBLjcxLjcxIDAgMCAwIDguMTM0IDFDNC4wMTggMS4zOC45NDggNC45NzYgMS4yMDEgOS4xMThjLjI1MyA0LjE0MiAzLjczOCA3LjMzNCA3Ljg3IDcuMjA2IDQuMTMxLS4xMjggNy40MTUtMy41MjggNy40MTQtNy42NzhIMTUuOHoiIGZpbGw9IiNFQjAwMjkiLz48cGF0aCBkPSJNNC44NzUgOC42NDZhMy45NyAzLjk3IDAgMCAwIDMuOTYyIDMuODkzIDMuOTcgMy45NyAwIDAgMCAzLjk2Mi0zLjg5M2gtMS41OWEuOTk2Ljk5NiAwIDAgMC0uODU4LjU4IDEuNjE4IDEuNjE4IDAgMCAxLTIuMDQ3Ljk1OSAxLjYyOSAxLjYyOSAwIDAgMSAuNTMyLTMuMTY3aDcuNjVWNS4zOGEuNzEuNzEgMCAwIDAtLjcxLS43MTFoLTYuOTRhMy45NyAzLjk3IDAgMCAwLTMuOTYxIDMuOTc4IiBmaWxsPSIjRUIwMDI5Ii8+PC9nPjwvc3ZnPg=="
                style={{ minWidth: 200 }}
              />
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ paddingLeft: "30px" }}
            >
              <h6>WANITA</h6>
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ paddingLeft: "30px" }}
            >
              <h6>PRIA</h6>
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ paddingLeft: "30px" }}
            >
              <h6>ANAK</h6>
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ paddingLeft: "30px" }}
            >
              <h6>HOME</h6>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Cari Produk"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <img src="https://www.matahari.com/svg/profile.svg" />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
              >
                <img src="https://www.matahari.com/svg/heart-outline.svg" />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <img src="https://www.matahari.com/svg/shopping-bag.svg" />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          <BottomNavigation
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="PRODUK TERBARU" />
            <BottomNavigationAction label="PAKAIAN" />
            <BottomNavigationAction label="SEPATU" />
            <BottomNavigationAction label="TAS & KOPER" />
            <BottomNavigationAction label="AKSESORIS WANITA" />
            <BottomNavigationAction label="KESEHATAN & BEAUTY" />
            <BottomNavigationAction label="BRANDS" />
            <img
              style={{ maxWidth: 100, maxHeight: 50 }}
              src="https://mm-image-marketing.s3.amazonaws.com/mds/bangsawan/PROMO/lebaran_deals1.gif"
            />
          </BottomNavigation>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
