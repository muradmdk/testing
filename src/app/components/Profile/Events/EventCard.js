import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function EventCard() {
    return (
        <>
            <Link href='#' style={{ textDecoration:'none' }}>
                <div className='event-card-wrapper w-100 d-flex align-items-center flex-wrap'>
                    <div className='event-img-wrap pe-2'>
                        <Image 
                            src='/assets/profile/event-img.png'
                            height={60}
                            width={60}
                            alt='icon'
                        />
                    </div>
                    <div className='border-x px-2 text-center'>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>Fri</span>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>02</span>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>Aug</span>
                    </div>
                    <div className='event-location ps-2'>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>Germany</span>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>23 March 2024</span>
                        <span className='d-block fs-16 fw-400 font-lato lh-19 color-white'>100$</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default EventCard;