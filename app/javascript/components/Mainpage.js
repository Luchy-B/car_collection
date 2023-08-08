import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { CiInstagram } from 'react-icons/ci';
import { RxTrackNext, RxTrackPrevious } from 'react-icons/rx';
import { getCars } from '../redux/Cars/carsSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth > 480) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 480) {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { cars, isLoading } = useSelector((store) => store.cars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const totalItems = cars.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const indexOfLastItem = (currentPage * itemsPerPage);
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageCars = cars.slice(indexOfFirstItem, indexOfLastItem);

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="main-page f r">
      {cars.length > 0
        ? (
          <>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`pagination prev f c ${currentPage === 1 ? 'disabled' : 'active'}`}
            >
              <RxTrackPrevious className="pagination-previous" />
            </button>
            <div className="main-container f c">
              <div className="main-header f c">
                <h2>
                  LATEST MODELS
                </h2>
                <span>
                  Please select a Car Model
                </span>
                <span className="main-header-underline" />
              </div>
              <div className="vehicles-container f r">
                {currentPageCars.map((car) => (
                  <div key={`cars${car.id}`} className="vehicle-holder main-content f c">
                    <div className="vehicle-circle mainImg f">
                      <NavLink to={`/DETAILS/${car.id}`}>
                        <img className="vehicle" src={car.snapshot_url} alt="categoryIcon" />
                      </NavLink>
                      <div className="background-holder" />
                    </div>

                    <div className="main-description f c">
                      <h3 className="vehicle-model">
                        { car.name}
                      </h3>
                      <p className="vehicle-description">
                        { car.description }
                      </p>
                      <div className="vehicle-icons f r">
                        <a
                          className="facebook-icon i f"
                          href="facebook"
                        >
                          <ImFacebook className="vehicle-icon" />
                        </a>
                        <a
                          className="twitter-icon i f"
                          href="twitter"
                        >
                          <AiOutlineTwitter className="vehicle-icon" />
                        </a>
                        <a
                          className="instagram-icon i f"
                          href="instagram"
                        >
                          <CiInstagram className="vehicle-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`pagination next f c ${currentPage === totalPages ? 'disabled' : 'active'}`}
            >
              <RxTrackNext className="pagination-next" />
            </button>
          </>
        ) : (
          <p>
            It seems like we don&apos;t have any Cars into our Catalogue.
            <br />
            {' '}
            Try using &quot;Add Item&quot; on the menu!.
          </p>
        )}
    </div>
  );
};

export default Main;
