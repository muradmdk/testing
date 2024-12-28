"use client";
import { CCol, CRow } from '@coreui/react';
import React, { useState, useEffect } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import '@/app/styles/events/events.css';
import Image from 'next/image';
import EventCard from '@/app/components/Events/EventCard';

const GOOGLE_API_KEY = 'AIzaSyDipz54vKiH4G86TodW_FZC0DYCQBziS_I'; 

function EventsList() {
    const [autocomplete, setAutocomplete] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [eventsList, setEventsList] = useState([]);

    const handlePlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
        } else {
            console.log('Autocomplete is not loaded yet!');
        }
    };

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
            <LoadScript
                googleMapsApiKey={GOOGLE_API_KEY}
                libraries={['places']}
            >
                <div className='event-filters'>
                    <CRow>
                        <CCol lg={6} className='mb-2 mb-lg-0'>
                            <div className='custom-date-input'>
                                <input 
                                    type='date' 
                                    placeholder='Filter by date' 
                                    className='filters-input w-100' 
                                />
                            </div>
                        </CCol>
                        <CCol lg={6}>
                            <Autocomplete
                                onLoad={(autoC) => setAutocomplete(autoC)}
                                onPlaceChanged={handlePlaceChanged}
                            >
                                <div className='position-relative'>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Filter by location"
                                        className='filters-input w-100'
                                    />
                                    <Image src={'/assets/events/location.svg'} width={23} height={23} alt='location' className='input-icon' />
                                </div>
                            </Autocomplete>
                        </CCol>
                    </CRow>
                </div>
            </LoadScript>
            <CRow>
                {eventsList.map((event, index) => (
                    <CCol lg={12} className='mt-3' key={index}>
                        <EventCard
                            eventPhoto= {event.event_cover_photo}
                            eventTitle= {event.event_title}
                            eventLocation= {event.event_loction}
                            eventDate= {event.event_date}
                            ticketPrice= {event.event_ticket_price}
                            eventTime= {event.event_time}
                            attendees= {event.total_attendees}
                        />
                    </CCol>
                ))}
            </CRow>
        </>
    );
}

export default EventsList;
