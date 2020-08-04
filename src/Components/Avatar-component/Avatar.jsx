import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Avatars = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="#" />
      {/* <Avatar alt="Travis Howard" src="#" />
      <Avatar alt="Cindy Baker" src="#" /> */}
    </div>
  );
};

export default Avatars;
