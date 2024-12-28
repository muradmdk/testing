"use client";
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CButton, CCol, CDropdown, CDropdownMenu, CDropdownToggle, CRow } from '@coreui/react';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/dashboard/subscribe/subscribe.css';
import "@/app/styles/UI/dropdownMenu.css"
import menuIcon from '@/app/assets/menu.svg';

function Subscribe() {

    const [queueList, setQueueList] = useState([]);

    useEffect(() => {
        const fetchQueueList = async () => {
            const res = await fetch("/data/queueList.json");
            const data = await res.json();
            setQueueList(data);
        };

        fetchQueueList();
    }, []);

    return (
        <>
            <CRow>
                <CCol lg={12}>
                    <div className='common-card mb-3'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h2 className='mb-0'>Subscription</h2>
                            <Link href='#'>
                                <Image src='/assets/dashboard/add-subscription.svg' height={30} width={30} alt='icon' />
                            </Link>
                        </div>
                        <div className='subscription-wrapper mt-3'>
                            <CAccordion activeItemKey={1}>
                                <CAccordionItem itemKey={1}>
                                    <CAccordionHeader>
                                        <div className='subscription-level'>
                                            <p>Level 1</p>
                                            <span>1 Months</span>
                                        </div>
                                        <div className='subscription-level'>
                                            <p>Songs</p>
                                            <span>25</span>
                                        </div>
                                        <div className='subscription-level'>
                                            <p>Revenue Generated</p>
                                            <span>15$</span>
                                        </div>
                                        <Image className='label-img' src={'/assets/dashboard/label.svg'} width={100} height={20} alt='sub-label' />
                                    </CAccordionHeader>
                                    <CAccordionBody>
                                        <div className='subscription-album-list'>
                                            <CRow className="align-items-center gx-1">
                                                <CCol md={4} xs={5}>
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato">
                                                        Album Name{" "}
                                                    </p>
                                                </CCol>
                                                <CCol md={3} xs={5} className="ps-2 text-center">
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato">Relase Date</p>
                                                </CCol>
                                                <CCol md={2} xs={2} className="">
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato text-center">Songs</p>
                                                </CCol>
                                            </CRow>

                                            <ul className="ps-0 pe-2">
                                                {queueList.map((artist, index) => (
                                                    <li className="mb-2" key={index}>
                                                        <CRow className="align-items-center gx-1 single-ablum-list">
                                                            <CCol md={4} xs={5}>
                                                                <div className="artist-avatar d-flex align-items-center">
                                                                    <Image
                                                                        src={artist.queueIcon}
                                                                        width={55}
                                                                        height={55}
                                                                        alt="artist"
                                                                    />
                                                                    <p className="ps-3 fs-16 fw-400 lh-16 mb-1 font-lato track-name">
                                                                        {artist.queueTitle}
                                                                    </p>
                                                                </div>
                                                            </CCol>
                                                            <CCol md={3} xs={4} className="ps-md-2">
                                                                <div className="queue-list-disc text-center">
                                                                    <span className="fs-16 fw-400 lh-16 font-lato track-name ">
                                                                        Nov 4, 2023
                                                                    </span>
                                                                </div>
                                                            </CCol>
                                                            <CCol md={2} xs={2}>
                                                                <div className='text-center'>
                                                                    <span className='track-name'>12</span>
                                                                </div>
                                                            </CCol>
                                                            <CCol
                                                                md={3}
                                                                xs={1}
                                                                className="d-flex justify-content-end add-album-btn"
                                                            >
                                                                <div className='custom-dropdown-menu pe-3'>
                                                                    <CDropdown popper={true}>
                                                                        <CDropdownToggle className='p-0'>
                                                                            <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2.5 9.50016H2.51042V9.51058H2.5V9.50016ZM2.5 2.2085H2.51042V2.21891H2.5V2.2085ZM2.5 16.7918H2.51042V16.8022H2.5V16.7918Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                                                            </svg>
                                                                        </CDropdownToggle>
                                                                        <CDropdownMenu>
                                                                            <Link href="#" className='d-flex align-items-center dropdown-item'>
                                                                                <span className='fw-400 fs-16 text-white'>Edit</span>
                                                                            </Link>
                                                                            <Link href="#" className='d-flex align-items-center dropdown-item'>
                                                                                <span className='fw-400 fs-16 text-white'>Delete</span>
                                                                            </Link>
                                                                        </CDropdownMenu>
                                                                    </CDropdown>
                                                                </div>
                                                            </CCol>
                                                        </CRow>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CAccordionBody>
                                </CAccordionItem>
                                <CAccordionItem itemKey={2}>
                                    <CAccordionHeader>
                                        <div className='subscription-level'>
                                            <p>Level 2</p>
                                            <span>1 Months</span>
                                        </div>
                                        <div className='subscription-level'>
                                            <p>Songs</p>
                                            <span>25</span>
                                        </div>
                                        <div className='subscription-level'>
                                            <p>Revenue Generated</p>
                                            <span>15$</span>
                                        </div>
                                        <Image className='label-img' src={'/assets/dashboard/label.svg'} width={100} height={20} alt='sub-label' />
                                    </CAccordionHeader>
                                    <CAccordionBody>
                                        <div className='subscription-album-list'>
                                            <CRow className="align-items-center gx-1">
                                                <CCol md={4} xs={5}>
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato">
                                                        Album Name{" "}
                                                    </p>
                                                </CCol>
                                                <CCol md={3} xs={5} className="ps-2 text-center">
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato">Relase Date</p>
                                                </CCol>
                                                <CCol md={2} xs={2} className="">
                                                    <p className="fs-20 fw-600 lh-20 page-title font-lato text-center">Songs</p>
                                                </CCol>
                                            </CRow>

                                            <ul className="ps-0 pe-2">
                                                {queueList.map((artist, index) => (
                                                    <li className="mb-2" key={index}>
                                                        <CRow className="align-items-center gx-1 single-ablum-list">
                                                            <CCol md={4} xs={5}>
                                                                <div className="artist-avatar d-flex align-items-center">
                                                                    <Image
                                                                        src={artist.queueIcon}
                                                                        width={55}
                                                                        height={55}
                                                                        alt="artist"
                                                                    />
                                                                    <p className="ps-3 fs-16 fw-400 lh-16 mb-1 font-lato track-name">
                                                                        {artist.queueTitle}
                                                                    </p>
                                                                </div>
                                                            </CCol>
                                                            <CCol md={3} xs={4} className="ps-md-2">
                                                                <div className="queue-list-disc text-center">
                                                                    <span className="fs-16 fw-400 lh-16 font-lato track-name ">
                                                                        Nov 4, 2023
                                                                    </span>
                                                                </div>
                                                            </CCol>
                                                            <CCol md={2} xs={2}>
                                                                <div className='text-center'>
                                                                    <span className='track-name'>12</span>
                                                                </div>
                                                            </CCol>
                                                            <CCol
                                                                md={3}
                                                                xs={1}
                                                                className="d-flex justify-content-end add-album-btn"
                                                            >
                                                                <div className='custom-dropdown-menu pe-3'>
                                                                    <CDropdown popper={true}>
                                                                        <CDropdownToggle className='p-0'>
                                                                            <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M2.5 9.50016H2.51042V9.51058H2.5V9.50016ZM2.5 2.2085H2.51042V2.21891H2.5V2.2085ZM2.5 16.7918H2.51042V16.8022H2.5V16.7918Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                                                            </svg>
                                                                        </CDropdownToggle>
                                                                        <CDropdownMenu>
                                                                            <Link href="#" className='d-flex align-items-center dropdown-item'>
                                                                                <span className='fw-400 fs-16 text-white'>Edit</span>
                                                                            </Link>
                                                                            <Link href="#" className='d-flex align-items-center dropdown-item'>
                                                                                <span className='fw-400 fs-16 text-white'>Delete</span>
                                                                            </Link>
                                                                        </CDropdownMenu>
                                                                    </CDropdown>
                                                                </div>
                                                            </CCol>
                                                        </CRow>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CAccordionBody>
                                </CAccordionItem>
                            </CAccordion>
                        </div>
                    </div>
                </CCol>
            </CRow>
        </>
    )
}

export default Subscribe;