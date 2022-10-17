import React, { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';

const Home = () =>
{

    const { user } = useContext(AuthContext)
    // console.log(user);

    return (
        <div>
            <h1>Home page</h1>
            <br />
            <h1>{user?.displayName && user.displayName}</h1>
        </div>
    );
};

export default Home;