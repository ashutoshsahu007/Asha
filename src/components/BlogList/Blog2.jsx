import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import style from './bloglist.module.css';
import { assets } from '../../assets/assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';


// Below for Same Page Link Redirect
export default function Blog2() {
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
                                <h2>Second Blog Title Here</h2>
                                <h5>DOP : 08-03-2025</h5>
                                <p>
                                    Stay informed with expert articles on fertility, IVF treatments, success stories, and the latest advancements in reproductive care.
                                </p>
                                <Link to="/" className={style.readMore}>
                                    View More
                                </Link>
                            </div>
                        </div>
                    </article>
                    {/* Article/Blog Below */}
                    <article>
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
                    </article>
                    {/* Article/Blog Below */}
                    <article>
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
                    </article>
                    {/* Article/Blog Below */}
                    <article>
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
                    </article>
                </div>
            </div>
        </>
    );
}
