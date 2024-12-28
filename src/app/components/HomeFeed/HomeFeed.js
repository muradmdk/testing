import React from 'react';
import FeedList from './FeedList';
import { CContainer, CRow, CCol } from "@coreui/react";

export default function HomeFeed() {
    
    return (
        <>
            <section className='news-feed-wrapper'>
                <CContainer>
                    <FeedList></FeedList>
                    <FeedList></FeedList>
                </CContainer>
            </section>

        </>
    )
}
