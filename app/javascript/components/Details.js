import React from 'react';
import { useParams } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { useSelector } from 'react-redux';

export const Details = () => (
  const { id } = useParams();
  const { car } = useSelector((store)=> store.car);
  const detail = car.find((element) => element.id.toString() === id.toString());
  <>
    <div className="detail-container">

      <div className="details-content">
        <h3>Name: VESPA 946</h3>

        <div className="details-description">
          <p>Description: - $350 Deposit upon any vespa purchase</p>
        </div>

        <ul className="car-details">
          <li>
            <p>Finance Fee:</p>
            <p className="car-detail">$129</p>
          </li>
          <li>
            <p>Purchase Fee:</p>
            <p className="car-detail">$249</p>
          </li>
          <li>
            <p>total_amount:</p>
            <p className="car-detail">$9,879</p>
          </li>
        </ul>
        <div className="car-reserve">
          <p>Reserve</p>
          <TfiArrowCircleRight className="arrow-right-reserve" />
        </div>
      </div>
    </div>
  </>
);

export default Details;
