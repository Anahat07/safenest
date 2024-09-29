import './styles/App.css';
import Login from './Login';
import { AuthProvider } from '@propelauth/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './welcome';
import WindingPathway from './WindingPathway';
import Invest from './invest';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider authUrl="https://7939268.propelauthtest.com">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/roadmap" element={<WindingPathway />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;