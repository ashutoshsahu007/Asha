import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import style from './home.module.css';
import { assets } from '../../assets/assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactModal from '../Modal/contactModal';

// Below for Same Page Link Redirect



export default function Home() {
    const context = useOutletContext();

    if (!context) {
        return <p>Error: Outlet context is undefined.</p>;
    }

    const { homeRef } = context;
    const { aboutRef } = context;
    const { serviceRef } = context;
    const { ivfProcessRef } = context;

    const [contactModal, setContactModal] = useState(false);


    return (

    <div ref={homeRef} id="home" style={{backgroundColor: "#f2d6e5"}}>
        {contactModal && <ContactModal onClose={()=> setContactModal(false)}/>}


        <div className='w-full bg-gray-200'>
        <div className='bg-gray-200 max-w-screen-xl px-6 m-auto h-full flex items-center justify-center flex-col lg:flex-row lg:py-0'>
            <div className='w-full'>
                <h1 style={{color: "var(--darkpink)"}} className='text-4xl font-semibold' data-aos='zoom-in'>Helping You Turn Dreams of Parenthood into Reality</h1>
                <h4 className='text-xl mt-4' data-aos='zoom-in'>Personalized IVF care, centered on you</h4>
                <button data-aos="zoom-in" style={{backgroundColor: "var(--darkpink)"}} className='px-12 py-2 mt-4 text-lg'>
                    <Link to="tel:919990720270" target='_blank' style={{ textDecoration: "none", color: "#fff" }}>
                    9990 720 270
                    </Link>
                </button>
            </div>
            <div>
                <LazyLoadImage src={assets.ashaCouple} className='w-4/5 m-auto' data-aos='zoom-in-up'/>
            </div>
            <div className='w-full'>
            <div className='bg-white shadow-xl text-center rounded-xl px-8 py-10 flex flex-col items-center mx-4 relative'>
                    
                    <h2 style={{color: "var(--darkpink)"}} className='text-xl font-medium mb-4'>BOOK AN APPOINTMENT</h2>
                    <form action='https://api.web3forms.com/submit' method='POST' className='w-full'>
                        {/* Mail Use : drwaseemandrabi@gmail.com — API Key is : cd283d6c-9f9e-49b3-9c6d-0bb8c66b82c9 */}
                        <input type="hidden" name="access_key" value="cd283d6c-9f9e-49b3-9c6d-0bb8c66b82c9" />
                        <input type="hidden" name="Query Type" value="Treatment Enquiry"/>
                        <div className='relative'>
                            <input
                            type="text"
                            id="name"
                            name="Name"
                            placeholder='Enter Your Name'
                            required
                            className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                            />
                            <span id="name-error" className='text-green-600 absolute bottom-5 right-4'></span>
                        </div>
                        <div className='relative'>
                            <input
                            type="email"
                            id="email"
                            name="Email"
                            placeholder='Enter Your Email'
                            required
                            className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                            />
                            <span id="email-error" className='text-green-600 absolute bottom-5 right-4'></span>
                        </div>
                        <div className='relative'>
                            <input
                            type="tel"
                            id="phone"
                            name="Phone"
                            placeholder='Enter Your Phone Number'
                            required
                            className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                            />
                            <span id="phone-error" className='text-green-600 absolute bottom-5 right-4'></span>
                        </div>
                        
                        
                        <div className='relative'>
                            <select
                                id="treatment"
                                name="Treatment"
                                required
                                className='w-full px-4 py-3 my-2 text-black bg-gray-50 rounded-full'
                            >
                                <option value="" disabled selected>Select Treatment</option>
                                <option value="IVF">IVF Treatment</option>
                                <option value="IUI">IUI Treatment</option>
                                <option value="Consultation">General Consultation</option>
                            </select>
                            <span id="treatment-error" className='text-green-600 absolute bottom-5 right-4'></span>
                        </div>

                        <button type='submit' style={{backgroundColor: "var(--darkpink)"}} className='w-full mt-4 flex items-center justify-center gap-2 py-3 font-normal text-md rounded-md text-white'>
                            Send Enquiry
                        </button>
                        <span id="submit-error" className='text-red-600'></span>
                    </form>
                </div>
            </div>
        </div>
        </div>

        {/* DOCTOR SECTION START */}
        <div className="relative mx-auto w-full h-auto">
            <div className='bg-white'><h2 data-aos="slide-up" className='text-3xl font-semibold text-center pt-10'>Meet Our <span style={{color:"var(--darkpink)"}}>IVF Specialist</span></h2>
            <p className='max-w-screen-lg m-auto text-center p-3' data-aos='zoom-in'>Meet our experienced IVF specialist dedicated to helping you achieve your dream of parenthood with advanced fertility treatments. Trust our expertise for personalized care and successful outcomes</p>
                <div className={style.fixedBackgroundArea}>
                    <div className={style.teamSection} data-aos="slide-up" data-aos-delay="200">
                        <LazyLoadImage src={assets.doctor1} alt='Features' className='w-3/4 m-auto pb-6'/>
                        <h2 className='text-xl font-bold'>Dr. Astha Chakravarty</h2>
                        <p>Director & Senior Consultant Asha IVF & Fertility Centre</p>
                        <p className='w-full font-light text-slate-500 mt-2 text-justify'>Dr. Astha Chakravarty is a well-respected fertility expert & the best IVF Specialist in Faridabad, known for her skill in creating personalized treatment plans that consider both the medical needs and budget of her patients. She studied at Maulana Azad Medical College in New Delhi, one of India’s top medical schools, where she earned her undergraduate and postgraduate degrees.</p>
                    </div>
                    <div className={style.teamSection} data-aos="slide-up" data-aos-delay="300">
                        <LazyLoadImage src={assets.doctor2} alt='Features' className='w-3/4 m-auto pb-6'/>
                        <h2 className='text-xl font-bold'>Dr. Preeti Yadav</h2>
                        <p>Senior Consultant IVF & Endoscopy Asha IVF & Fertility Centre Gurugram</p>
                        <p className='w-full font-light text-slate-500 mt-2 text-justify'>Dr. Preeti Yadav is a well-trained reproductive medicine consultant. She has completed her MBBS and MS in Obstetrics & Gynaecology from Maulana Azad Medical College, New Delhi and has an experience of more than 10 years in this field. She has further completed her fellowship and diploma in Minimal Access Surgery, at World Laparoscopy Hospital, Gurgaon; and fellowship in reproductive medicine from Wings IVF Centre affiliated to Parul University, Ahmedabad. </p>
                    </div>
                    <div className={style.teamSection} data-aos="slide-up" data-aos-delay="400">
                        <LazyLoadImage src={assets.doctor3} alt='Features' className='w-3/4 m-auto pb-6'/>
                        <h2 className='text-xl font-bold'>Dr. Shama</h2>
                        <p>Senior Embryologist Asha IVF & Fertility Centre, Gurugram</p>
                        <p className='w-full font-light text-slate-500 mt-2 text-justify'>Dr. B. Shama is a skilled embryologist with expertise in assisted reproduction. She holds a PhD in Animal Biotechnology from ICAR-National Dairy Research Institute, Karnal. With extensive experience in IVF, ICSI, and embryo cryopreservation, she has contributed significantly to reproductive medicine. She has received multiple awards, including the Dr. Kuldeep Jain-Best Embryology Paper Award.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* DOCTOR SECTION END */}

        {/* ABOUT SECTION START */}
        <div ref={aboutRef} id="about" className='bg-white relative mx-auto w-full h-auto'>
            <div className={style.welcomeArea}>
                <div className='w-full h-auto m-auto flex flex-col gap-3 items-center justify-center lg:px-0'>
                    <div className='w-full max-w-md h-auto overflow-hidden relative -left-4 z-10'>
                        <LazyLoadImage src={assets.ashaLady3} alt="Franchise" />
                        {/* <LazyLoadImage src={assets.ashaAboutImg} alt="Franchise" /> */}
                    </div>
                </div>
                <div className={style.welcomeContent}>
                    <h3 className='text-md lg:text-xl font-semibold text-left text-black mb-2' data-aos="slide-up">About Asha</h3>
                    <h2 data-aos="slide-up" className='w-full leading-none'>Your Journey to Parenthood Starts Here</h2>
                    <p data-aos="fade-up">
                        We combine advanced technology with compassionate care to provide you the best fertility treatment experience.
                    </p>
                    <p data-aos="fade-up">
                        Asha IVF & Fertility Centre, located in Gurgaon, is a leading name in reproductive healthcare, dedicated to providing advanced fertility treatments with a patient-centric approach. With over 18 years of experience and a track record of 5,000+ successful pregnancies, Asha IVF has become a symbol of hope for couples struggling with infertility.
                    </p>
                    <p data-aos="fade-up">
                        At Asha IVF, cutting-edge technology meets compassionate care. The centre offers a full spectrum of fertility solutions, including IVF, ICSI, IUI, egg and sperm freezing, donor programs, and advanced embryo screening techniques. Each treatment is tailored to individual needs, ensuring the best possible outcomes.
                    </p>
                    <button data-aos="zoom-in" style={{backgroundColor: "var(--darkpink)"}} className='px-12 py-2 mt-5}'>
                    <Link to="https://ashaivfgurgaon.com/" target='_blank' style={{ textDecoration: "none", color: "#fff" }}>
                        Know More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        {/* ABOUT SECTION END */}


        {/* KNOW MORE SECTION START */}
        <div className='relative mx-auto w-full h-auto' style={{backgroundColor: "var(--darkpink)"}}>
            <div className={style.knowMore}>
                <h2 data-aos="zoom-in">We're here to make your dream of a complete family a reality, with care and expertise you can trust</h2>
                {/* <h4>Wanna Know More !</h4> */}
                <button data-aos="zoom-in" style={{backgroundColor: "#fff"}} className='px-12 py-4 mt-5' onClick={()=> setContactModal(true)}>Book Your Appointment</button>
            </div>
        </div>
        {/* KNOW MORE SECTION END */}


        {/* IVF PROCESS SECTION START */}
        <div ref={ivfProcessRef} id="ivf-process" className='bg-white relative mx-auto w-full h-auto'>
            <h2 data-aos="slide-up" className='text-4xl font-semibold text-center pt-10'>Our <span style={{color:"var(--darkpink)"}}>IVF Process</span></h2>
            <div className={style.successStoryArea}>
                <div data-aos="fade-right" data-aos-delay="100" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process1} alt="story img" />
                    </div>
                    <h3>Initial Consultation</h3>
                    <p>Meet with our fertility specialists for a comprehensive evaluation.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process2} alt="story img" />
                    </div>
                    <h3>Fertility Testing</h3>
                    <p>Comprehensive diagnostics to understand your fertility status.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process3} alt="story img" />
                    </div>
                    <h3>Treatment Planning</h3>
                    <p>Customized IVF protocol based on your specific needs.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="400" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process4} alt="story img" />
                    </div>
                    <h3>Ovarian Stimulation</h3>
                    <p>Controlled stimulation to produce multiple eggs.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="500" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process5} alt="story img" />
                    </div>
                    <h3>Egg Retrieval</h3>
                    <p>Collection of mature eggs and sperm processing.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="600" className={style.storyBox}>
                    <div className={style.circleImg}>
                    <LazyLoadImage src={assets.process6} alt="story img" />
                    </div>
                    <h3>Embryo Transfer</h3>
                    <p>Careful transfer of selected embryos.</p>
                </div>
            </div>
        </div>
        {/* IVF PROCESS SECTION END */}

        {/* FIXED BACKGROUND SECTION START */}
        <div className="relative mx-auto w-full h-auto">
            <div className='bg-white'>
                <div className={style.fixedBackgroundArea}>
                    <div className={style.fixedContent} data-aos="zoom-in" data-aos-delay="100">
                        <LazyLoadImage src={assets.highSuccess} alt='Features' className='w-16 m-auto pb-6'/>
                        <h2>High Success Rate</h2>
                        <p>Achieving an impressive 87% success rate with advanced technology and dedicated in-house senior embryologists.</p>
                    </div>
                    <div className={style.fixedContent} data-aos="zoom-in" data-aos-delay="200">
                        <LazyLoadImage src={assets.happyFamily} alt='Features' className='w-16 m-auto pb-6'/>
                        <h2>3000+ Happy Clients</h2>
                        <p>Bringing joy to over 3,000 families with successful IVF treatments and compassionate care.</p>
                    </div>
                    <div className={style.fixedContent} data-aos="zoom-in" data-aos-delay="300">
                        <LazyLoadImage src={assets.experience} alt='Features' className='w-16 m-auto pb-6'/>
                        <h2>18+ Years of Experience</h2>
                        <p>Delivering excellence in fertility care for over 18 years with advanced treatments and trusted expertise.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* FIXED BACKGROUND SECTION END */}


        {/* FIXED BACKGROUND SECTION START */}
        <div className="relative mx-auto w-full h-auto">
            <div className={style.fixedBackground}>
            <h2 data-aos="slide-up" className='text-4xl font-semibold text-center pt-10'>Best <span style={{color:"var(--darkpink)"}}>IVF Center in Gurgaon</span></h2>
                <div className={style.fixedBackgroundArea}>
                    
                    <div className='w-full h-auto mx-auto px-4 flex items-start justify-center flex-col lg:flex-row lg:item-center gap-6'>
                        <div>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> Best IVF Specialist</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> Transparent Pricing</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> Best Embryologist</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> PGT Tested Embryosis</p>
                        </div>
                        <div>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> Personalised Care</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> 100% Ethical Treatment</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> State ofthe Art IVF Lab</p>
                            <p className='mb-4' data-aos="fade-up"><span><LazyLoadImage src={assets.check} alt="Paper Plane" className='bg-pink-300 p-2 rounded-md w-10 inline-block' /></span> PGT Tested Embryosis</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='w-full h-auto flex justify-center m-auto'>
                        <LazyLoadImage src={assets.ashaCollage} className='w-96' />
                    </div>
                </div>
            </div>
        </div>
        {/* FIXED BACKGROUND SECTION END */}


        {/* SERVICE SECTION START HERE */}
        <div ref={serviceRef} id="services" style={{backgroundColor: "var(--darkpink)"}} className='w-full h-auto'>
            <div className='max-w-screen-lg h-auto m-auto flex gap-x-12 flex-col-reverse items-center justify-center lg:flex-row'>
                <div className='w-3/5 lg:w-2/5'>
                    <LazyLoadImage src={assets.ashaLady2} alt='lady' />
                </div>
                <div className= 'w-full lg:w-3/5 h-auto p-12'>
                    <h3 className='text-3xl font-medium text-white mb-8' data-aos='zoom-in'>Expert IVF & Fertility Services</h3>
                    <ul>
                        <li className='w-full bg-pink-200 p-2 px-4 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="100">Infertility Assessment</li>
                        <li className='w-full bg-white p-2 px-4 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="200">In-vitro Fertilisation - Intra cytoplasmic Sperm Injection (IVF-ICSI)</li>
                        <li className='w-full bg-pink-200 p-2 px-4 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="300">Fertility Enhancing Surgeries</li>
                        <li className='w-full bg-white p-2 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="100">Freezing - Egg, Sperm, Embryos</li>
                        <li className='w-full bg-pink-200 p-2 px-4 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="400">Genetic Testing (PGT)</li>
                        <li className='w-full bg-white p-2 px-4 my-2 scale-100 hover:scale-105 transition cursor-pointer' data-aos='zoom-in-up' data-aos-delay="500">Egg and Sperm Donor</li>
                    </ul>
                    <button data-aos="zoom-in-up" data-aos-delay="600" style={{backgroundColor: "#000"}} className='text-white px-12 py-3 mt-5' onClick={()=> setContactModal(true)}>Book Your Appointment</button>
                </div>
            </div>
        </div>
        {/* SERVICE SECTION START END */}


    </div>
    );
}
