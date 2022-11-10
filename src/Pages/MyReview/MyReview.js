import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/userTitle';
import MySoloReview from './MySoloReview';


const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    useTitle("My Review")

    // Displaying Review
    // useEffect(() => {
    //     fetch(`http://localhost:5000/review`)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [refresh])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('trussPlumbingToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
            })
    }, [refresh, user?.email, logOut])


    // Deleting Review
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefresh(!refresh)
                toast.success("Review Deleted Succesfully")
            })
    }


    // Editing Review
    const handleEdit = (_id) => {
        console.log("editing id =", _id)
    }


    // console.log(reviews);

    return (
        <div className='bg-slate-100'>
            {
                reviews.length > 0 ?
                    reviews.map(review => <MySoloReview key={review._id} review={review} handleDelete={handleDelete} handleEdit={handleEdit} />)
                    :
                    <div>
                        <h2 className='text-xl text-center font-semibold mt-96'>No reviews were added</h2>
                    </div>
            }
        </div>
    );
};

export default MyReview;