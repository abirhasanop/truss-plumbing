import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Review from './Review';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [star, setStart] = useState(2)
    const service = useLoaderData()
    const { picture, balance, raitng, title, about } = service

    // posting review
    const handleReview = (event) => {
        event.preventDefault()
        const form = event.target
        const message = form.message.value

        const review = {
            message: message
        }
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                toast.success("review added succesfully")
                setRefresh(!refresh)
            })
    }



    // Displaying Review
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refresh])




    // Deleting Review
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefresh(!refresh)
            })
    }




    return (
        <div>
            <div className='container mx-auto courese-container my-14'>
                <section>
                    <div className='lg:flex flex-row-reverse items-center justify-around pr-24'>
                        <div>
                            <img style={{ width: "600px" }} src={picture} alt="" />
                        </div>
                        <div>
                            <h3 className=' mt-4 text-5xl font-semibold'>{title}</h3>
                            <h4 className=' mt-4 text-xl font-semibold'>Rating: {raitng}</h4>
                            <h4 className=' mt-4 text-xl font-semibold'>Work Time: 6h</h4>
                            <h3 className=' mt-4 text-xl font-semibold'>Total </h3>
                            <p className='mt-3'>Available: 24/7</p>
                            <h2 className='text-4xl font-semibold mt-10 text-pink-500'>Service Cost: ${balance}</h2>
                        </div>
                    </div>
                    <div className='my-16'>
                        <p className='text-2xl'>{about}</p>
                    </div>

                    {/* Displaying Review */}
                    {
                        reviews.length > 0 ?
                            reviews.map(review => <Review key={review._id} review={review} handleDelete={handleDelete} />)
                            :
                            <h2 className='text-xl text-center font-semibold'>This Service has no reviews. <br /> Let others know what you think and be the first to write a review.</h2>
                    }


                    <div>
                        <h1 className='text-5xl text-purple-700 text-center font-semibold my-5'>Add A Review</h1>
                    </div>

                    {/* Review Form */}
                    <form onSubmit={handleReview} className='w-full bg-indigo-100 mx-auto mb-20'>
                        <div className="w-1/2 mx-auto flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>

                                    {/* React starts */}
                                    <section>
                                        <StarRatings
                                            rating={star}
                                            starRatedColor="blue"
                                            changeRating={(newStar) => setStart(newStar)}
                                            numberOfStars={6}
                                            name='rating'
                                        />
                                    </section>
                                </div>
                                <div className="flex flex-col w-full">
                                    <textarea name='message' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                    <button className="py-4 my-8 font-bold rounded-md text-primary btn btn-ghost">Leave feedback</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link to='/' rel="noopener noreferrer" className="text-sm dark:text-gray-400">Maybe later</Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ServiceDetails;