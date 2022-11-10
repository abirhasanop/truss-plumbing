import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import bannerImg from '../../Assets/bannerImg.png'
import useTitle from '../../Hooks/userTitle';

const EditReviewPage = () => {
    const review = useLoaderData()
    const navigate = useNavigate()
    useTitle("Edit Review")

    const router = useParams()
    const { id } = router

    const handleUpdateReview = (event) => {
        event.preventDefault()
        const form = event.target
        const message = form.message.value
        console.log(message);

        const updatedReview = {
            message: message
        }

        fetch(`https://assignment11-server-beta.vercel.app/review/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                navigate('/myreview')
            })
    }

    return (
        <div className='container mx-auto'>
            <section className="lg:flex">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2">
                    <span className="block mb-2 text-violet-400">Truss Plumbing</span>
                    <h1 className="text-5xl font-extrabold mb-10">Edit Your Review</h1>
                    <p className="my-8">
                        <span className="font-medium">Your Current Review :</span>{review.message}
                    </p>
                    <form onSubmit={handleUpdateReview} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div>
                            <textarea name='message' placeholder="Message..." className="p-4 w-full rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        </div>
                        <button className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Edit Your Review</button>
                    </form>
                </div>
                <img src={bannerImg} alt="" className="object-cover rounded-md bg-gray-500" />
            </section>
        </div>
    );
};

export default EditReviewPage;