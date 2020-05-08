import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../constant/routes";

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
        href={ROUTES.HOME}
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Home
      </Link>
      <Link
        href={ROUTES.CATALOG}
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Catalog
      </Link>
      <Link
        href={ROUTES.BLOG}
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Blog
      </Link>
      <Link
        href={ROUTES.ABOUT}
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        About
      </Link>
      <Link
        href={ROUTES.CONTACT}
        underline="none"
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Contact
      </Link>
    </Typography>
  );
}
