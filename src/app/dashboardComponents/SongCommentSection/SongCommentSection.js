"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@/app/styles/home/commentsList.css';

function SongCommentSection() {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        const fetchCommentList = async () => {
            const res = await fetch("/data/comments.json");
            const data = await res.json();
            setCommentList(data);
        };

        fetchCommentList();
    }, []);

    return (
        <>
            <div className='comments-wrapper'>
                <div className='comment-input-wrapper'>
                    <h2 className='fw-400 fs-22 lh-26 color-blue font-lato mb-3'>{commentList.length} Comments </h2>
                    <form>
                        <input className='mb-4' type='text' placeholder='Write Your Comments'/>
                    </form>
                </div>
                <div className='comments-list-wrapper'>
                    <div className='comments-list'>
                        <ul className='ps-0'>
                            {commentList.map((comment, index) => (
                                <li key={index} className='mb-3'>
                                    <div className='user-details d-flex align-items-center'>
                                        <Image src={comment.userImage} width={35} height={35} alt='user'/>
                                        <p className='fs-16 fw-600 lh-19 color-blue mb-0 mx-2 font-lato'>{comment.userName}</p>
                                        <span className='fs-12 fw-400 lh-14 color-blue font-lato'>{comment.commentTime}</span>
                                    </div>
                                    <div className='comment-content mt-2'>
                                        <p className='fs-16 fw-400 lh-19 color-blue mb-0 font-lato'>{comment.commentText}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SongCommentSection;