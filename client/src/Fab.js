import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Button(props) {
  return (
    <Fab className="fab" color="secondary" onClick={props.onClick}>
      <AddIcon />
    </Fab>
  );
}

export default Button;
