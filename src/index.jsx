
import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './components/AddProduct';
import SignUpUser from './components/SignUpUser';
import './index.css';

const App = () => (
  <div className="container">
    <h1>Add Product</h1>
    <AddProduct />
    <h1>Sign Up User</h1>
    <SignUpUser />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
