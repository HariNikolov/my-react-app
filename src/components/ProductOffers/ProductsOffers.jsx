import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#795548",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: customTheme.palette.primary.light,
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#bdbdbd",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 700,
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography
                variant="h2"
                component="h2"
                className={classes.title}
                gutterBottom
              >
                NEWSLETTER
              </Typography>
              <Typography variant="h6">
                Get the latest news from the MINISHOP Online Store regarding new
                products, exclusive specials, lifestyle and fashion trends.
              </Typography>
              <TextField
                className={classes.textField}
                placeholder="Your email"
              />
            </form>
          </div>
        </Grid>
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
        >
          Get your offer
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
