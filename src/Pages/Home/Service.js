import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import StarRatings from 'react-star-ratings';
// import useTitle from '../../Hooks/userTitle';
import Moment from 'react-moment';

const Service = ({ service }) => {
    const [star, setStart] = useState(3)
    const { picture, balance, title, about, _id } = service
    // useTitle("Services")

    const myRatings = star / 1.5


    return (
        <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <img className="w-full h-60" src={picture} alt="Sunset in the mountains" />
                </PhotoView>
            </PhotoProvider>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-3">{about.length > 100 ? about.slice(0, 100) + "..." : about}</p>
                <span className="text-base font-semibold text-primary dark:text-gray-400">Added: <Moment fromNow>{new Date(service.date)}</Moment></span>
                {/* <p className="text-gray-700 text-base">{about}</p> */}
            </div>
            <div className="px-6 p-2 pb-2">
                <div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating:{myRatings.toFixed(2)}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Time: 6h
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Available: 24/7
                    </span>
                </div>
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
                <div className='flex justify-between items-center mt-8'>
                    <h2 className='text-2xl text-primary font-semibold'>Price: ${balance}</h2>
                    <Link to={`/services/${_id}`}>
                        {/* <button className='btn btn-primary'>Details</button> */}
                        <a href="#_" className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">Show Details</span>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;