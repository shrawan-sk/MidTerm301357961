
import React, { useState } from 'react';
import './AddProduct.css'; 

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
