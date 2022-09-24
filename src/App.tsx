
import { Route, Routes } from 'react-router-dom';
import Login from './Components/pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
