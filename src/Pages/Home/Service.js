import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import StarRatings from 'react-star-ratings';

const Service = ({ service }) => {
    const [star, setStart] = useState(3)
    const { picture, balance, raitng, title, about, _id } = service

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
                <p className="text-gray-700 text-base">{about.length > 100 ? about.slice(0, 100) + "..." : about}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
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
                    <h2 className='text-2xl text-primary font-semibold'>Price: {balance}</h2>
                    <Link to={`/services/${_id}`}><button className='btn btn-primary'>Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Service;