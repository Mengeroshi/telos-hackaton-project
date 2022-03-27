import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styles from "./Nav.module.css";
import {useNavigate} from 'react-router-dom';
import { ContextApp } from "../../context/Context";

export default function DenseAppBar() {
  let navigate = useNavigate();
  const [state, dispatch] = React.useContext(ContextApp);
  const onGoHome = () =>{
    dispatch({ type: "RESTART_STATE"})
    navigate('/');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav className={styles.navbar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onGoHome}
          >
            <div className={styles.NavLogo}></div>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Squirrelfi
          </Typography>
        </Toolbar>
      </nav>
    </Box>
  );
}
