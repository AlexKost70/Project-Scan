import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from './hoc/AuthProvider';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Searchpage from './pages/Searchpage';
import Resultspage from './pages/Resultspage';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="search" element={<Searchpage />} />
          <Route path="results" element={<Resultspage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
