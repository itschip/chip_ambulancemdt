import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
//import Logo from '../../logo.png'
import { Button } from '@material-ui/core';
import { NavButton } from './UIButton'
import { useCredentials } from '../../core/hooks/useCredentials';
import Nui from '../../nui-events/utils/Nui';

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
      fontFamily: "'Montserrat', sans-serif",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    appBar: {
      background: '#4f9cdb'
    },
    navLink: {
      color: '#fff',
      fontFamily: "'Montserrat', sans-serif",
    }
  }),
);

const Header = () => {
  const classes = useStyles();

  const { credentials } = useCredentials()

  const closeApp = () => {
    Nui.send('ambu:cad:close', {})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" variant="outlined" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {/*<img alt="logo" src={Logo} width={300} style={{ marginTop: 10 }} />*/}
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Velkommen, {credentials?.name}
          </Typography>
          <NavButton to="/" label="Oversikt" className={classes.navLink} />
          <NavButton to="/patients" label="Pasienter" className={classes.navLink} /> 
          <Button className={classes.navLink}>
            Behandlinger
          </Button>
          <Button className={classes.navLink}>
            Psykolog
          </Button>
          <Button onClick={closeApp} variant="contained">
            Lukk
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
