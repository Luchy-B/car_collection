import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservationsSlice';


const Reservation = () => {
    const dispatch = useDispatch();
    const { data: reservations, loading, error } = useSelector(
        (state) => state.reservations
    );

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
            <h1>Reservations</h1>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        <p>Name: {reservation.name}</p>
                        <p>City: {reservation.city}</p>
                        <p>Date: {reservation.date}</p>
                        </li>
                ))}
            </ul>
        </div>
    );
};


export default Reservation;
