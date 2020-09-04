import {withStyles} from "@material-ui/core/styles";
import {TableCell} from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontFamily: 'Titillium Web !important',
    textTransform: 'uppercase',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  body: {
    fontSize: 14,
    fontFamily: 'Titillium Web  !important',

    '&::before': {
      /* Now like a table header */
      position: 'absolute',
      top: 4,
      left: 12,
      width: '45%',
      paddingRight: '10px',
      whiteSpace: 'nowrap',
      lineHeight: '20px',
      fontWeight: 'bold',
    },

    '& > img': {
      marginBottom: '4px',
    },

    '&.seasons': {
      /*
      Label the data
       */
      '&:nth-of-type(1):before': {content: '"Season"'},
      '&:nth-of-type(2):before': {content: '"Driver"'},
      '&:nth-of-type(3):before': {content: '"Car"'},
      '&:nth-of-type(4):before': {content: '"PTS"'},
      '&:nth-of-type(5):before': {content: '"Wins"'},
    },

    '&.races': {
      /*
      Label the data
      */
      '&:nth-of-type(1):before': {content: '"Grand Prix"'},
      '&:nth-of-type(2):before': {content: '"Date"'},
      '&:nth-of-type(3):before': {content: '"Winner"'},
      '&:nth-of-type(4):before': {content: '"Car"'},
      '&:nth-of-type(5):before': {content: '"Laps"'},
      '&:nth-of-type(6):before': {content: '"Time"'},
    },

    [theme.breakpoints.up('sm')]: {
      '&::before': {
        display: 'none',
      },
    },
  },
  root: {
    padding: '4px 12px',
    textAlign: 'left',
    border: 'none',
    display: 'block',
    borderBottom: '1px solid #eee',
    position: 'relative',
    paddingLeft: '50%',

    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      border: `1px solid ${theme.palette.action.hover}`,
      padding: '4px 12px',
    },
  }
}))(TableCell);
