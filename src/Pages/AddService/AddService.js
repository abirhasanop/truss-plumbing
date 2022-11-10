import React from 'react';
import toast from 'react-hot-toast';
import bannerImg from '../../Assets/bannerImg.png'
import useTitle from '../../Hooks/userTitle';

const AddService = () => {

    useTitle("Add Service")

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value
        const price = form.price.value
        const photoURL = form.photoURL.value
        const about = form.about.value
        console.log(serviceName, price, about, photoURL);

        if (!price || !serviceName || !photoURL || !about) {
            return toast.error("Please Fillup All The Fields")
        }

        const date = new Date()


        const newService = {
            balance: price,
            raitng: 4.9,
            picture: photoURL,
            title: serviceName,
            about: about,
            date: date
        }

        fetch(`https://assignment11-server-beta.vercel.app/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                toast.success("New Service Added Succesfully")
            })
    }

    return (
        <div className='container mx-auto'>
            <section className="lg:flex">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2">
                    <span className="block mb-2 text-violet-400">Truss Plumbing</span>
                    <h1 className="text-5xl font-extrabold mb-10">Add New Service</h1>
                    <p className="my-8">
                        {/* <span className="font-medium">Your Current Review :</span> */}
                    </p>
                    <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div>
                            <input name='serviceName' type="text" placeholder="Service Name" className="input w-full max-w-xs m-3 shadow-lg" />
                            <input name='price' type="text" placeholder="Price" className="input w-full max-w-xs m-3 shadow-lg" />
                            {/* <input type="text" placeholder="Available" defaultValue="24/7" className="input w-full max-w-xs m-3 shadow-lg" /> */}
                            <input name='photoURL' type="text" placeholder="Photo URL" className="input w-full max-w-xs m-3 shadow-lg" />
                            <textarea name='about' placeholder="Type here" className="textarea w-full max-w-2xl  m-3 shadow-lg" />
                        </div>
                        <button className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Edit Your Review</button>
                    </form>
                </div>
                <img src={bannerImg} alt="" className="object-cover rounded-md bg-gray-500" />
            </section>
        </div>
    );
};

export default AddService;