import React, { Component } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

export default class extends Component {
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: "relative",
        minHeight: 200,
      },
      fab: {
        position: "fixed",
        right: 10,
        bottom: 10,
        width: 50,
        height: 50,
      },
      fabGreen: {
        color: theme.palette.common.white,
        "&:hover": {},
      },
    }));
    const classes = useStyles();
    const theme = useTheme();

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = {
      color: "primary",
      className: classes.fab,
      icon: <ChatIcon />,
      label: "Add",
    };

    return (
      <div className={classes.root}>
        {fabs.map((fab, index) => (
          <Zoom key={fab.color} timeout={transitionDuration} unmountOnExit>
            <Fab
              aria-label={fab.label}
              className={fab.className}
              color={fab.color}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    );
  }
}
