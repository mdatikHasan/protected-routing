import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import {useLocation, useParams, Link, useNavigate} from 'react-router-dom'


const Login = () => {
    const [gUser, setGUser] = useState({})
    const {signInUsingGoogle, user} = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result=> {
            setGUser(result.user)
            
        })
    }
    console.log(gUser?.email)
    useEffect(() => {
        if (gUser?.email) {
            navigate(from, { replace: true }); 
        }
    }, [from, gUser, navigate])
    if (gUser?.email) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            
        </div>
        // <div>
        //     <button onClick={handleGoogleSignIn}>Google Sign In</button>
        // </div>
    );
};

export default Login;