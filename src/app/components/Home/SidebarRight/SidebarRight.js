"use client";
import React, { useState } from 'react';
import { CButton, CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader } from "@coreui/react";
import CommentsList from '../CommentsSection/CommentsList';
import Image from 'next/image';
import '@/app/styles/home/songDetails.css';
import Link from 'next/link';
import ShareModal from '../../SharingModal/ShareModal';
import "@/app/styles/sideBars/left.css";
import { useSelector } from "react-redux";

function SidebarRight() {

    const [visible, setVisible] = useState(false);
    const [shareModalVisible, setShareModalVisible] = useState(false);

    const openShareModal = () => setShareModalVisible(true);
    const closeShareModal = () => setShareModalVisible(false);

    const { currentTrack } = useSelector((state) => state.audioPlayer);

    return (
        <>
            <CButton className="d-lg-none w-100 profile-sidebar-toggler" onClick={() => setVisible(true)}>
                Now Playing
            </CButton>
            <COffcanvas
                responsive="lg"
                expand="lg"
                placement="end"
                visible={visible}
                onHide={() => setVisible(false)}
                backdrop={false}
                className="list-offcanvas h-100"
            >
                <COffcanvasHeader className="justify-content-end">
                    <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                </COffcanvasHeader>
                <COffcanvasBody className="d-flex flex-column p-0 h-100">
                    <div className="d-flex flex-column h-100">
                        <div className='side-layout-header now-playing d-none d-lg-block'>
                            <h2>Now Playing</h2>
                        </div>
                        <div className='side-layout-body' style={{ flex: "1 1 auto", overflowY: "auto" }}>
                            {currentTrack ? (
                                <div className='now-playing-wrapper'>
                                    <div className='player-icon-wrapper w-100 text-center mt-4 mb-4'>
                                        <Image src={'/assets/player.png'} width={95} height={100} alt='icon' />
                                    </div>

                                    <div className='song-details-wrapper mb-3'>
                                        <div className='album-info-wrapper mb-2'>
                                            <div className='album-cover me-2'>
                                                <Image src={currentTrack?.AlbumInfo.albumThumbnail} width={64} height={64} alt='cover' />
                                            </div>
                                            <div className='album-desc'>
                                                <p className='mb-0'>{currentTrack?.AlbumInfo.albumName}</p>
                                                <span>{currentTrack?.AlbumInfo.albumArtist}</span>
                                            </div>
                                        </div>
                                        <div className='shares-likes d-flex align-items-center mb-3'>
                                            <div className='shares me-4 d-flex align-items-center'>
                                                <Link href={'#'}>
                                                    <Image src='/assets/like-icon.svg' width={24} height={24} alt='icon' />
                                                </Link>
                                                <p className='ms-1 mt-1 mb-0'>{currentTrack?.TrackInfo.totalLike}</p>
                                            </div>
                                            <div
                                                className='shares d-flex align-items-center'
                                                onClick={openShareModal}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <Image src='/assets/share-btn.svg' width={24} height={24} alt='icon' />
                                                <p className='ms-2 mt-1 mb-0'>Share</p>
                                            </div>
                                        </div>
                                        <div className='song-desc p-2'>
                                            <p className='mb-0'>
                                                {currentTrack?.trackDesc}
                                            </p>
                                        </div>
                                    </div>

                                    {currentTrack?.TrackComment && currentTrack?.TrackComment.length > 0 ? (
                                        <CommentsList list={currentTrack?.TrackComment} />
                                    ) : (
                                        <div className='no-comment-wrapper'>
                                            <span>No comments found</span>
                                            <p>Please subscribe to the artist</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
                                    <p className='text-center fs-24 fw-400 lh-28 font-lato'>Please select a song first</p>
                                </div>
                            )}
                        </div>
                    </div>
                </COffcanvasBody>
            </COffcanvas>
            <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
        </>
    );
}

export default SidebarRight;
