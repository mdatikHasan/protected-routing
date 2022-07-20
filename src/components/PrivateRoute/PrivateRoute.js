import React from 'react';
import { Spinner } from 'react-bootstrap';
import {Navigate} from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useFirebase()
    if(isLoading){
        return <Spinner animation='border' variant='primary' />
    }
    console.log(user)
    return(
        user.email? children :
        <Navigate to={{pathname: '/login'}}></Navigate>
    )
};

export default PrivateRoute;