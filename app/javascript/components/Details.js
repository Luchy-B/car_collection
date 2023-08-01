import React from 'react';
import { TfiArrowCircleRight } from 'react-icons/tfi';

const Details = () => (
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
