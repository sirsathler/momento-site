import './App.scss';

import Login from './pages/login/login';
import Feed from './pages/feed/feed';
import Profile from './pages/profile/profile';

import Flavor from './global/variables.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from "react-router-dom"
import ProtectedRoute from './global/components/protectedroute/ProtectedRoute';

import { AuthProvider } from './global/contexts/Auth';
import TopBar from './global/components/top-bar/top-bar';
import SetupInterceptors, { NavigateFunctionComponent } from './global/services/Interceptors/SetupInterceptors';

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
      <AuthProvider>
        <Router>
          <NavigateFunctionComponent />
          <div className="App">
            <TopBar />
            <Routes>

              <Route path="/" exact element={<ProtectedRoute>
                <Feed />
              </ProtectedRoute>} />

              <Route path="/login" exact element={<Login />} />

              <Route path="/profile/:username/" exact element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>} />

            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
