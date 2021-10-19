import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center w-10/12 mx-auto my-36 ">
            <h2 className="text-3xl text-red-500">404!</h2>
            <p className="text-5xl text-red-500 font-extrabold">Opps! Page Not Found</p>
            <NavLink to="/"> <button className="py-1 px-6 bg-blue-900 rounded mt-6 text-white">Back to home</button> </NavLink>
        </div>
    );
};

export default NotFound;