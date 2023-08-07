import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { useSelector, useDispatch } from 'react-redux';
import { getCar } from '../redux/Cars/carsSlice';

export const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { car } = useSelector((store) => store.cars);

  useEffect(() => {
    dispatch(getCar(10));
  }, [dispatch]);

  console.log(car);

  // const detail = cars.find((element) => element.id === parseInt(id, 10));
  return (
    <>
      {/* <h1>Welcome to Details Page</h1>
      <div className="detail-container">
        <div className="details-content">
          <h3>{car.name}</h3>

          <div className="details-description">
            <p>
              Description:
              {detail.description}
            </p>
          </div>

          <ul className="car-details">
            <li>
              <p>Finance Fee:</p>
              <p className="car-detail">{detail.finance_fee}</p>
            </li>
            <li>
              <p>Purchase Fee:</p>
              <p className="car-detail">{ detail.purchase_fee }</p>
            </li>
            <li>
              <p>total_amount:</p>
              <p className="car-detail">{ detail.total_amount }</p>
            </li>
            <li>
              <p>APR:</p>
              <p className="car-detail">{ detail.apr }</p>
            </li>
            <li>
              <p>total_amount:</p>
              <p className="car-detail">{ detail.total_amount }</p>
            </li>
          </ul>
          <div className="vehicle-circle mainImg">
            <img className="vehicle" src={detail.snapshot_url} alt="categoryIcon" />
          </div>
          <div className="car-reserve">
            <p>Reserve</p>
            <TfiArrowCircleRight className="arrow-right-reserve" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Details;
