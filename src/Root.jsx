import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
};

export default Root;