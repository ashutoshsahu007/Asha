import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import ContactModal from '../Modal/contactModal';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Footer = ({ scrollToSection, homeRef, aboutRef, serviceRef, ivfProcessRef }) => {
    const navigate = useNavigate();

    const handleScroll = (ref) => {
        navigate('/');  // Ensure it goes to Home first
        setTimeout(() => {
            scrollToSection(ref);
        }, 100); // Delay so that Home page loads before scrolling
    };


    const [contactModal, setContactModal] = useState(false);

    return (
        <footer className='w-full' style={{ backgroundColor: "var(--fadedpink)" }}>
            {contactModal && <ContactModal onClose={() => setContactModal(false)} />}

            <div className="w-full max-w-screen-lg h-auto m-auto flex flex-col lg:flex-row py-10 lg:py-8 px-10 lg:px-0">
                <div className="w-full mb-6 lg:mb-0">
                    <Link to="/" className="flex items-center">
                        <img
                            src={assets.logo}
                            className="w-24 h-24 mr-3 rounded-2xl"
                            alt="Logo" />
                        <h3 className='font-semibold text-2xl lg:text-3xl'>
                            ASHA IVF <br /><span className='text-sm font-medium'>Best Fertility Center in Gurgaon</span>
                        </h3>
                    </Link>

                    <br />
                    <p>
                        <b>Office : </b> 2227, Ground Floor, Near Wazirabad Road, Wazirabad, Sector 57, Gurugram
                    </p><br />
                    <p>
                        <b>Contact : </b> <a href="tel:9990720270">+91 99907 20270</a><br />
                        <b>Mail : </b> drwaseemandrabi@gmail.com
                    </p>
                </div>
                <div className="w-full lg:w-2/6 m-auto flex items-center justify-start lg:justify-center grid-cols-2 content-center gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link onClick={() => scrollToSection(homeRef)}>
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link onClick={() => scrollToSection(serviceRef)}>
                                    Services
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link onClick={() => scrollToSection(ivfProcessRef)}>
                                    IVF Process
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/blog">
                                    Blogs
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='w-4/6 h-auto m-auto mt-3 flex flex-col justify-center items-center lg:gap-4'>
                    <button className='w-72 bg-white text-md px-12 py-4' onClick={() => setContactModal(true)}>Book Your Appointment</button>

                    <button className='w-72 text-white text-md px-12 py-4' style={{ backgroundColor: "var(--darkpink)" }}>
                        <Link to="tel:9990720270" target='_blank' style={{ textDecoration: "none" }}>Call Now : 9990 720 270</Link>
                    </button>

                </div>
            </div>
            <hr className="my-6 border-pink-400 sm:mx-auto lg:my-4" />
            <div className="mx-auto w-full h-full max-w-screen-lg p-4 py-4 lg:py-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-left">
                        Design & Developed By <Link to="https://gosparrow.in/" target='_blank' className='text-gray-500 hover:text-gray-900'>Go Sparrow</Link>
                        <br />
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="" target='_blank' className="text-gray-500 hover:text-gray-900">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>

                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link to="" target='_blank' className="text-gray-500 hover:text-gray-900">

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>

                            <span className="sr-only">Instagram Page</span>
                        </Link>
                        <Link to="" target='_blank' className="text-gray-500 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>

                            <span className="sr-only">Youtube Channel</span>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Fixed CTA Button */}
            <div className='w-14 h-auto fixed bottom-10 right-5 flex flex-col gap-2'>
                <div className='w-12 h-12 bg-gray-200 rounded-full'>
                    <Link to="tel:919990720270" target='_blank' style={{ textDecoration: "none" }} className=' cursor-pointer'>
                        <LazyLoadImage src={assets.phone} className='p-2' />
                    </Link>
                </div>
                <div className='w-12 h-12 bg-green-500 rounded-full'>
                    <Link to="https://wa.me/919990720270?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20IVF%20services" target='_blank' style={{ textDecoration: "none" }} className=' cursor-pointer'>
                        <LazyLoadImage src={assets.whatsapp} className='p-2' />
                    </Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;