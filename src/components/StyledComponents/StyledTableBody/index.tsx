import {withStyles} from "@material-ui/core/styles";
import {TableBody} from "@material-ui/core";

export const StyledTableBody = withStyles((theme) => ({
  root: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'table-row-group',
    },
  },
}))(TableBody);
