import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import "./Reservations.css";
import { useEffect } from "react";

const Reservations = () => {
  const [reservations, setReservations] = useState([
    { date: "2023-10-01", time: "7:00 PM", guests: 2, occasion: "Anniversary" },
    { date: "2023-10-05", time: "8:00 PM", guests: 4, occasion: "Birthday" },
  ]);

//   useEffect(async () => {
// //    const availableTimes = await fetchAPI('2023-10-15');
//   }, []);

useEffect(() => {
    const fetchAvailableTimes = async () => {
        try {
            const response = await window.fetchAPI('2023-10-15');
            const data = await response.json();
              console.error(data);
            // dispatchTimes({ type: "initialize", payload: data });
        } catch (error) {
            console.error("Error fetching available times:", error);
        }
    };

    fetchAvailableTimes();
}, []);

  // Function to update available times based on selected date
  function updateTimes(state, action) {
    // For now, always return the same times regardless of date
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  // Function to initialize available times
  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  // useReducer for availableTimes
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div className="reservations-container">
      <BookingForm
        className="reservations-form"
        setReservations={setReservations}
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
      />
      {/* <h1 className="reservations-title">Reservations</h1> */}
      <div
        className="reservations-list-container"
        style={{ marginTop: "40px" }}
      >
        {reservations.length === 0 ? (
          <p className="reservations-list-empty">No reservations made yet.</p>
        ) : (
          <ul
            className="reservations-list"
            style={{ padding: 0, listStyle: "none" }}
          >
            {reservations.map((r, idx) => (
              <li
                key={idx}
                className="reservations-list-item"
                style={{
                  background: "#f9f9f9",
                  marginBottom: "12px",
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <strong>Date:</strong> {r.date} <br />
                <strong>Time:</strong> {r.time} <br />
                <strong>Guests:</strong> {r.guests} <br />
                <strong>Occasion:</strong> {r.occasion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Reservations;
