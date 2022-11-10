import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../Assets/mainBannerImg.jpg'

const Topbanner = () => {
    return (
        <div className='relative' style={{ background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: "100%", height: "650px" }}>
            <div className='w-full absolute bottom-24'>
                <div className='text-center '>
                    <div className=''>
                        {/* <h1 className='text-5xl font-semibold text-end text-white'>I am here to help you to remember the best days.</h1> */}
                        <p className='text-xl text-slate-200 my-4'>Our plumbing professionals are thoroughly trained to assess the  situation and effectively  respond in a way that <br /> treats the source of the problems.</p>
                        <div className='text-center'>
                            <Link to='/services'>
                                <button className='btn btn-primary btn-lg'>Take Service</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbanner