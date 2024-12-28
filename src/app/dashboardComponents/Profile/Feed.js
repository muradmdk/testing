import { CCol, CRow } from '@coreui/react';
import React, { useState } from 'react';
import "@/app/styles/Feeds/feeds.css"
import Image from 'next/image';
import FeedImage from "../../assets/feed/feed-1.png";
import play from "../../assets/feed/play.png";
import like from "../../assets/feed/like.png";
import comment from "../../assets/feed/comments.png";
import share from "../../assets/feed/share.png";
import ShareModal from '@/app/components/SharingModal/ShareModal';

function Feed() {

    const [visible, setVisible] = useState(false);
    const [shareModalVisible, setShareModalVisible] = useState(false);
    const openShareModal = () => setShareModalVisible(true);
    const closeShareModal = () => setShareModalVisible(false);

    return (
        <>
            <CRow>
                <CCol lg={12}>
                    <div className='singleFeed-card'>
                        <div className='singleFeed-header position-relative'>
                            <Image src={FeedImage} width={100} height={100} alt='feed-img' className='feed-img'></Image>
                            <div className='header-audio-control'>
                                <button type='button'><Image src={play} width={60} height={60} alt='feed-img'></Image></button>
                            </div>
                        </div>
                        <div className='singleFeed-content-wrapper mt-2'>
                            <div className='single-actions'>
                                <ul>
                                    <li>
                                        <div className='action-wrapper'>
                                            <button type='button'><Image src={like} width={24} height={24} alt=''></Image></button>
                                            <p className='mb-0'>247k</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='action-wrapper'>
                                            <button type='button' onClick={() => setVisible(!visible)}><Image src={comment} width={24} height={24} alt=''></Image></button>
                                            <p className='mb-0'>53</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='single-share-dropdown text-end'>
                                <div className='single-share-placeholder'>
                                    <div className='action-wrapper'>
                                        <button type='button' onClick={openShareModal} ><Image src={share} width={24} height={24} alt=''></Image></button>
                                        <p className='mb-0'>53</p>
                                    </div>
                                    <div className='action-dropdown ms-3'>
                                        dots
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CCol>
            </CRow>
            <CRow className='mt-4'>
                <CCol lg={12}>
                    <div className='cover-title d-flex align-items-center mb-3'>
                        <div className='cover me-2'>
                            <Image src='/assets/cover-photo.png' width={64} height={64} alt='cover' />
                        </div>
                        <div>
                            <p className='font-lato fs-21 fw-400 lh-26 color-blue mb-0'>Skyfall Beats</p>
                            <span className='font-lato fs-16 fw-700 lh-19 color-blue'>Ahmed hassan</span>
                        </div>
                    </div>
                </CCol>
            </CRow>
            <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
        </>
    )
}

export default Feed;