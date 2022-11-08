import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

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
                                <li><Link>Home</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>Services</Link></li>
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-3xl">Truss<span className='text-primary'>Plumbing</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            {/* <li><Link to='/signup'>Sign Up</Link></li> */}
                            {/* <li><Link to='/login'>Login</Link></li> */}
                            {/* <li onClick={logOut}><Link>Log Out</Link></li> */}

                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='myreview'>My Reviews</Link></li>
                                        <li onClick={logOut}><Link to="/signup">LogOut</Link></li>
                                    </>
                                    :
                                    <><li><Link to="/login">Login</Link></li>
                                        <li><Link to="/signup">Sign Up</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;