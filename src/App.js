import './App.scss';

import Login from './pages/login/login';
import Feed from './pages/feed/feed';

import Profile from './pages/profile/profile';

import Flavor from './global/variables.scss';
import TopBar from './global/components/top-bar/top-bar';

import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"

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
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/profile/:username/" exact element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
