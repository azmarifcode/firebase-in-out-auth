import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error(error));
            });
    };

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between px-8">
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">
                        Firebase
                    </Link>
                </div>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">
                        Home
                    </Link>
                    <Link
                        className="btn btn-ghost normal-case text-xl"
                        to="orders">
                        Orders
                    </Link>
                    <Link
                        className="btn btn-ghost normal-case text-xl"
                        to="about">
                        About
                    </Link>
                    {user?.email ? (
                        <Link
                            onClick={handleOut}
                            className="btn btn-ghost normal-case text-xl"
                            to="login">
                            Logout
                        </Link>
                    ) : (
                        <Link
                            className="btn btn-ghost normal-case text-xl"
                            to="login">
                            Login
                        </Link>
                    )}

                    <Link
                        className="btn btn-ghost normal-case text-xl"
                        to="registration">
                        Registration
                    </Link>

                    {user?.email && <span>{user.email}</span>}
                </div>
            </div>
        </div>
    );
};

export default Header;
