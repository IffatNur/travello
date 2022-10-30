import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers';
import Home from '../components/Home/Home';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
