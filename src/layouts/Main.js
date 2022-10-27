import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Header from '../Pages/Header/Header';

const Main = () => {
    const {check} = useContext(AuthContext);
    return (
        <div className={!check ? "bg-gray-100" : "bg-gray-600"}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;