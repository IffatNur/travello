import React from 'react';
import { Link } from "react-router-dom";


const HotelDetail = ({ hotel }) => {
  const {id, name, address, contact, phone } = hotel;
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto my-4">
        <img
          className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTMBL4BWxkZYhdlaKo5j7oC0eSr31Gv6Lqg&usqp=CAU"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {address}
          </p>
          <Link to={`${id}`}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;