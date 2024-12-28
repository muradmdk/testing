"use client";
import {
    CContainer,
    CDropdown,
    CDropdownMenu,
    CDropdownToggle,
    CForm,
    CNavbar,
    CNavbarBrand,
} from '@coreui/react';
import React from 'react';
import '@/app/styles/dashboard/header/header.css';
import Image from 'next/image';
import logo from '@/app/assets/logo.svg';
import menuIcon from '@/app/assets/menu.svg';
import Link from 'next/link';
import "@/app/styles/UI/dropdownMenu.css"

function Header() {

    return (
        <>
            <section className='nav-wrapper dashboard-nav-wrapper'>
                <CNavbar expand="lg" className='pt-0 pb-0'>
                    <CContainer fluid>
                        <CNavbarBrand>
                            <Link href='/'>
                                <Image src={logo} alt='logo' width='70' height='70' />
                            </Link>
                        </CNavbarBrand>
                        <div className='d-flex align-items-center'>
                            <div className='nav-srch-form'>
                                <CForm className="d-flex align-items-center ms-auto header-form">
                                    <Link href={'/dashboard/notification'} className='me-3'>
                                        <Image src={'/assets/dashboard/notification-bell.svg'} width={20} height={20} alt='icon' />
                                    </Link>
                                    <div className='custom-dropdown-menu'>
                                        <CDropdown popper={true}>
                                            <CDropdownToggle className='p-0'>
                                                <Image className='d-lg-block' src={menuIcon} width={25} height={25} alt='icon' />
                                            </CDropdownToggle>
                                            <CDropdownMenu>
                                                <Link href="/dashboard/settings/profile" className='d-flex align-items-center dropdown-item'>
                                                    <span className='fw-400 fs-16 text-white'>Profile</span>
                                                </Link>
                                                <Link href="/dashboard/settings" className='d-flex align-items-center dropdown-item'>
                                                    <span className='fw-400 fs-16 text-white'>Settings</span>
                                                </Link>
                                                <Link href="/dashboard/message" className='d-flex align-items-center dropdown-item'>
                                                    <span className='fw-400 fs-16 text-white'>Messages</span>
                                                </Link>
                                                <Link href="/dashboard/analytics" className='d-flex align-items-center dropdown-item'>
                                                    <span className='fw-400 fs-16 text-white'>Analytics</span>
                                                </Link>
                                                <Link href="/dashboard/upload-album" className='d-flex align-items-center dropdown-item'>
                                                    <span className='fw-400 fs-16 text-white'>Upload</span>
                                                </Link>
                                            </CDropdownMenu>
                                        </CDropdown>
                                    </div>
                                </CForm>
                            </div>
                        </div>
                    </CContainer>
                </CNavbar>
            </section>
        </>
    )
}

export default Header;
