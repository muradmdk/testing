import { CCol, CRow } from '@coreui/react';
import Image from 'next/image';
import React from 'react';
import "@/app/styles/events/events.css"

function EventCard(props) {
    return (
        <>
            <div className='event-card'>
                <CRow className='gx-3'>
                    <CCol lg={5} md={5} sm={5}>
                        <div className='event-cover-photo w-100'>
                            <Image
                                src={props.eventPhoto}
                                width={100}
                                height={100}
                                alt='event'
                            />
                        </div>
                    </CCol>
                    <CCol lg={7} md={7} sm={7} className='mt-3 mt-sm-0'>
                        <div className='event-details'>

                            <div className='event-detail-header'>
                                <div className='event-title mt-3'>
                                    <h3>{props.eventTitle}</h3>
                                </div>
                            </div>
                            <div className='event-detail-body'>
                                <ul className='event-details-list ps-0 mb-0 mt-3'>
                                    <li>
                                        <Image
                                            src={'/assets/events/location-icon.svg'}
                                            width={22}
                                            height={22}
                                            alt='event'
                                        />
                                        <span>{props.eventLocation}</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={'/assets/events/date-icon.svg'}
                                            width={22}
                                            height={22}
                                            alt='event'
                                        />
                                        <span>{props.eventDate}</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={'/assets/events/currency.svg'}
                                            width={22}
                                            height={22}
                                            alt='event'
                                        />
                                        <span>{props.ticketPrice}</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={'/assets/events/time-icon.svg'}
                                            width={22}
                                            height={22}
                                            alt='event'
                                        />
                                        <span>{props.eventTime}</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={'/assets/events/percent-icon.svg'}
                                            width={22}
                                            height={22}
                                            alt='event'
                                        />
                                        <span>Attendees {props.attendees}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='event-detail-footer'>
                                <div className='text-end'>
                                    <button type='button' className='event-attend-btn'>Attend Event</button>
                                </div>
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </div>
        </>
    )
}

export default EventCard;