import { CContainer, CRow, CCol } from '@coreui/react';
import "@/app/styles/default/default.css"
import "@/app/styles/dashboard/sidebar/sidebar.css";
import Header from '../dashboardComponents/Header/Header';
import '@/app/styles/dashboard/responsive/responsive.css';


export const metadata = {
    title: "Dashboard - Distrosub",
};

export default function DashboardLayout({ children }) {
    return (

        <div className="main-wrapper">
            <div className="layout-header">
                <div className="header-wrapper">
                    <Header />
                </div>
            </div>
            <div className="layout-body pb-0">
                <CContainer fluid className='ps-lg-0 pe-lg-0'>
                    {children}
                </CContainer>
            </div>
        </div>
    );
}
