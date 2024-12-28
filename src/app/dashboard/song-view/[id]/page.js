import React from 'react';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import '@/app/styles/dashboard/songDetail/songDetail.css';
import SongStreamChart from '@/app/dashboardComponents/SongStreamChart/SongStreamChart';
import SongCommentSection from '@/app/dashboardComponents/SongCommentSection/SongCommentSection';

import {
    CRow,
    CCol
} from '@coreui/react';
import DemoImage from "@/app/assets/mixtape.png";
import Image from 'next/image';

function SingleSongView() {
    return (
        <>
            <CRow>
                <CCol lg={3} className='mb-4 mb-lg-0'>
                    <div className='common-card'>
                        <div className='song-view-wrapper'>
                            <Image src={DemoImage} width={100} height={280} alt='song-img' className='w-100' style={{objectFit:'cover',borderRadius:'20px'}}></Image>
                            <h4 className='mb-0 fw-500 fs-16 font-lato mt-3' style={{background:'#4A506980',padding:"10px",color:"white", borderRadius:"10px"}}>Hassan</h4>
                        </div>
                    </div>
                </CCol>
                <CCol lg={9}>
                    <div className='common-card'>
                        <h2 className='mb-4'>Overview</h2>
                        <div className='streaming-card'>
                            <p className='mb-4'>Streaming By Time</p>
                            <SongStreamChart />
                        </div>
                        <div className='song-comment-section mt-4'>
                            <SongCommentSection />
                        </div>
                    </div>
                </CCol>
            </CRow>

        </>
    )
}

export default SingleSongView;