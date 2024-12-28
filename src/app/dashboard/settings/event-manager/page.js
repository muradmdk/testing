"use client";
import { CButton, CCol, CRow } from '@coreui/react';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import EventCard from '@/app/dashboardComponents/EventManagement/EventCard';
import CreateEventModal from '@/app/dashboardComponents/EventManagement/CreateEventModal';

function EventManager() {

    const [eventsList, setEventsList] = useState([]);
    const [ModalVisible, setModalVisible] = useState(false);
    const openShareModal = () => setModalVisible(true);
    const closeShareModal = () => setModalVisible(false);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fetchEventList = async () => {
            const res = await fetch("/data/eventsList.json");
            const data = await res.json();
            setEventsList(data);
        };

        fetchEventList();
    }, []);

    return (
        <>
            <CRow>
                <CCol lg={12}>
                    <div className='common-card'>
                        <div className='d-flex flex-wrap align-items-center justify-content-between'>
                            <h2 className='mb-3 mb-lg-0'>Event Manager</h2>
                            <button className='new-event-btn d-flex align-items-center'  onClick={openShareModal}>
                                <Image src={'/assets/dashboard/add-event.svg'} width={20} height={20} alt='icon' />
                                <span className='ms-2'>Create Event</span>
                            </button>
                        </div>
                        <CRow className='gx-0'>
                            {eventsList.map((event, index) => (
                                <CCol lg={12} className='mt-3' key={index}>
                                    <EventCard
                                        eventPhoto={event.event_cover_photo}
                                        eventTitle={event.event_title}
                                        eventLocation={event.event_loction}
                                        eventDate={event.event_date}
                                        ticketPrice={event.event_ticket_price}
                                        eventTime={event.event_time}
                                        attendees={event.total_attendees}
                                    />
                                </CCol>
                            ))}
                        </CRow>
                    </div>
                </CCol>
            </CRow>

            <CreateEventModal visible={ModalVisible} onClose={closeShareModal} />
        </>
    )
}

export default EventManager;