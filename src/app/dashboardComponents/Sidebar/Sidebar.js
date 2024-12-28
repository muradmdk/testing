"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { CButton, CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader } from "@coreui/react";
import Link from 'next/link';
import "@/app/styles/sideBars/left.css";
import "@/app/styles/dashboard/sidebar/sidebar.css";

function SidebarLeft() {
    const [visible, setVisible] = useState(false);
    const pathname = usePathname(); // Get the current pathname directly

    const isActive = (href) => pathname === href;

    return (
        <>
            {/* <div className='sidebar-layout-wrapper'>
                <div className='side-layout-body'> */}
                    <CButton className="d-lg-none w-100 profile-sidebar-toggler" onClick={() => setVisible(true)}>Settings Menu</CButton>
                    <COffcanvas
                        responsive="lg"
                        expand="lg"
                        placement="start"
                        visible={visible}
                        onHide={() => setVisible(false)}
                        backdrop={false}
                        className='list-offcanvas'
                    >
                        <COffcanvasHeader className='justify-content-end'>
                            <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
                        </COffcanvasHeader>
                        <COffcanvasBody className='w-100 p-4'>
                            <div className='sidebar-layout-wrapper w-100'>
                                {/* <h2>Side MENU</h2> */}
                                <div className='side-layout-body w-100 h-100'>
                                    <ul className='sidebar-menu-list w-100'>
                                        <li className={isActive('/dashboard/settings') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings'} onClick={()=>setVisible(false)}>Payout</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/subscribe') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/subscribe'} onClick={()=>setVisible(false)}>Subscription</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/notifications') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/notifications'} onClick={()=>setVisible(false)}>Notification Settings</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/update-password') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/update-password'} onClick={()=>setVisible(false)}>Security</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/user-account') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/user-account'} onClick={()=>setVisible(false)}>User Access</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/event-manager') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/event-manager'} onClick={()=>setVisible(false)}>Events Creation</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/profile') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/profile'} onClick={()=>setVisible(false)}>Profile</Link>
                                        </li>
                                        <li className={isActive('/dashboard/settings/mixtape') ? 'active' : ''}>
                                            <Link href={'/dashboard/settings/mixtape'} onClick={()=>setVisible(false)}>Create Mixtape</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </COffcanvasBody>
                    </COffcanvas>
                {/* </div>
            </div> */}
        </>
    );
}

export default SidebarLeft;
