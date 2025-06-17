import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Checkout from './components/pages/product/Checkout';
import Login from './components/pages/product/Login';
import Register from './components/pages/product/Register';

import './App.css';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const currentPath = window.location.pathname;

  const renderPage = () => {
    switch (currentPath) {
      case '/checkout':
        return <Checkout />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      default:
        return <Main selectedMenu={selectedMenu} />;
    }
  };

  return (
    <div className="app-layout">
      <Header selectedMenu={selectedMenu} onMenuChange={setSelectedMenu} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
