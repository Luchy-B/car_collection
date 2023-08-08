import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/Cars/carsSlice';

const AddItem = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [financeFee, setFinanceFee] = useState(0);
  const [purchaseFee, setPurchaseFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(purchaseFee);
  const [duration, setDuration] = useState(1);
  const [apr, setApr] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  useEffect(() => {
    setTotalAmount(parseFloat(purchaseFee) + parseFloat(financeFee));
  }, [purchaseFee, financeFee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (totalAmount >= purchaseFee) {
      const carData = new FormData();
      carData.append('car[name]', name);
      carData.append('car[description]', description);
      carData.append('car[finance_fee]', financeFee);
      carData.append('car[purchase_fee]', purchaseFee);
      carData.append('car[total_amount]', totalAmount);
      carData.append('car[duration]', duration);
      carData.append('car[apr]', apr);
      carData.append('car[snapshot]', snapshot);
      await dispatch(addCar(carData));
      window.location.reload();
    }
  };

  return (
    <div className="addItem_container">
      <form onSubmit={handleSubmit} className="form">
        <div className="forms form-add">
          <h3>Add an Item</h3>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="add_item_input"
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description"
              className="add_item_input"
            />
          </label>
          <label htmlFor="finance_fee">
            Finance Fee:
            <input
              type="number"
              name="finance_fee"
              value={financeFee}
              onChange={(e) => setFinanceFee(e.target.value)}
              required
              placeholder="Finance Fee"
              className="add_item_input"
            />
          </label>
          <label htmlFor="purchase_fee">
            Purchase Fee:
            <input
              type="number"
              name="purchase_fee"
              value={purchaseFee}
              onChange={(e) => setPurchaseFee(e.target.value)}
              required
              placeholder="Purchase Fee"
              className="add_item_input"
            />
          </label>
          <label htmlFor="total_amount">
            Total Amount:
            <input
              type="number"
              name="total_amount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              required
              placeholder="Total Amount"
              className="add_item_input"
              disabled
            />
          </label>
          <label htmlFor="duration">
            Duration:
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              placeholder="Duration"
              className="add_item_input"
            />
          </label>
          <label htmlFor="apr">
            APR:
            <input
              type="number"
              name="apr"
              value={apr}
              onChange={(e) => setApr(e.target.value)}
              placeholder="APR"
              className="add_item_input"
            />
          </label>
          <label htmlFor="snapshot">
            Snapshot:
            <input
              type="file"
              name="snapshot"
              onChange={(e) => setSnapshot(e.target.files[0])}
              placeholder="Snapshot"
              className="add_item_input"
            />
          </label>
          <button type="submit" className="submit">
            Add New Car
          </button>
        </div>
        {totalAmount < purchaseFee && (
          <p>Total amount must be greater than or equal to purchase fee.</p>
        )}
        <button
          type="submit"
          className="btn_add_item"
          disabled={totalAmount < purchaseFee}
        >
          Add New Car
        </button>
      </form>
    </div>
  );
};

export default AddItem;
