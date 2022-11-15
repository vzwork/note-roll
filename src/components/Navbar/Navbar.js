import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="text" component={Link} to="/">
            <ArticleIcon />
          </Button>
          <Button variant="text" component={Link} to="/account">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
