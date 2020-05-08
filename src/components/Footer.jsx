import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme } from "@material-ui/core/styles";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="#home">
        www.minishop.com
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const customTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#e0f7fa",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: customTheme.palette.primary.main,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  links: {
    textAlign: "start",
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <FacebookIcon className={classes.icon} />
                <InstagramIcon className={classes.icon} />
                <TwitterIcon className={classes.icon} />
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Catalog
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="">Men</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Women</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Kids</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Info
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="">About</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">News</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Gift Card</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Help
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="">Shipping</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Returns</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="">Contact us</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Blog
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
