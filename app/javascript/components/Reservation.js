import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';

const Reservation = () => {
    const dispatch = useDispatch();
    const reservationsState = useSelector((state) => state.reservations);
    const reservations = reservationsState.data;
    const loading = reservationsState.loading;
    const error = reservationsState.error;

    useEffect(() => {
        dispatch(fetchReservations());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>My Reservations</h2>
            {reservations && reservations.length > 0 ? (
                <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            <p>Name: {reservation.car_name}</p>
                            <p>City: {reservation.city}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reservations found.</p>
            )}
        </div>
    );
};

export default Reservation;
