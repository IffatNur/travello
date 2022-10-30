import React from 'react';
import { Link } from 'react-router-dom';
import '../Place/Place.css'

const Place = ({place}) => {
    const {img, name} = place;
    return (
      <div>
        <Link to='/hotels'>
          <div
            className="w-52 h-2/5 mx-auto  place-card my-36 border border-slate-500 shadow-2xl"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <p className= "text-white font-extrabold py-auto text-3xl absolute bottom-44 bg-blue-900 px-3 py-4 mb-0">{name}</p>
          </div>
        </Link>
      </div>
    );
};

export default Place;