
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/LoginPage';
import Page2 from './pages/Page2/Page2';

function App() {
  return (
    <Layout>
      <Routes >
        <Route index element={<HomePage />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
