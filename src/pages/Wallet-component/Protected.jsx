import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Protected = ({email}) => {
    if (email){
        return (
        <div>
            <Outlet/>
        </div>
    );
    }
    return <Navigate to='/login'/>
};

export default Protected; 