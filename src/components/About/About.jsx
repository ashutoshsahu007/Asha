import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
// import style from './home.module.css';
import { assets } from '../../assets/assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactModal from '../Modal/contactModal';

import fixedBanner from '../../assets/blog1.webp'



export default function Home() {
    return (
        <div className='bg-white'>
            {/* TOP HERO SECTION STARTS HERE */}
            <div className='w-full h-auto bg-fixed bg-center bg-cover' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fixedBanner})`,
            }}>
                <div className='w-full py-10 lg:px-6 px-0 m-auto h-full flex items-center justify-center flex-col lg:flex-row lg:py-20'>
                    <div className='lg:w-2/3 w-full px-6'>
                        <div className='w-full text-center'>
                            <h1 className='text-white text-4xl font-bold'>Best IVF Specialist in Gurgaon</h1>
                            <h4 className='text-white text-xl font-normal' data-aos='zoom-in'>About</h4>
                        </div>
                    </div>

                </div>
            </div>
            {/* TOP HERO SECTION END HERE */}

            {/* ABOUT ASTHA START HERE */}
            <div className='w-full h-auto py-10'>
                <div className='max-w-screen-lg m-auto px-6 lg:px-0 flex items-center justify-center flex-col lg:flex-row'>
                    <div className='w-full lg:w-2/6' data-aos='zoom-in'>
                        <h1 className='text-8xl font-extrabold tracking-tighter text-pink-700'>About</h1>
                        <h3 className='text-3xl font-semibold'>DR. ASTHA CHAKRAVARTY</h3>
                    </div>
                    <div className='w-full lg:w-4/6 text-justify'>
                        <p>
                            Asha IVF & Fertility Centre is a Prominent IVF and Fertility Centre in Gurgaon. We are committed to giving world standard care while keeping up the pledge to a patient-friendly relation. Our motive is to provide State of the art facilities in IVF and infertility treatment, ICSI, IUI, embryo transfer and, cryopreservation at affordable prices.Our world-class laboratory strictly follows international quality standards and stays committed to delivering the best to its patients.
                        </p>
                    </div>
                </div>
            </div>
            {/* ABOUT ASTHA END HERE */}

            {/* ABOUT ASTHA DETAILS START HERE */}
            <div className='w-full h-auto py-10'>
                <div className='max-w-screen-lg m-auto px-6 lg:px-0 flex items-center justify-center flex-col lg:flex-row'>
                    <div className='w-full text-justify'>
                        <h3 className='text-2xl font-semibold py-2 my-3 bg-pink-200 px-4'>Bachelor of Medicine and Bachelor of Surgery</h3>
                        <ul>
                            <li className='flex gap-x-4'><div>➔</div> Dr. Astha Chakravarty is one of the best IVF specialist in Gurgaon, who can individualize treatment according to patient needs & affordability.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> She is a graduate & postgraduate from the prestigious Maulana Azad Medical College, New Delhi. She has pursued two years post-doctoral fellowship in Reproductive Medicine (FNB) from the Institute of Reproductive Medicine, Kolkata under the able guidance of Dr. B.N. Chakravarty is a pioneer in infertility treatment.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> During her post-graduation, she developed a keen interest in the field of infertility.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> After completing her M.S. she has pursued a fellowship in advanced infertility and endoscopy from Ruby Hall IVF & Endoscopy Centre, Pune, India. She then received rigorous training in operative Hysteroscopy, Laparoscopy, and Vaginal Surgeries from the Centre for Advanced Gynaecological Endoscopy (Sunrise Institute of Medical Sciences), Cochin, Kerala, India.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> She is a member of Gurgaon Obstetric and Gynae Society (FOGS) and also a member of the Indian Fertility Society.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> Dr. Astha Chakravarty feels privileged to have had this opportunity to help subfertile couples in their journey to parenthood.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> She puts her heart and soul into treating every single patient of hers who visits her centre in Gurgaon, the Best IVF Clinic in the Delhi-NCR region.
                            </li>
                        </ul>
                        <h3 className='text-2xl font-semibold py-2 my-3 mt-8 bg-pink-200 px-4'>PRESENTATIONS</h3>
                        <ul>
                            <li className='flex gap-x-4'><div>✔</div>
                                P-551 Congenital Malformations in babies conceived following Letrozole or Clomiphene for infertility. 28th ESHRE Turkey 1st-4th July 2012.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            P-491 Role of estrogen as LPS in normal poor responders in Long agonist IVF/ ICSI cycles. ASRM 20th-24th October 2012.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            Free Paper Presentation on Role of Endocervical brush in improving the Quality of the specimen obtained from Endocervical Curettage at 30th Annual Conference of AOGD (8th -9th Nov 2008) organized by Department of Obstetrics & Gynaecology, Sir Ganga Ram Hospital, New Delhi.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            Free Paper Presentation on Comparison of Endocervical Brush & Curette at 52nd AICOG, Jaipur (5th 8th Jan 2009)
                            </li>
                        </ul>
                        <h3 className='text-2xl font-semibold py-2 my-3 bg-pink-200 px-4'>RESEARCH WORK</h3>
                        <ul>
                            <li className='flex gap-x-4'><div>➔</div> The role of Endocervical brush in improving the quality of specimen obtained from Endocervical curettage under the able guidance of Dr. Raksha Arora, Department of OBSTETRICS & GYNAECOLOGY at Maulana Azad Medical College, New Delhi, India.
                            </li>
                            <li className='flex gap-x-4'><div>➔</div> Role of estrogen as luteal phase support (LPS) in favorable and unfavorable patients in long agonist in vitro fertilization (IVF)/ Intracytoplasmic sperm injection (ICSI) cycles, under the guidance of Dr. B.N. Chakravarty during the National Board Fellowship in Reproductive Medicine (FNB), Kolkata 2011-2013.
                            </li>
                        </ul>
                        <h3 className='text-2xl font-semibold py-2 my-3 mt-8 bg-pink-200 px-4'>PUBLICATIONS/ CHAPTERS</h3>
                        <ul>
                            <li className='flex gap-x-4'><div>✔</div>
                            Congenital Malformations among Babies Born Following Letrozole or Clomiphene for Infertility Treatment Sunita Sharma, Sanghamitra Ghosh, Soma Singh, Astha Chakravarty, Ashalatha Ganesh, Shweta Rajani, B. N. Chakravarty PLOSONE Oct 2014.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            Large Fibroid arising from Mullerian Remnant Mimicking as Ovarian Neoplasm in a Woman with MRKH SyndromeBy Soma Singh, Baidyanath Chakravarty, Manju Chakravarty, Astha Chakravarty International Journal of Infertility and Fetal MedicineVol : 3, Issue: 1 (2012).
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            SertoliLeydig cell tumor – A rare ovarian neoplasm – Case report & review of literature; Poonam Sachdeva, Raksha Arora, Chandan Dubey, Astha Sukhija, Mridula Daga, Deepak Kumar Singh. Journal of Gynecological Endocrinology, 24(4), 230-234, April 2008
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            SertoliLeydig cell tumor – A rare ovarian neoplasm Poonam Sachdeva, Raksha Arora, Chandan Dubey, Astha Sukhija, Mridula Daga, Sangeeta Bhasin, Obstetrics & Gynecology Today August 2008 Vol. xiii No.8, 336-339.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            Chapter on “Manual Removal of the placenta – Raksha Arora, Astha Sukhija in the book Diagnostic Procedures & Minor Surgical Interventions in Obstetrics & Gynecology- Jaypee Brothers Medical Publishers, 1/e/2007.
                            </li>
                            <li className='flex gap-x-4'><div>✔</div>
                            Chapter on “Pap Smear & Cervical Biopsy” – Poonam Sachdeva, Swaraj Batra, Astha Sukhija – in the book Diagnostic Procedures & Minor Surgical Interventions in Obstetrics & Gynaecology – Jaypee Brothers Medical Publishers, 1/e/2007
                            </li>
                        </ul>
                        <h3 className='text-2xl font-semibold py-2 my-3 mt-8 bg-pink-200 px-4'>ASHA FERTILITY CLINIC: BEST IVF CLINIC IN GURGAON</h3>
                        <p>
                        At our clinic, we are committed to providing excellent treatment to our patients. We aim at offering world-class fertility treatment through personalized treatment & innovative procedures. If you have been looking for a comprehensive infertility program, then we are your ultimate option and will help you to grow your family. We are on a mission to bring a smile to the face of those women longing to have the taste of motherhood. We take pride in claiming the Best IVF Centre in Gurgaon. In our world-class lab, the experienced team of professionals oversees the fertilization process. So no more delay to experience motherhood and fix up an appointment with our expert doctor before visiting our clinic.
                        </p>
                        <p>
                        With a team of highly skilled fertility specialists, the clinic provides a compassionate and supportive environment, ensuring that each patient receives tailored treatment plans designed to maximize their chances of conception. Asha Fertility Clinic is equipped with advanced medical technologies and follows the latest advancements in infertility treatment, making it a trusted choice for couples facing fertility challenges. The clinic’s commitment to success is mirrored in its impressive success rates, making it the best IVF clinic in Gurgaon for those looking to embark on their journey to parenthood. We will certainly make your experience memorable as you visit us,
                        </p>
                    </div>
                </div>
            </div>
            {/* ABOUT ASTHA DETAILS END HERE */}

            {/* FEATURE HERO SECTION STARTS HERE */}
            <div className='w-full h-auto bg-fixed bg-center bg-cover' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${fixedBanner})`,
            }}>
                <div className='w-full max-w-screen-lg py-10 lg:px-0 px-6 m-auto h-full flex gap-6 items-center justify-center flex-col lg:flex-row lg:py-20'>
                    <div className='w-full px-6'>
                        <div className='w-full text-center'>
                            <LazyLoadImage src={assets.happyFamily} className='w-24 m-auto pb-4' />
                            <h2 className='text-white text-4xl font-bold'>3000+</h2>
                            <h4 className='text-white text-xl font-normal' data-aos='zoom-in'>Happy Clients</h4>
                        </div>
                    </div>
                    <div className='w-full px-6'>
                        <div className='w-full text-center'>
                            <LazyLoadImage src={assets.highSuccess} className='w-24 m-auto pb-4' />
                            <h2 className='text-white text-4xl font-bold'>87%</h2>
                            <h4 className='text-white text-xl font-normal' data-aos='zoom-in'>High Success Rate</h4>
                        </div>
                    </div>
                    <div className='w-full px-6'>
                        <div className='w-full text-center'>
                            <LazyLoadImage src={assets.experience} className='w-24 m-auto pb-4' />
                            <h2 className='text-white text-4xl font-bold'>18+</h2>
                            <h4 className='text-white text-xl font-normal' data-aos='zoom-in'>Years of Experience</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEATURE HERO SECTION END HERE */}

        </div >
    )
}