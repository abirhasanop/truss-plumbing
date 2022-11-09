import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const MySoloReview = ({ review, handleDelete }) => {
    const [star, setStart] = useState(2)

    const { message, _id, serviceDetails, servicePicture, serviceTitle, userImage, userName } = review


    return (
        <>
            <main>
                <section className='w-11/12 lg:w-1/2 bg-white my-5 shadow-xl mx-auto'>
                    {/* Header Part */}
                    <div className="shadow-lg overflow-hidden">
                        <div className="pt-3 pb-3 md:pb-1 px-4 bg-slate-400 md:px-16 bg-opacity-40">
                            <div className='flex justify-between items-center'>
                                <div className="flex flex-wrap items-center">
                                    <img className="mr-6 rounded-full" style={{ width: "60px", height: "60px" }} src={userImage} alt="" />
                                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">{userName}</h4>
                                    <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                                    <span className="mr-4 text-xl font-heading font-medium">{star}</span>
                                    <div className="inline-flex">
                                        {/* my Starts */}
                                        <section>
                                            <StarRatings
                                                rating={star}
                                                starRatedColor="blue"
                                                changeRating={(newStar) => setStart(newStar)}
                                                numberOfStars={6}
                                                name='rating'
                                                starDimension="30px"
                                            // starSpacing="25px"
                                            />
                                        </section>
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    {/* delete and edit */}
                                    <Link to={`/editreview/${_id}`} className='font-bold text-primary text-base mr-4 cursor-pointer'>Edit Review</Link>
                                    <FaTrashAlt onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* body part */}
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 mt-0 bg-white">
                        <div className="lg:flex">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">{message}</p><hr />
                                <div className="w-full">
                                    <h1 className="text-2xl font-bold text-primary">Review On: {serviceTitle}</h1>
                                    <p className="text-lg">{serviceDetails.slice(0, 320) + "..."}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 ">
                                <p className="mb-8 text-sm text-gray-300 text-right">Added 2 months ago</p>
                                <img className='w-72 mt-14' src={servicePicture} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MySoloReview;