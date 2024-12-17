import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LoginAnimation from '../../../assets/Lotti/loginLottie.json'
import AuthContext from '../../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
    const { Login } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()
    console.log('in sign in page', location)
    const from = location.state || '/';
    const handleSignIN = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // password validations

        Login(email, password)
            .then(result => {
                console.log('sign in', result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
            // .then(result => {
            //     console.log("sign in", result.user.email);
            //     const user = {email: result.user.email}
            //     axios.post('http://localhost:5000/jwt', user, {withCredentials : true})
            //     .then(res => {
            //         console.log(res.data)
            //     })
            //     // navigate(from)
            // })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={LoginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className=" ml-8 mt-4 text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleSignIN} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;