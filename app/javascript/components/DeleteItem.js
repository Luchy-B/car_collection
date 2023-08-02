import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCars, deleteCar } from '../redux/Cars/carsSlice';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const [reloadFlag, setReloadFlag] = useState(false);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, reloadFlag]);
  const { cars } = useSelector((store) => store.cars);
  const location = useLocation();
  const isDeleteRoute = location.pathname.includes('DELETE');
  console.log(cars);
  const handleDeleteCar = async (carId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this car?');
    if (shouldDelete) {
      await dispatch(deleteCar(carId));
      setReloadFlag(!reloadFlag);
    }
  };

  return (
    <div className="carsContainer f">
      {cars.map((car) => (
        <div className="carItem f r" key={car.id}>
          <img src={car.snapshot_url} alt="categoryIcon" />
          <h2>{car.name}</h2>
          {isDeleteRoute
            && <button type="button" onClick={() => handleDeleteCar(car.id)}>Delete Item</button>}
        </div>
      ))}
    </div>
  );
};
export default DeleteItem;
