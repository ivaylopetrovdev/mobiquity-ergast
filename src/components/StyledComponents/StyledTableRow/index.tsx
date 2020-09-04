import {withStyles} from "@material-ui/core/styles";
import {TableRow} from "@material-ui/core";

export const StyledTableRow = withStyles((theme) => ({
  root: {
    display: 'block',
    height: 'auto',
    border: `1px solid ${theme.palette.action.hover}`,
    [theme.breakpoints.up('sm')]: {
      display: 'table-row',
      border: 'none',
      height: '50px',
    },

    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  selected: {
    backgroundColor: 'rgba(255,215,0,0.5) !important',
  },

  head: {
    position: 'absolute',
    top: '-9999px',
    left: '-9999px',
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
      top: '0px',
      left: '0px',
    },
  }
}))(TableRow);
