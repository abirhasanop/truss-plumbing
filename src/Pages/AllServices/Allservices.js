import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import Footer from '../../Shared/Footer/Footer';
import Service from '../Home/Service';

const Allservices = () => {
    const [isLoding, setLoding] = useState(true)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoding(false)
            })
    }, [])


    return (
        <>
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
                    <div className='flex md:block md:container md:mx-auto justify-center'>
                        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5'>
                            {
                                services.map(service => <Service key={service._id} service={service} />)
                            }
                        </section>
                    </div>
            }

            <Footer />
        </>
    );
};

export default Allservices;