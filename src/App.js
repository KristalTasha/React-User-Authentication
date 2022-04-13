import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Admin from './pages/admin';
import Analytics from './pages/analytics';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Landing from './pages/landing';
import { ProtectedRoute } from './auth/protectedRoute';
import Navigation from './pages/navigation';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  const login = () => setUser({id: '1', name: 'aziz'});
  const logout = () => setUser(null);

  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      {
        user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button> 
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route element={<ProtectedRoute user={user}/>}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;
