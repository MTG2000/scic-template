
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
