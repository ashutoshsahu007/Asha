import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
// import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Contact(){
    return (
        <div className='bg-white'>
            <div className='w-full h-auto max-w-screen-md m-auto text-center py-10'>
                <h1>Couldn't find the answer to your query?</h1>
                <br />
                <h2>Don't worry, We are happy to assist you.</h2>
            </div>
            <div className='w-full h-auto m-auto bg-gray-200 py-10 px-6 lg:px-0'>
                <div className='max-w-screen-lg m-auto flex gap-6 flex-col lg:flex-row items-center justify-center'>
                    <div className='bg-white w-full h-80 text-center flex flex-col items-center shadow-lg p-8 rounded-2xl'>
                        <p>Call us during business hours for any queries or updates</p>
                        <img src={assets.ashaCall} className='w-40' />
                        <h5>Call Us : All Days (11:00 AM to 08:00 PM)</h5>
                        <Link className='text-red-600 text-xl font-semibold py-3' to='tel:9990720270'>
                            +91 99907 20270</Link>
                    </div>
                    <div className='bg-white w-full h-80 text-center flex flex-col items-center shadow-lg p-8 rounded-2xl'>
                        <p>Drop us an email for your queries on the address given below</p>
                        <img src={assets.ashaMail} className='w-40' />
                        <h5>Email Us : All Days</h5>
                        <Link className='text-red-600 text-xl font-semibold py-3' to='mailto:drwaseemandrabi@gmail.com'>
                        drwaseemandrabi@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto max-w-screen-lg m-auto text-center py-10'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.571407705714!2d77.08508447428491!3d28.432186593152625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e1798d6b05%3A0xc6cc85bc7a999d6d!2sAsha%20IVF%20%26%20Fertility%20Centre%20Gurgaon!5e0!3m2!1sen!2sin!4v1742990426988!5m2!1sen!2sin" width="100%" height="300px" className='w-full rounded-3xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
    )
}