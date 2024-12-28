import React, { useState } from 'react';
import { CContainer, CCol, CRow } from "@coreui/react";
import banner from "../../assets/feed/feed-2.png"
import Image from 'next/image';
import "@/app/styles/artist/artist-detail.css"

import profileAvatar from "@/app/assets/feed/profile.png"

// UI

import ProfileInfo from "@/app/components/UI/ProfileInfo"

export default function ArtistDetail() {
    return (
        <>
            <section className='artist-detail-wrapper'>
                <CContainer>
                    <CRow>
                        <CCol lg={12}>
                            <div className='ad-banner-wrapper'>
                                <Image src={banner} alt="" width={100} height={350} />
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs={6}>
                            <div className='mt-4'>
                                <ProfileInfo avatar={profileAvatar} profileName={'Northern Attitude'} subDetail={'Ahmed hassan'} />
                            </div>
                        </CCol>
                        <CCol lg={6}>
                            <div className='mt-4 text-end'>
                                share
                            </div>
                        </CCol>
                    </CRow>
                </CContainer>
            </section>
        </>
    )
}
