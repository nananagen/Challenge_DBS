import React from 'react';
import './App.css';
import Planilha from './components/Planilha';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Protótipo de Planilha</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link id='link' to="/login">Login</Link>
              </li>
              <li>
                <Link id='link' to="/planilha">Planilha</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/planilha" element={<Planilha />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
