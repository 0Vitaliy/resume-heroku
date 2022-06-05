import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../layout';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
