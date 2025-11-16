import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import ChatbotButton from './ChatbotButton';
import "./../app/globals.css";
interface LayoutProps {
  children: ReactNode;  // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Layout;
