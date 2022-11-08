import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Service from '../Home/Service';

const Allservices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <>
            <div className='container mx-auto'>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5'>
                    {
                        services.map(service => <Service key={service._id} service={service} />)
                    }
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Allservices;