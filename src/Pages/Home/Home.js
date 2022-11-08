import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../Assets/bannerImg.png'
import Footer from '../../Shared/Footer/Footer';
import Service from './Service';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/limitedServices`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className='container mx-auto'>
                <section className="py-24 px-4" >
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1  md:grid-cols-2 g-4">
                            <div className="flex items-center">
                                <div>
                                    <div className="text-6xl  text-center lg:text-left ">
                                        Expertise <br />{" "}
                                        <span className="font-bold">
                                            You Can Trust
                                        </span>
                                    </div>
                                    <p className="text-2xl text-center lg:text-left my-8">
                                        Our plumbing professionals are thoroughly trained to assess the situation and effectively respond in a way that treats the source of the problems.
                                    </p>
                                    <div className='flex justify-center lg:justify-start'>
                                        <Link to='/services'>
                                            <button className="btn btn-outline btn-primary btn-lg">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto text-center">
                                <img className="rounded-lg mx-auto" src={bannerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* services section */}
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5'>
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </section>
                <div className='flex justify-center mt-20'>
                    <Link className="btn btn-outline btn-primary btn-sm font-bold shadow-md" to='/services'>See All</Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;