import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { RxTrackPrevious } from 'react-icons/rx';
import { getCar } from '../redux/Cars/carsSlice';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);

  const { car } = useSelector((store) => store.cars);

  return (
    <>
      {car
      && (
      <>
        <div className="detail-container f c">
          <div className='details-holder f'>  
            <div className="detailsPage1">
              <div className="detailImg">
                <img className="detailVehicle" src={car.snapshot_url} alt="categoryIcon" />
              </div>
            </div>
            <div className="details-content">
              <h3>{car.name}</h3>

              <div className="details-description">
                <p>
                  Description:
                  {car.description}
                </p>
              </div>

              <ul className="car-details">
                <li>
                  <p>Finance Fee:</p>
                  <p className="car-detail">${car.finance_fee}</p>
                </li>
                <li>
                  <p>Purchase Fee:</p>
                  <p className="car-detail">${ car.purchase_fee }</p>
                </li>
                <li>
                  <p>total_amount:</p>
                  <p className="car-detail">${ car.total_amount }</p>
                </li>
                <li>
                  <p>Duration:</p>
                  <p className="car-detail">{ car.duration } Months</p>
                </li>
              </ul>
              <div className='apr-detail'>
                <p className="car-detail"><span>{ car.apr }% APR </span>Representative</p>
              </div>
              <NavLink to={`/RESERVE_FORM/${car.id}`}>
                <div className="car-reserve">
                  <p>Reserve</p>
                  <TfiArrowCircleRight className="arrow-right-reserve" />
                </div>
              </NavLink>
            </div>
          </div>
          <div className="detailsBack-container">
            <NavLink to={`/`}>
              <RxTrackPrevious className="detailsBack" />
            </NavLink>
            </div>
        </div>
      </>
      )}
    </>
  );
};

export default Details;
