import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { logOut, user } = useContext(AuthContext)






    return (
        <div className='w-full bg-white shadow-xl h-24 flex items-center'>
            <div className='lg:container mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='font-semibold'><Link to='/'>Home</Link></li>
                                <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                                <li className='font-semibold'><Link to='/services'>Services</Link></li>
                                {/* <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li> */}
                                {/* <li className='font-semibold'><Link to='/login'>Login</Link></li> */}
                                {/* <li onClick={logOut}><Link>Log Out</Link></li> */}

                                {
                                    user?.uid ?
                                        <>
                                            <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                                            <li className='font-semibold'><Link to='/myreview'>My Reviews</Link></li>
                                            <li className='font-semibold' onClick={logOut}><Link to="/signup">LogOut</Link></li>
                                        </>
                                        :
                                        <><li className='font-semibold'><Link to="/login">Login</Link></li>
                                            <li className='font-semibold'><Link to="/signup">Sign Up</Link></li>
                                        </>
                                }
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-3xl">Truss<span className='text-primary'>Plumbing</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li className='font-semibold'><Link to='/'>Home</Link></li>
                            <li className='font-semibold'><Link to='/services'>Services</Link></li>
                            <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                            {/* <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li> */}
                            {/* <li className='font-semibold'><Link to='/login'>Login</Link></li> */}
                            {/* <li onClick={logOut}><Link>Log Out</Link></li> */}

                            {
                                user?.uid ?
                                    <>
                                        <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                                        <li className='font-semibold'><Link to='/myreview'>My Reviews</Link></li>
                                        <li className='font-semibold' onClick={logOut}><Link to="/signup">LogOut</Link></li>
                                    </>
                                    :
                                    <><li className='font-semibold'><Link to="/login">Login</Link></li>
                                        <li className='font-semibold'><Link to="/signup">Sign Up</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* <Link to='/services' className="btn">Go To Services</Link> */}
                        <section>
                            {
                                user?.uid ?
                                    <div className='flex items-center'>
                                        <li className='font-semibold mr-5 list-none'>{user?.displayName}</li>
                                        {/* <img style={{ width: "50px", height: '50px' }} className="rounded-full" src={user?.photoURL} alt="" /> */}
                                        <FaUserAlt className='text-xl text-primary' />
                                    </div>
                                    :
                                    <FaUserAlt className='text-xl text-primary' />
                            }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;