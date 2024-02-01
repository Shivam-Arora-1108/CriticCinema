import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style.css';
import axios from 'axios';
import ibutton from '../assets/images/star.png';
import imageNA from '../assets/images/imageunavailable.jpg';

const ScreenOne = () => {

    const [searchQuery, setSearchQuery] = useState(null);
    const [data, setData] = useState();
    const history = useNavigate(); 
    const [isSearched, setIsSearched] = useState(false);



    const onSubmit = (e) => {
        e.preventDefault();

        setIsSearched(true);
    
        const data = {
            searchQuery: searchQuery,
        };
        console.log(data)
        
        const url_get = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
        axios.get(url_get)
        .then(res => {
        setData(res.data);
        console.log(res.data);
        console.log('Data Fetched');
        })
        .catch(error => {
        console.error('Error fetching Session List:', error);
        });
    };

    const handleKnowMoreClick = (dataItem) => {
        window.sessionStorage.setItem('dataItem', JSON.stringify(dataItem));
        window.sessionStorage.setItem('dataItems', JSON.stringify(dataItem));
        history('specificShowData');
    };

    return (
        <div className='main-screen'>
        <center>
            <div className='searchbox'>
                <form>
                <input
                        type='string'
                        name='searchQuery'
                        placeholder='Search'
                        value={searchQuery} required autoComplete='off'
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                <input
                    type='submit'
                    value='Submit'
                    className='btn-sbmt'
                    onClick={onSubmit}
                    />
                </form>
            </div>
            {(isSearched==false)?
            <div className='banner-photo-container'> </div> 
            :
            (data=='') ? <div className='banner-photo-warning'> </div>  :
            (<div className='banner-outer'>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((datas, index) => (
                        <React.Fragment key={index}>
                            <div className='banner-inner-movie-tile' onClick={() => handleKnowMoreClick(datas)}>
                                <center>
                                    {datas.show.image==null ? ((<img src={imageNA} alt={datas.show.name} className='movie-poster'/>)) : (<img src={datas.show.image.original} alt={datas.show.name} className='movie-poster'/>) } <br/>
                                    <span className='movie-title-name'>{datas.show.name}</span>
                                    <span className='know-more-btn'>
                                    {(datas.show.rating.average == null) ? "N/A" : (datas.show.rating.average)} <img src={ibutton} className='ibutton'/>    
                                    </span>
                                </center>
                            </div>
                        </React.Fragment>
                    ))
                ) : <></>}
            </div>)
            }
            </center>
        </div>
    );
};

export default ScreenOne;