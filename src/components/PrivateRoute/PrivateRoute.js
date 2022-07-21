import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useFirebase();
    console.log(user)
    const location = useLocation()
    if (isLoading) {
        return <Spinner animation='border' variant='primary' />
    }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
};

export default PrivateRoute;