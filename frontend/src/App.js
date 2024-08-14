import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import OwnersPage from './pages/OwnersPage';
import UsersPage from './pages/UsersPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/owners" element={<OwnersPage />} />
          <Route path="/users" element={<UsersPage />} />
          {/* Redirect unknown routes to /books or a 404 page */}
          <Route path="*" element={<Navigate to="/books" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
