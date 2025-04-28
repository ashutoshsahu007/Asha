import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import style from './bloglist.module.css';
import { assets } from '../../assets/assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';


// Below for Same Page Link Redirect
export default function TopSpecialistForIVF() {
    return (
        <>
            <div className='bg-slate-100 w-full h-[auto] overflow-hidden'>
                <LazyLoadImage src={assets.blogPost1} className='bg-contain' />
            </div>


            <div className='w-full bg-gray-100 h-auto py-10 px-6 lg:px-0'>
                <div className='relative w-full max-w-screen-xl m-auto flex lg:flex-row flex-col-reverse gap-6 content-center items-center justify-center'>
                    {/* Fixed Article/Blog Below */}
                    <article className='lg:w-1/4 w-full lg:sticky static top-5 left-6 bottom-10 px-6'>
                        <div>
                            <figure>
                                <LazyLoadImage src={assets.blog1} className='mt-6' alt="Blog Image" />
                            </figure>
                            <div className={style.articleBody}>
                                <h2>Related Posts :</h2>
                                <Link to="" className={style.readMore}><h5>DOP : 08-03-2025</h5></Link>
                            </div>
                        </div>
                    </article>

                    {/* Article/Blog Below */}
                    <article className='lg:w-3/4 w-full'>
                        <div className={style.articleWrapper}>
                            <div className={style.articleBody}>
                                <h2>Gurgaon—Top Specialists for IVF & Infertility Treatment</h2>
                                <h5>DOP : 10-03-2025</h5>
                                <b>Introduction</b>
                                <p>
                                Parents, we know that the path of parenthood is not as smooth and easy as we hope it would be. At Asha IVF, we know that infertility can be an emotional and physical rollercoaster, and that is a moment parenthood becomes a conception challenge; it can often feel like you're facing an uphill battle. This is where the expertise of a fertility doctor becomes invaluable
                                </p>
                                <p>
                                But in Asha IVF Gurgaon, which is one of India's leading IVF hubs, there are many renowned specialists who offer hope, support, and advanced fertility treatments to help couples fulfil their dreams of having a baby. From the processes of IVF, egg freezing, and many more advanced laparoscopic surgeries, fertility treatments in Asha IVF Gurgaon have made immense strides, thanks to some of our best doctors in the field.
                                </p>
                                <p>
                                Here's if you're searching and dreaming of the right fertility specialist in your city, Gurgaon, so yes, you're in the right corner. Because In this Asha IVF blog, we'll introduce you to some of our top infertility warrior doctors in the city, Gurgaon, known for their exceptional care, success rate, and hopeful commitment to their patients (emotional and physical well-being).
                                </p>
                                <b>Why did you choose fertility treatment at Asha IVF Gurgaon?</b>
                                <p>
                                Asha IVF Gurgaon, a bustling choice because it exists in the National Capital Region (NCR) of India, has emerged as a prominent destination for healthcare, particularly in the field of reproductive medicine and fertility medicine. At Asha IVF clinics, we offer world-class IVF treatments at competitive prices. And this is one of the main reasons couples choose us from across India and even from abroad to opt for fertility treatments. In Asha IVF Gurgaon, the high standard of infertility expert care is provided by the doctors.
                                </p>
                                <p>
                                Our fertility specialists in Gurgaon, we proudly say, are just not specialists; they have a combined expertise in assisted reproductive technology, IVF embryo transfer, and egg transfer. At our clinic, we provide our patients the best possible treatment options. Furthermore, the focus on extra personalised care ensures that every couple’s needs and concerns are addressed comprehensively.
                                </p>
                                <b>Meet our Top Fertility Doctors in Gurgaon for IVF & Infertility Treatment.</b>
                                <br />
                                <br />
                                <h3 className='text-xl font-bold'>1. Dr. Astha Chakravarty</h3>
                                <i>Director & Senior Consultant, Asha IVF & Fertility Centre</i>
                                <br /><br />
                                
                                <p>
                                Dr. Astha Chakravarty is a well-respected fertility expert & the best IVF specialist in Faridabad, known for her skill in creating personalised treatment plans that consider both the medical needs and budget of her patients. She studied at Maulana Azad Medical College in New Delhi, one of India’s top medical schools, where she earned her undergraduate and postgraduate degrees.
                                </p>
                                <p>
                                Dr. Chakravarty ensures that each patient receives a treatment plan tailored to their specific needs, considering medical history, budget, and long-term goals. Her commitment to creating positive outcomes for her patients is complemented by her exceptional knowledge and expertise. Dr. Chakravarty completed both her undergraduate and postgraduate education at Maulana Azad Medical College, New Delhi, one of India's premier medical institutions, where she received top-tier training in reproductive medicine. She is dedicated to providing the highest level of care and is known for achieving excellent success rates in IVF treatments. Her approach includes cutting-edge technologies in assisted reproduction and a holistic, patient-centric approach that helps ease the journey through fertility treatment.
                                </p>

                                <br />
                                <h3 className='text-xl font-bold'>2- Dr. Preeti Yadav</h3>
                                <i>Senior Consultant IVF & Endoscopy Asha IVF & Fertility Centre Gurugram</i>
                                <br /><br />
                                <p>
                                Dr. Preeti Yadav is a well-trained reproductive medicine consultant. She has completed her MBBS and MS in Obstetrics & Gynaecology from Maulana Azad Medical College, New Delhi, and has an experience of more than 10 years in this field. She has further completed her fellowship and diploma in minimal surgery at World Laparoscopy Hospital, Gurgaon, and fellowship in reproductive medicine from Wings IVF Centre affiliated with Parul University, Ahmedabad.
                                </p>
                                <p>
                                Dr. Yadav’s experienced and advanced training allows her to offer patients cutting-edge treatments for infertility, including IVF, IUI, and endoscopic surgeries. Known for her empathetic and patient-centred personal care, she works closely with each patient to develop customised treatment plans that are both effective and affordable, helping them achieve their dream of parenthood.
                                </p>
                                <br />
                                <h3 className='text-xl font-bold'>3- Dr. Shama</h3>
                                <i>Senior Embryologist, Asha IVF & Fertility Centre, Gurugram</i>
                                <br /><br />
                                <p>
                                Dr. B. Shama is a skilled embryologist with expertise in assisted reproduction. She holds a PhD in Animal Biotechnology from ICAR-National Dairy Research Institute, Karnal. With extensive experience in IVF, ICSI, and embryo cryopreservation, she has contributed significantly to reproductive medicine. She has received multiple awards, including the Dr. Kuldeep Jain-Best Embryology Paper Award.
                                </p>
                                <p>
                                Dr. Shama’s passion for her work is evident in her commitment to staying at the forefront of developments in the field. She has earned several accolades, including the highly esteemed Dr. Kuldeep Jain-Best Embryology Paper Award, which speaks to her dedication to research and excellence in embryology. Her meticulous approach to embryo handling, along with her compassionate care, has earned her the respect of both her colleagues and patients alike.
                                </p>
                                <b>Here we are guiding you to choose the right fertility doctor for you.</b>
                                <p>
                                It's necessary that, when we have come to choosing a fertility doctor, it’s important to consider multiple factors. The most crucial factor is expertise—look for a specialist with a great experience track record of success in handling cases similar to yours. But equally important is the approach to patient personal care. Infertility can be a deeply emotional experience, and having an understanding doctor who is empathetic, supportive, and willing to listen to your concerns can make all the difference.
                                </p>
                                <p>
                                Asha IVF Gurgaon’s fertility doctors are not only in their medical expertise but also in providing comprehensive extra care that addresses the emotional and psychological aspects of infertility. From our patients first consultation to the final outcome, our specialists are committed to walking alongside you every step of the way, offering the latest treatments, compassionate care, and the highest chances of success.
                                </p>
                                <b>Conclusion: Final Thought</b>
                                <p>
                                Your fertility treatments are an investment in your future, and selecting the right IVF fertility doctor can be one of the most important decisions you make in your dream of parenthood. Our fertility expert doctors in Asha IVF Gurgaon offer world-class treatments and an unwavering commitment to ensuring that every couple receives the best possible chance to become parents. With their combination of advanced medical techniques, compassionate care, and dedication to success, the fertility specialists in Gurgaon are among the best in the world.
                                </p>
                                <p>
                                If you’re on the journey to parenthood, don’t hesitate to consult one of these experts and take the first step towards making your dream of having a baby a reality.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
