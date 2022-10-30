import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelDetail from '../HotelDetail/HotelDetail';

const Hotels = () => {
    const hotels = useLoaderData();
    return (
        <div className='grid grid-cols-2 bg-blue-500'>
            {
                hotels.map( hotel => <HotelDetail key={hotel.id} hotel={hotel}></HotelDetail>)
            }
        </div>
    );
};

export default Hotels;