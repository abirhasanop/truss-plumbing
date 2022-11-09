import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/userTitle';

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    useTitle("Login")

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        if (password.length < 6) {
            return toast.error("Password Must Have 6 Charecters")
        }


        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                toast.success("Login Succesfull")
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }


    // Google SignIn
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                toast.success("Login Succesfull")
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }




    return (
        <div className='mt-14 hero'>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className='text-center text-lg my-5'>Sign Up today to get best quality service in market. Our goal is not sell our services. <br /> Our Goal is to provide velue to our clients</p>
                </div>
                <div style={{ width: "450px" }} className="card flex-shrink-0  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <div>
                                    <label className="label">
                                        <p href="#" className="label-text-alt link link-hover">
                                            <Link to='/signup'>New here? Sign Up</Link>
                                        </p>
                                    </label>

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>

                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full mb-2"><FaGoogle /> Sign In With Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;