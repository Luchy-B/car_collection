import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/carsSlice';

const AddItem = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [financeFee, setFinanceFee] = useState(0);
  const [purchaseFee, setPurchaseFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [duration, setDuration] = useState(1);
  const [apr, setApr] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carData = new FormData();
    carData.append('car[name]', name);
    carData.append('car[description]', name);
    carData.append('car[finance_fee]', name);
    carData.append('car[purchase_fee]', name);
    carData.append('car[total_amount]', name);
    carData.append('car[duration]', name);
    carData.append('car[apr]', name);
    carData.append('car[snapshot]', name);
    await dispatch(addCar(carData));

  };

  return (
    <div className="addItem_container">
      <form onSubmit={handleSubmit}>
        <h3 className="add-form-title">Add an Item</h3>
        <div className="form-group">
          <label htmlFor="name">

            <input type="text" name="name" onChange={(e) => setName(e.target.value)} required placeholder="Name" />
          </label>
          <label htmlFor="description">

            <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} required placeholder="Description" />
          </label>
          <label htmlFor="finance_fee">

            <input type="number" name="finance_fee" onChange={(e) => setFinanceFee(e.target.value)} required placeholder="Finance Fee" />
          </label>
          <label htmlFor="purchase_fee">

            <input type="number" name="purchase_fee" onChange={(e) => setPurchaseFee(e.target.value)} required placeholder="Purchase Fee" />
          </label>
          <label htmlFor="total_amount">

            <input type="number" name="total_amount" onChange={(e) => setTotalAmount(e.target.value)} required placeholder="Total Amount" />
          </label>

          <label htmlFor="duration">
            <input type="number" name="duration" onChange={(e) => setDuration(e.target.value)} required placeholder="duration" />
          </label>

          <label htmlFor="apr">

            <input type="number" name="apr" onChange={(e) => setApr(e.target.value)} placeholder="APR" />
          </label>
          <label htmlFor="snapshot">

            <input type="file" name="snapshot" onChange={(e) => setName(e.target.files[0])} placeholder="Snapshot" />
          </label>
        </div>
        <button type="submit" className="btn_add_item">Add New Car</button>
      </form>
    </div>
  );
};

export default AddItem;
