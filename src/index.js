import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './footer'
import Header from './Header/Header'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <App />
    <Header/>
    <Footer/>
</>
);

