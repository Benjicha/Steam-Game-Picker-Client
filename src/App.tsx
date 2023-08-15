import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
// <-- Component Imports -->
import GamesOverview from './pages/GamesOverview'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import NotFound from './components/NotFound';
import RandomGame from './pages/RandomGame';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
});

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
        <Navbar />
        <div className='content'>
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/Games" Component={GamesOverview} />
              <Route path="/Random" Component={RandomGame} />
              <Route path="*" Component={NotFound} /> {/* Display NotFound component for unmatched routes */}
          </Routes>
        </div>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
