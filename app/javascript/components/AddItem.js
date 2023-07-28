import React, { useState } from 'react';
import axios from 'axios';
import '../styles/additem.css';

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
        .then(response => {
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
          <h3>Add an Item</h3>
          <div className="form-group">
            <label>
              Name:
              <input type="text" name="name" value={carData.name} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={carData.description} onChange={handleChange} required />
            </label>
            <label>
              Finance Fee:
              <input type="number" name="finance_fee" value={carData.finance_fee} onChange={handleChange} required />
            </label>
            <label>
              Purchase Fee:
              <input type="number" name="purchase_fee" value={carData.purchase_fee} onChange={handleChange} required />
            </label>
            <label>
              Total Amount:
              <input type="number" name="total_amount" value={carData.total_amount} onChange={handleChange} required />
            </label>
            <label>
              APR:
              <input type="text" name="apr" value={carData.apr} onChange={handleChange} required />
            </label>
            <label>
              Snapshot:
              <input type="text" name="snapshot" value={carData.snapshot} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Add New Car</button>
        </form>
      </div>
    );
  };
  
  export default AddItem;
  
