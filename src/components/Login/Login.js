import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import {useLocation, useParams, Link} from 'react-router-dom'


const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    const location = useLocation()
    const navigate_url = '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result=> {
            navigate_url(result.user)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;