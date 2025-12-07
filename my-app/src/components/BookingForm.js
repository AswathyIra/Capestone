import React, { useState } from 'react';
import './Reservations.css';


const BookingForm = ({ setReservations,availableTimes,dispatchTimes}) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const updateReservations = (newReservation) => {
        setReservations((prevReservations) => [...prevReservations, newReservation]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTimes({ type: 'update', date });
        // Form is valid, proceed with submission
        updateReservations({ date, time, guests, occasion });
    };

    return (
        <div className="booking-form-container">
            <h2>Grab Your Seat</h2>
            <form style={{ display: 'grid', maxWidth: '500px', gap: '20px' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="first-name">First Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="last-name">Last Name <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                </div>

                <label htmlFor="res-date">Choose date <span style={{ color: 'red' }}>*</span></label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />

                <label htmlFor="res-time">Choose time <span style={{ color: 'red' }}>*</span></label>
                <select
                    id="res-time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                >
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests <span style={{ color: 'red' }}>*</span></label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    required
                />

                <label htmlFor="occasion">Occasion <span style={{ color: 'red' }}>*</span></label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    required
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input type="submit" id="make-reservation" value="Make Your reservation" />
            </form>
        </div>
    );
};

export default BookingForm;