import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Review = ({ review, handleDelete }) => {
    const { message, _id, userName, userImage, userEmail } = review
    return (
        <div>
            <section>
                <div className="container flex flex-col w-1/2 p-6 divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={userImage} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold">{userName}</h4>
                                <span className="text-xs dark:text-gray-400">{userEmail}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                            <FaTrashAlt onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600 cursor-pointer' />
                            <Link title='Go To My Review Page' to='/myreview'><HiArrowNarrowRight className='text-primary font-bold text-3xl' /></Link>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-xl font-semibold dark:text-gray-400">
                        <p>{message}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;