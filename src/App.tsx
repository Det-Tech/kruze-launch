import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './pages/header';
import Admin from './Admin';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
