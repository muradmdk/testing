"use client";
import Image from 'next/image';
import React from 'react';
import '@/app/styles/dashboard/notification/notification.css';
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';

function NotificationHome() {
    return (
        <>
            <div className='notfication-wrapper'>
                <div className='text-end'>
                    <CDropdown>
                        <CDropdownToggle color="secondary">All Notifications</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">All Notifications</CDropdownItem>
                            <CDropdownItem href="#">Comments</CDropdownItem>
                            <CDropdownItem href="#">Repost</CDropdownItem>
                            <CDropdownItem href="#">Subscribe</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
                <div className='empty-list-wrapper pt-5 mt-5'>
                    <Image src='/assets/dashboard/notification-bell.png' width={100} height={100} alt='notifications'/>
                    <p>You Don’t Have Any Notifications</p>
                </div>
            </div>
        </>
    )
}

export default NotificationHome;