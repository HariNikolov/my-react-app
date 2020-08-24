import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    marginRight: 130,
    textDecorationLine: "none",
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        to={ROUTES.HOME}
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Home
      </Link>
      <Link
        to={ROUTES.CATALOG}
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Catalog
      </Link>
      <Link
        to={ROUTES.BLOG}
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Blog
      </Link>
      <Link
        to={ROUTES.ABOUT}
        style={{ color: "#424242" }}
        className={classes.link}
      >
        About
      </Link>
      <Link
        to={ROUTES.CONTACT}
        style={{ color: "#424242" }}
        className={classes.link}
      >
        Contact
      </Link>
    </div>
  );
}
