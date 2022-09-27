
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  return (
    <Layout>
      <Routes >
        <Route index element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
