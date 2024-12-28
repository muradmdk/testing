import { CCol, CRow } from '@coreui/react';
import React from 'react';
import EventCard from './EventCard';
import "@/app/styles/events/profileEvents.css"

function EventsList() {
    return (
        <>
            <CRow className='gx-3'>
                <CCol lg={12}>
                    <h2 className='event-main-title mb-4'>Events</h2>
                </CCol>
                <CCol lg={6} md={6} sm={6} className='mb-3 mb-lg-0'>
                    <EventCard/>
                </CCol>
                <CCol lg={6} md={6} sm={6}>
                    <EventCard/>
                </CCol>
            </CRow> 
        </>
    )
}

export default EventsList;