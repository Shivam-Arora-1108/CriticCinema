// ScreenTwo.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const ScreenTwo = () => {
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        const dataString = localStorage.getItem('dataItem');
        if (dataString) {
            setStoredData(JSON.parse(dataString));
        }
    }, []);

    return (
        <div className="container">
            {storedData ? (
                <div className="content-container">
                    <img className="image" src={storedData.show.image.medium} alt={storedData.show.name} />
                    <div className="text-container">
                        <h3 className="title">{storedData.show.name}</h3>
                        <p className="genres">Genres: {storedData.show.genres.join(', ')}</p>
                        <p className="language">Language: {storedData.show.language}</p>
                        <p className="summary"><b>Summary</b>: {storedData.show.summary}</p>
                        
                        {/* <p className="summary">{storedData.show.summary}</p> */}
                        <Link to="/BookTicket" className="button-link">
    <button className="button">Book Tickets</button>
</Link>

                    </div>
                </div>
            ) : (
                <p>No data stored</p>
            )}
        </div>
    );
};

export default ScreenTwo;
