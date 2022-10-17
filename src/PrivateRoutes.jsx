import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    if (loading)
    {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
