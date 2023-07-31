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
          <label htmlFor="inputField">
            Name:
            <input type="text" id="inputField" name="name" value={carData.name} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            Description:
            <input type="text" id="inputField" name="description" value={carData.description} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            Finance Fee:
            <input type="number" id="inputField" name="finance_fee" value={carData.finance_fee} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            Purchase Fee:
            <input type="number" id="inputField" name="purchase_fee" value={carData.purchase_fee} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            Total Amount:
            <input type="number" id="inputField" name="total_amount" value={carData.total_amount} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            APR:
            <input type="text" id="inputField" name="apr" value={carData.apr} onChange={handleChange} required />
          </label>
          <label htmlFor="inputField">
            Snapshot:
            <input type="text" id="inputField" name="snapshot" value={carData.snapshot} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit" className="btn_add_item">Add New Car</button>
      </form>
    </div>
  );
};

export default AddItem;
