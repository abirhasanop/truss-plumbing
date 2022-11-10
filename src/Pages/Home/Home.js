import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../Assets/bannerImg.png'
import useTitle from '../../Hooks/userTitle';
import Footer from '../../Shared/Footer/Footer';
import Service from './Service';
import aboutImg from '../../Assets/aboutus.jpg'
import Topbanner from './TopBanner';
import { MagnifyingGlass } from 'react-loader-spinner';

const Home = () => {
    const [isLoding, setLoding] = useState(true)
    const [services, setServices] = useState([])
    useTitle("Home")

    useEffect(() => {
        fetch(`http://localhost:5000/limitedServices`)
            .then(res => res.json())
            .then(data => {
                setLoding(false)
                setServices(data)
            })
    }, [])

    return (
        <>
            <Topbanner />
            <div className='container mx-auto'>
                {/* Carousel */}






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
                                            {/* <button className="btn btn-outline btn-primary btn-lg">
                                                Learn More
                                            </button> */}

                                            <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path sstrokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="relative">Learn More</span>
                                            </a>
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


                {/* about us */}
                <section className='my-16 mx-auto'>
                    <h1 className="text-6xl font-bold text-center my-8">About Us</h1>
                    <div className='lg:flex justify-between items-center'>
                        <img style={{ width: "600px", height: "400px" }} className='rounded-lg' src={aboutImg} alt="" />
                        <div className='flex flex-col '>
                            <h1 className='text-4xl font-bold mb-6 text-center'>Dependable HVAC Service You Can Trust</h1>
                            <p className='lg:ml-32 lg:text-start text-center text-xl'>We specialize in full service heating & air conditioning sales and service – offering the highest quality of service, support and equipment to our customers. <br />

                                Whether you are in need of an annual maintenance agreement, emergency repair, replacement, or complimentary energy audit, we want to be there for you every step of the way. With prompt emergency dispatch, our N.A.T.E certified technicians are prepared at a moments notice.</p>
                        </div>

                    </div>
                </section>


                {/* services section */}
                {
                    isLoding ?
                        <div className='flex justify-center'>
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor='#c0efff'
                                color='#e15b64'
                            />
                        </div>
                        :
                        <div className='flex md:block justify-center'>
                            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-28'>
                                {
                                    services.map(service => <Service key={service._id} service={service} />)
                                }
                            </section>
                        </div>
                }
                <div className='flex justify-center mt-20'>
                    {/* <Link className="btn btn-outline btn-primary btn-sm font-bold shadow-md" to='/services'>See All</Link> */}
                    <Link className='shadow-xl' to='/services'>
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path sstrokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path sstrokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">See All</span>
                        </a>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;