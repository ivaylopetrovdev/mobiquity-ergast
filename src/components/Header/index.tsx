import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, FormControlLabel, Link, Switch, Toolbar, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

/**
 * @description TS's props for component's received props
 */
type HeaderProps = {
  handleModeFn: () => void;
};

/**
 * @description Header component contains:
 * - Dark mode toggle button
 * - Navigation bar with one link: 'Home'
 * - Brand's logo
 * - Brand's name
 */
export default function Header({handleModeFn}: HeaderProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={'wrapper'}>
        <div className={'row'}>
          <FormControlLabel
            control={<Switch onClick={() => handleModeFn()}/>}
            label="Dark Mode"
          />
          <nav className={'nav'}>
            <Link className={'link'} color='secondary' component={RouterLink} to={"/"}>Home</Link>
          </nav>
        </div>
        <div className={'row'}>
          <div className={classes.iconWrapper}>
            <img src="/f1_logo.svg" alt="Formula 1 Logo" />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            F1 World Champions
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
};

/**
 * @description custom Material-UI styles
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrapper: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
  }),
);
