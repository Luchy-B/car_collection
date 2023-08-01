import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/carsSlice';

const AddItem = () => {
  const dispatch = useDispatch();

  const [carData, setCarData] = useState({
    name: '',
    description: '',
    finance_fee: '',
    purchase_fee: '',
    total_amount: '',
    duration: '',
    apr: '',
    snapshot: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar(carData));
    setCarData({});
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

            <input type="text" name="name" value={carData.name} onChange={handleChange} required placeholder="Name" />
          </label>
          <label htmlFor="description">

            <input type="text" name="description" value={carData.description} onChange={handleChange} required placeholder="Description" />
          </label>
          <label htmlFor="finance_fee">

            <input type="number" name="finance_fee" value={carData.finance_fee} onChange={handleChange} required placeholder="Finance Fee" />
          </label>
          <label htmlFor="purchase_fee">

            <input type="number" name="purchase_fee" value={carData.purchase_fee} onChange={handleChange} required placeholder="Purchase Fee" />
          </label>
          <label htmlFor="total_amount">

            <input type="number" name="total_amount" value={carData.total_amount} onChange={handleChange} required placeholder="Total Amount" />
          </label>

          <label htmlFor="duration">
            <input type="number" name="duration" value={carData.duration} onChange={handleChange} required placeholder="duration" />
          </label>

          <label htmlFor="apr">

            <input type="number" name="apr" value={carData.apr} onChange={handleChange} placeholder="APR" />
          </label>
          <label htmlFor="snapshot">

            <input type="file" name="snapshot" onChange={handleChange} placeholder="Snapshot" />
          </label>
        </div>
        <button type="submit" className="btn_add_item">Add New Car</button>
      </form>
    </div>
  );
};

export default AddItem;
