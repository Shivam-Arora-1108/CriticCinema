import React from 'react';
import successImage from './success-image.jpg'; // Import the success image

const SuccessPage = () => {
    return (
        <div className="success-page">
            <h2>Booking Successfully Done!</h2>
            <img src={successImage} alt="Success" />
        </div>
    );
};

export default SuccessPage;