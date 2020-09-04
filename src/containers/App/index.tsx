import React, {useState} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {Container, CssBaseline, Grid, PaletteType, ThemeOptions} from '@material-ui/core';

import Header from "../../components/Header";
import * as ROUTES from '../../routes/routes';
import "./App.css";

import Home from "../Home";
import Races from "../Races";

/**
 * @description Default configuration for the Dark Mode and some Material UI's elements' overrides
 */
const themeObject = {
  palette: {
    primary: {
      main: '#e10600'
    },
    secondary: {
      main: '#FFFFFF'
    },
    type: 'light' as PaletteType
  },
  overrides: {
    MuiCardHeader: {
      root: {
        padding: '10px 10px 0px',
      },
      title: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    MuiCardContent: {
      root: {
        padding: '4px 10px 10px',
      },
    },
  },
  themeName: 'Custom Mode'
};

/**
 * @description Custom hook that is responsible to store and update the current theme
 */
const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);
  const {palette: {type}} = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light' as PaletteType
      }
    };
    setTheme(updatedTheme);
  };

  return [theme, toggleDarkMode] as const;
};

/**
 * @description App container contains:
 * - Grid structure for responsive design, mobile friendly
 * - Header component
 * - All routes that we have in the application
 */
export default function App(): JSX.Element {
  const [theme, toggleDarkMode] = useDarkMode();
  const themeConfig = createMuiTheme(theme as ThemeOptions);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Container maxWidth="md">
        <Grid container spacing={2} style={{flexGrow: 1}}>
          <Grid container direction="row">
            <Header handleModeFn={() => toggleDarkMode()} />
          </Grid>

          <Switch>
            <Route exact path='/' render={() => <Redirect to='/seasons'/>}/>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.RACES} component={Races} />
          </Switch>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
