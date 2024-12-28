import React from 'react';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import { CCol, CForm, CFormLabel, CFormSwitch, CFormText, CRow } from '@coreui/react';

function SettingsNotification() {
    return (
        <>
            <CRow>
                <CCol lg={7}>
                    <div className='common-card'>
                        <h2>Notifications </h2>
                        <CForm>
                            <CRow className='mt-4'>
                                <CCol lg={8} xs={8}>
                                    <CFormLabel htmlFor='chatInput' className='d-block mb-0'>Chat notification</CFormLabel>
                                    <CFormText as="span" id="">
                                        Receive push notification for new messages.
                                    </CFormText>
                                </CCol>
                                <CCol lg={4} xs={4}>
                                    <div className='w-100 d-flex justify-content-end'>
                                        <CFormSwitch id="chatInput"/>
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow className='mt-4'>
                                <CCol lg={8} xs={8}>
                                    <CFormLabel htmlFor='subscriberInput' className='d-block mb-0'>Subscriber Notification</CFormLabel>
                                    <CFormText as="span" id="">
                                        Receive push notification for new messages.
                                    </CFormText>
                                </CCol>
                                <CCol lg={4} xs={4}>
                                    <div className='w-100 d-flex justify-content-end'>
                                        <CFormSwitch id="subscriberInput"/>
                                    </div>
                                </CCol>
                            </CRow>
                            <CRow className='mt-4'>
                                <CCol lg={8} xs={8}>
                                    <CFormLabel htmlFor='commentInput' className='d-block mb-0'>New Comments</CFormLabel>
                                    <CFormText as="span" id="">
                                        Receive push notification for new messages.
                                    </CFormText>
                                </CCol>
                                <CCol lg={4} xs={4}>
                                    <div className='w-100 d-flex justify-content-end'>
                                        <CFormSwitch id="commentInput" defaultChecked/>
                                    </div>
                                </CCol>
                            </CRow>
                        </CForm>
                    </div>
                </CCol>
            </CRow>
        </>
    )
}

export default SettingsNotification;