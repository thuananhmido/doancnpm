import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './pages/Home/components/Header/header';
import Footer from './pages/Home/components/Footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
    {/* <Footer /> */}
  </React.StrictMode>
);

