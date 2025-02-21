// src/components/Layout.tsx

import React from 'react';
import Header from './header';
import Footer from './footer';


const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
