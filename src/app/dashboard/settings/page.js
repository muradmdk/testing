"use client";
import "@/app/styles/dashboard/commonCard/commonCard.css";
import {  CCol, CRow } from '@coreui/react';
import React from 'react';
import '@/app/styles/dashboard/payout/payout.css';
import dynamic from 'next/dynamic';
const PayoutChart = dynamic(() => import('@/app/dashboardComponents/BarChart/PayoutChart'), { ssr: false });


export default function SettingsDashboard() {
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
                                    <PayoutChart />
                                </div>
                            </CCol>
                        </div>
                        <div className='text-center mt-4'>
                            <button type="button" className="red-theme-btn" >Withdraw Payment</button>
                        </div>
                    </div>
                </CCol>
            </CRow>
        </>
  )
}
