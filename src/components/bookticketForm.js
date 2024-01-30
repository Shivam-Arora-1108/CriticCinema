import React, { useEffect, useState } from 'react';

const BookTicket = () => {
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        const dataString = localStorage.getItem('dataItem');
        if (dataString) {
            setStoredData(JSON.parse(dataString));
        }
    }, []);
    return (
        <div>
            {storedData ? (
                <div>
                    <img src={storedData.show.image.medium} alt={storedData.show.name} />
                    <h3>{storedData.show.name}</h3>
                </div>
            ) : (
                <p>No data stored</p>
            )}
        </div>
    );
  };
  
  export default BookTicket;