import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddProduct from './components/AddProduct';
import SignUpUser from './components/SignUpUser';

const App = () => (
  <div>
    <h1>Product Form</h1>
    <AddProduct />
    <h1>Sign Up Form</h1>
    <SignUpUser />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
