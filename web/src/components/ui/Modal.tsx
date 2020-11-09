import { Paper } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 10,
    background: "#424242",
    marginTop: "15px",
    width: "90%",
    display: "flex",
    flexFlow: "column nowrap",
    position: "absolute",
    top: "10px",
  },
  displayBlock: {
    /*Sets modal to center*/
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  displayNone: {
    display: "none",
  },
}));

export const Modal = ({ children, visible }) => {
  const classes = useStyles();
  const useModalClasses = visible ? classes.displayBlock : classes.displayNone;
  return (
    <div className={useModalClasses}>
      <Paper className={classes.root}>{children}</Paper>
    </div>
  );
};
