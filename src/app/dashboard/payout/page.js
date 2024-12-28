"use client";
import "@/app/styles/dashboard/commonCard/commonCard.css";
import { CButton, CCol, CRow } from '@coreui/react';
import React from 'react';
import '@/app/styles/dashboard/payout/payout.css';
// import PayoutChart from "@/app/dashboardComponents/BarChart/PayoutChart";

function PayoutHome() {
    return (
        <>
            <CRow>
                <CCol lg={12}>
                    <div className='common-card mb-3'>
                        <h2>Payout Settings</h2>
                        <div className='bar-chart-wrapper mt-4'>
                            <p>Available Balance</p>
                            <span>Balance available for use</span>
                            <h3 className='mt-3 mb-4'>$19.9</h3>
                            <CCol lg={6} xs={12}>
                                <div className='bar-content w-100'>
                                    {/* <ApexChart/> */}
                                    {/* <PayoutChart/> */}
                                </div>
                            </CCol>
                        </div>
                        <div className='text-center'>
                            <CButton className='theme-primary-btn mt-4' style={{ padding:'12px 40px' }}>Withdraw Payment</CButton>
                        </div>
                    </div>
                </CCol>
            </CRow>
        </>
    )
}

export default PayoutHome;