import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getCars, deleteCar } from '../redux/Cars/carsSlice';
import { useLocation } from 'react-router-dom';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const [reloadFlag, setReloadFlag] = useState(false);
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, reloadFlag]);
  const { cars, isLoading } = useSelector((store) => store.cars);
  const location = useLocation();
  const isDeleteRoute = location.pathname.includes('DELETE');

  const handleDeleteCar = async (carId) => {
    await dispatch(deleteCar(carId));
    setReloadFlag(!reloadFlag);
  };

  console.log(cars);

  return (
    <div className='cars-container'>
      {cars.map((car) => (
        <div className='car-item'>
          <img src={car.snapshot} alt="categoryIcon"/>
          <h2>{car.name}</h2>
          {isDeleteRoute &&
            <button onClick={() => handleDeleteCar(car.id)}>Delete Item</button>
          }
        </div>
      ))}
      <h2></h2>
    </div>
  );
}
export default DeleteItem;
