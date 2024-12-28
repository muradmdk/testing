"use client";
import React, { useState } from 'react';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import { CButton, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react';
import '@/app/styles/dashboard/formInputs/formInputs.css';
import Link from 'next/link';
import pIcon from "@/app/assets/auth/eye-hide.svg";
import Image from 'next/image';

function UpdatePassword() {
    
    const [inputType, setInputType] = useState(false);
    const [inputType2, setInputType2] = useState(false);
    const [inputType3, setInputType3] = useState(false);

    return (
        <>
            <CRow>
                <CCol lg={8}>
                    <div className='common-card'>
                        <h2>Password</h2>
                        <CForm>
                            <CRow className='mt-4'>
                                <CCol lg={6}>
                                    <div className='input-wrapper'>
                                        <CFormLabel htmlFor="">Old Password</CFormLabel>
                                        <div className='position-relative'>
                                            <CFormInput 
                                                type={inputType ? "text" : "password"} 
                                                placeholder="Password" 
                                            />
                                            <Link
                                                href="#"
                                                className="toggle-password"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setInputType(!inputType);
                                                }}
                                            >
                                                <Image
                                                    src={pIcon}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow className='mt-4 mb-3'>
                                <CCol lg={6} className='mb-3'>
                                    <div className='input-wrapper'>
                                        <CFormLabel htmlFor="">New Password</CFormLabel>
                                        <div className='position-relative'>
                                            <CFormInput 
                                                type={inputType2 ? "text" : "password"} 
                                                placeholder="Password" 
                                            />
                                            <Link
                                                href="#"
                                                className="toggle-password"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setInputType2(!inputType2);
                                                }}
                                            >
                                                <Image
                                                    src={pIcon}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </CCol>
                                <CCol lg={6} className='mb-3'>
                                    <div className='input-wrapper'>
                                        <CFormLabel htmlFor="">Confirm Password</CFormLabel>
                                        <div className='position-relative'>
                                            <CFormInput 
                                                type={inputType3 ? "text" : "password"}  
                                                placeholder="Password" 
                                            />
                                            <Link
                                                href="#"
                                                className="toggle-password"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setInputType3(!inputType3);
                                                }}
                                            >
                                                <Image
                                                    src={pIcon}
                                                    width={16}
                                                    height={16}
                                                    alt="icon"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </CCol>
                                <CCol lg={5} className='ms-auto mt-4'>
                                    <button type='button' className='upadte-redbtn'>Update</button>
                                </CCol>
                            </CRow>
                        </CForm>
                    </div>
                </CCol>
            </CRow>
        </>
    )
}

export default UpdatePassword;