import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Registration = () => {
    const { createUser, singInGoogle } = useContext(AuthContext);
    // console.log('createUser', createUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset()
                console.log(user);
            })
            .catch((error) => {
                const errorMassage = error.massage;
                console.log(errorMassage);
            });
    };

    const handleGoogle = () =>
    { 
        singInGoogle()
            .then(result =>
            {
                const user = result.user
                console.log(user)
            })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">
                            Registration now!
                        </h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered required"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered required"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered required"
                                />
                                <label className="label">
                                    <Link
                                        to="/login"
                                        className="label-text-alt link link-hover">
                                        Already, have an account?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Registration
                                </button>
                            </div>
                        </form>
                            <div className="mx-auto mb-4">
                                <button onClick={handleGoogle} className="btn btn-outline btn-info">
                                    Google
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
