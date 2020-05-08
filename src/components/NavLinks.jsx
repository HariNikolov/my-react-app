import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    marginRight: 130,
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link
        href="/"
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Home
      </Link>
      <Link
        href="/catalog"
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Catalog
      </Link>
      <Link
        href="/blog"
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Blog
      </Link>
      <Link
        href="/about"
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        About
      </Link>
      <Link
        href="/contact"
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Contact
      </Link>
    </Typography>
  );
}
