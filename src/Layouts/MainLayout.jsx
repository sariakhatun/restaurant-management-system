import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto my-6'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;