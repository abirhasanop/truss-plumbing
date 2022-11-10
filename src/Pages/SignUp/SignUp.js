import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/userTitle';

const SignUp = () => {
    const { createUserWithEmail, googleSignIn, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    useTitle("Sign Up")

    let from = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, email, password)


        // validation
        if (password.length < 6) {
            return toast.error("Password Must Have 6 Charecters")
        }

        // Email sing up
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)


                const currentUser = {
                    email: user.email
                }

                fetch(`https://assignment11-server-beta.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("trussPlumbingToken", data.token)
                        navigate(from, { replace: true })
                    })



                // navigate(from, { replace: true })
                handleUpdateUser(name, photoURL)
                toast.success("Account Created")
            })
            .catch(e => {
                console.error(e)
                toast.error(e.message)
            })


    }


    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)


                const currentUser = {
                    email: user.email
                }

                fetch(`https://assignment11-server-beta.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("trussPlumbingToken", data.token)
                        navigate(from, { replace: true })
                    })




                // navigate(from, { replace: true })
                toast.success("Login Succesfull")
            })
            .catch(e => {
                console.error(e)
                const eMessage = e.message.slice()
                toast.error(eMessage)
            })
    }




    return (
        <div className='bg-slate-100 mt-14 hero'>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className='text-center text-lg my-5'>Sign Up today to get best quality service in market. Our goal is not sell our services. <br /> Our Goal is to provide velue to our clients</p>
                </div>
                <div style={{ width: "450px" }} className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p href="#" className="label-text-alt link link-hover">
                                        <Link to='/login'>Already have an account? Login</Link>
                                    </p>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>

                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full mb-2"><FaGoogle /> Sign In With Google</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;