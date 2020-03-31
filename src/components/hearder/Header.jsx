import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Solaris
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
