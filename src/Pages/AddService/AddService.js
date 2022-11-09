import React from 'react';
import bannerImg from '../../Assets/bannerImg.png'

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className='container mx-auto'>
            <section className="flex">
                <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2">
                    <span className="block mb-2 text-violet-400">Truss Plumbing</span>
                    <h1 className="text-5xl font-extrabold mb-10">Edit Your Review</h1>
                    <p className="my-8">
                        <span className="font-medium">Your Current Review :</span>
                    </p>
                    <form onSubmit={handleSubmit} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                        <div>
                            <input type="text" placeholder="Service Name" className="input w-full max-w-xs m-3 shadow-lg" />
                            <input type="text" placeholder="Price" className="input w-full max-w-xs m-3 shadow-lg" />
                            <input type="text" placeholder="Available" defaultValue="24/7" className="input w-full max-w-xs m-3 shadow-lg" />
                            <input type="text" placeholder="Time" defaultValue="6h" className="input w-full max-w-xs m-3 shadow-lg" />
                            <textarea placeholder="Type here" className="textarea w-full max-w-xl  m-3 shadow-lg" />
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