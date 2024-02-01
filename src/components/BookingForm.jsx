import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Style(2).css";

const BookingForm = () => {
  const [storedData, setStoredData] = useState(null);
  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    const dataString = window.sessionStorage.getItem("dataItem");
    if (dataString) {
      setStoredData(JSON.parse(dataString));
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let isValid = false;
    switch (fieldName) {
      case "name":
        isValid = value.trim() !== "";
        break;
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case "phone":
        isValid = /^\d{10}$/.test(value);
        break;
      default:
        break;
    }
    setFormValidity({ ...formValidity, [fieldName]: isValid });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValidity).every((isValid) => isValid)) {
      console.log("Form submitted:", formData);
      handleButtonClick();
    } else {
      console.log("Form submission failed. Please fill all fields correctly.");
    }
  };

  const history = useNavigate();

  const handleButtonClick = () => {
    history("/success");
  };

  return (
    <div className="container">
      {storedData ? (
        <div className="content-container">
          <img
            className="image"
            src={storedData.show.image.medium}
            alt={storedData.show.name}
          />
          <div className="text-container">
            <h1>Book Ticket for</h1>
            <h3 className="title">{storedData.show.name}</h3>
            <p className="genres">Genre: {storedData.show.genres.join(", ")}</p>
            <p className="language">Rating: {storedData.show.rating.average}</p>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email:</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone:</label>
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tickets:</label>
                <input
                  className="form-input"
                  type="number"
                  name="numberOfTickets"
                  value={formData.numberOfTickets}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={!Object.values(formValidity).every((isValid) => isValid)}
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p>No data stored</p>
      )}
    </div>
  );
};

export default BookingForm;
