import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import style from './blog.module.css';
import { assets } from '../../assets/assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactModal from '../Modal/contactModal';


// Below for Same Page Link Redirect
export default function Blog() {
    const context = useOutletContext();

    if (!context) {
        return <p>Error: Outlet context is undefined.</p>;
    }

    const { blogRef } = context;
    const { aboutRef } = context;
    const { serviceRef } = context;
    const { ivfProcessRef } = context;

    const [contactModal, setContactModal] = useState(false);


    return (
        <>
            <div className='bg-slate-100 w-full'>
                <div className={style.blogBanner}></div>
            </div>


            <div className='w-full bg-gray-100 h-auto py-10 px-6 lg:px-0'>
                <div className='w-full max-w-screen-xl m-auto grid grid-cols-2 lg:grid-cols-3 gap-6 content-center items-center justify-center'>
                    {/* Article/Blog Below */}
                    <article>
                            <div className={style.articleWrapper}>
                                <figure>
                                    <LazyLoadImage src={assets.blog1} alt="Blog Image" />
                                </figure>
                                <div className={style.articleBody}>
                                    <h2>Gurgaon—Top Specialists for IVF & Infertility Treatment</h2>
                                    <h5>DOP : 10-03-2025</h5>
                                    <p>
                                    Parents, we know that the path of parenthood is not as smooth and easy as we hope it would be. At Asha IVF, we know that infertility can be an emotional and physical rollercoaster, and that is a moment parenthood becomes a conception challenge
                                    </p>
                                    <Link to="/blog/TopSpecialistForIVF" className={style.readMore}>
                                        View More 
                                    </Link>
                                </div>
                            </div>
                        </article>
                    {/* Article/Blog Below */}
                    {/* <article>
                            <div className={style.articleWrapper}>
                                <figure>
                                    <LazyLoadImage src={assets.blog1} alt="Blog Image" />
                                </figure>
                                <div className={style.articleBody}>
                                    <h2>IVF Blog: Expert Insights & Latest Updates</h2>
                                    <h5>DOP : 08-03-2025</h5>
                                    <p>
                                    Stay informed with expert articles on fertility, IVF treatments, success stories, and the latest advancements in reproductive care.
                                    </p>
                                    <Link to="/" className={style.readMore}>
                                        View More 
                                    </Link>
                                </div>
                            </div>
                        </article> */}
                    {/* Article/Blog Below */}
                    {/* <article>
                            <div className={style.articleWrapper}>
                                <figure>
                                    <LazyLoadImage src={assets.blog1} alt="Blog Image" />
                                </figure>
                                <div className={style.articleBody}>
                                    <h2>IVF Blog: Expert Insights & Latest Updates</h2>
                                    <h5>DOP : 08-03-2025</h5>
                                    <p>
                                    Stay informed with expert articles on fertility, IVF treatments, success stories, and the latest advancements in reproductive care.
                                    </p>
                                    <Link to="/" className={style.readMore}>
                                        View More 
                                    </Link>
                                </div>
                            </div>
                        </article> */}
                    {/* Article/Blog Below */}
                    {/* <article>
                            <div className={style.articleWrapper}>
                                <figure>
                                    <LazyLoadImage src={assets.blog1} alt="Blog Image" />
                                </figure>
                                <div className={style.articleBody}>
                                    <h2>IVF Blog: Expert Insights & Latest Updates</h2>
                                    <h5>DOP : 08-03-2025</h5>
                                    <p>
                                    Stay informed with expert articles on fertility, IVF treatments, success stories, and the latest advancements in reproductive care.
                                    </p>
                                    <Link to="/" className={style.readMore}>
                                        View More 
                                    </Link>
                                </div>
                            </div>
                        </article> */}
                </div>
            </div>
        </>
    );
}
