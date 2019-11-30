import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import HrkSngMM from './hrk-sng-mm/hrk-sng-mm';
import HelloWorld from './react-typicals/hello-world';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
    },
    portFolio: {
      marginLeft: "10px",
      fontSize: "15px",
      fontWeight: "normal",
    },
  }),
);

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            HIROKI SHINGU <span className={classes.portFolio}><HelloWorld></HelloWorld></span>
          </Typography>
          <HrkSngMM></HrkSngMM>
          {/* <TextField label="Name" /> */}
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}