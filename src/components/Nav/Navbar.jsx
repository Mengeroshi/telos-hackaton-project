import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import styles from "./Nav.module.css";
import {useNavigate} from 'react-router-dom';
import { ContextApp } from "../../context/Context";
import {ReactComponent as Logo} from '../../assets/icons/logoFinal.svg';

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
        <Toolbar variant="dense" onClick={onGoHome}sx={{ cursor: "pointer" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,cursor: "pointer" }}
            onClick={onGoHome}
          >
            <Logo className={styles.NavLogo}/>
          </IconButton>
          <div>
            <p className={styles.TextMain}>Squirrelfi</p>
          </div>
        </Toolbar>
      </nav>
    </Box>
  );
}
