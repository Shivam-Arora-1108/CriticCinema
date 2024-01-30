// BookingForm.jsx

import React, { useState } from 'react';
import '../assets/BookingForm.css'; // Import the CSS file for styling

const BookingForm = ({ movieName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        numberOfTickets: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container">
            <h2>Book Tickets for {movieName}</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Number of Tickets:</label>
                    <input type="number" name="numberOfTickets" value={formData.numberOfTickets} onChange={handleChange} min="1" required />
                </div>
                <button type="submit" className="submit-button">Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;
