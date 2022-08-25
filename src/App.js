import './App.scss';

import Login from './pages/login/login';
import Feed from './pages/feed/feed';
import Profile from './pages/profile/profile';

import Flavor from './global/variables.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom"
import ProtectedRoute from './global/components/protectedroute/ProtectedRoute';

import { AuthContext } from './global/contexts/AuthProvider';
import { useContext } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: Flavor.primary,
    },
  }
})



function App() {
  const AuthProvider = useContext(AuthContext)


  // if(AuthProvider.loading) {
  //   return (
  //     <>
  //       <h1>Carregando...</h1>
  //     </>
  //   )
  // }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <div className="App">
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
