import React from 'react';
import AddProduct from './components/AddProduct';
import SignUpUser from './components/SignUpUser';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Product Form</h1>
    <AddProduct />
    <h1>Sign Up Form</h1>
    <SignUpUser />
  </div>
);

export default App;
