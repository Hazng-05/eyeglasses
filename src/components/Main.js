import React from 'react';
import Home from './pages/home/Home'; // Đường dẫn đến Home
import Product from './pages/product/Product'; // Đường dẫn đến Product
import About from './pages/about/About'; // ✅ Đúng
import Contact from './pages/contact/Contact'; // Đường dẫn đến Contact
import './Main.css';

function Main({ selectedMenu }) {
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return <Home />;
      case 'Product':
        return <Product />;
      case 'About Us':
        return <About />;
      case 'Contact':
        return <Contact />;
      
    }
  };

  return (
    <main className="main">
      {renderContent()}
    </main>
  );
}

export default Main;
