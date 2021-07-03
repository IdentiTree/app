import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './theme/theme';
import Home from './pages/Home';

const muiTheme = createMuiTheme(theme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Home />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
