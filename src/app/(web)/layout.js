// src/app/home/layout.js
import Link from "next/link";
import { CContainer, CRow, CCol } from '@coreui/react';
import "@/app/styles/default/default.css"
import Navbar from "@/app/components/Layout/Navbar";
import SidebarLeft from "@/app/components/Home/SidebarLeft/SidebarLeft";
import SidebarRight from "@/app/components/Home/SidebarRight/SidebarRight";
import BottomPlayer from "@/app/components/BottomPlayer/BottomPlayer";


export const metadata = {
    title: "Home - Distrosub",
};

export default function WebLayout({ children }) {
    return (
        <div className="main-wrapper">
            <div className="layout-header">
                <div className="header-wrapper">
                    <Navbar />
                </div>
            </div>
            <div className="layout-body">
                <CContainer fluid>
                    <CRow className="gx-2 gx-lg-4">
                        <CCol lg={3} xs={6} className="ps-lg-0 order-1 mb-2 mb-lg-0">
                            <div className='sidebar-wrapper sticky-sidebar'>
                                <SidebarLeft dashBoarddropdown={false} />
                            </div>
                        </CCol>
                        <CCol lg={6} className="order-3 order-lg-2">
                            {children}
                        </CCol>
                        <CCol lg={3} xs={6} className="pe-lg-0 order-2 order-lg-3 mb-2 mb-lg-0">
                            <div className='sidebar-wrapper sticky-sidebar'>
                                <SidebarRight />
                            </div>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
            <div className="layout-footer">
                <div className="footer-wrapper">
                    <BottomPlayer />
                </div>
            </div>
        </div>
    );
}
