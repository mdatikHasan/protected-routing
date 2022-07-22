import React from 'react';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            {user.displayName}
            <h1>This is Home page</h1>
        </div>
    );
};

export default Home;