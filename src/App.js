import './App.scss';

import Login from './pages/login/login';
import Feed from './pages/feed/feed';
import Profile from './pages/profile/profile';

import Flavor from './global/variables.scss';
import TopBar from './global/components/top-bar/top-bar';



import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: Flavor.primary,
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar/>
        <Profile />
      </div>
    </ThemeProvider>
  );
}

export default App;
