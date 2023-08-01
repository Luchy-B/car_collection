import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    finance_fee: '',
    purchase_fee: '',
    total_amount: '',
    apr: '',
    snapshot: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/v1/cars', carData)
      .then((response) => {
        console.log('Car added successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error adding car:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <div className="addItem_container">
      <form onSubmit={handleSubmit}>
        <h3 className="add-form-title">Add an Item</h3>
        <div className="form-group">
          <label htmlFor="name">
           
            <input type="text" name="name" value={carData.name} onChange={handleChange} required placeholder="Name"/>
          </label>
          <label htmlFor="description">
            
            <input type="text" name="description" value={carData.description} onChange={handleChange} required placeholder="Description"/>
          </label>
          <label htmlFor="finance_fee">
          
            <input type="number" name="finance_fee" value={carData.finance_fee} onChange={handleChange} required placeholder="Finance Fee"/>
          </label>
          <label htmlFor="purchase_fee">
           
            <input type="number" name="purchase_fee" value={carData.purchase_fee} onChange={handleChange} required placeholder="Purchase Fee"/>
          </label>
          <label htmlFor="total_amount">
           
            <input type="number" name="total_amount" value={carData.total_amount} onChange={handleChange} required placeholder="Total Amount"/>
          </label>
          <label htmlFor="apr">
          
            <input type="number" name="apr" value={carData.apr} onChange={handleChange} placeholder="APR"/>
          </label>
          <label htmlFor="snapshot">
           
            <input type="file" name="snapshot" onChange={handleChange} placeholder="Snapshot"/>
          </label>
        </div>
        <button type="submit" className="btn_add_item">Add New Car</button>
      </form>
    </div>
  );
};

export default AddItem;
