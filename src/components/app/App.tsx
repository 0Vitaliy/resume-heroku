import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Candidates from '../../pages/candidates';
import Layout from '../layout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/candidates" />} />
          <Route path="/candidates" element={<Candidates />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
