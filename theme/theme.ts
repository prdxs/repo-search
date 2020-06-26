import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[100],
    },
    secondary: {
      main: green[700],
    },
  },
});

export default theme;
