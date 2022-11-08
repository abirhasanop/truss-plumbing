import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='mt-20'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;