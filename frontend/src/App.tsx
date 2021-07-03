import { 
  createMuiTheme, 
  ThemeProvider, 
  CssBaseline
} from '@material-ui/core';

import { theme } from './theme/theme';
import Router from './Router'

const muiTheme = createMuiTheme(theme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
