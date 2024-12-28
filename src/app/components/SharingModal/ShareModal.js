import React from 'react';
import { CModal, CModalHeader, CModalBody, CButton, CCol, CRow } from '@coreui/react';
import Image from 'next/image';
import copyIcon from '@/app/assets/sidebarIcons/copy.svg';
import whatsappIcon from '@/app/assets/sidebarIcons/whatsap.svg';
import emailIcon from '@/app/assets/sidebarIcons/email.svg';
import smsIcon from '@/app/assets/sidebarIcons/sharelink.svg';
import "../../styles/sharemodal/sharemodal.css"

const ShareModal = ({ visible, onClose }) => {
    return (
        <CModal visible={visible} onClose={onClose} alignment="center" className='share-modal'>
            <CModalHeader className="d-flex align-items-center justify-content-center mt-3">
                <h5 className='fs-28 fw-600 font-lato'>Share With Your Loved One’s</h5>
            </CModalHeader>
            <CModalBody>
                <CRow className="d-flex flex-column align-items-center">
                    <CCol xs={11} className="mb-3">
                        <CButton className="w-100 d-flex align-items-center p-2 bg-white share-card rounded-4">
                            <Image src={copyIcon} width={40} height={40} alt="Copy Link" className="me-3" />
                            <span className='fw-600 fs-16 font-lato'>Copy Link</span>
                        </CButton>
                    </CCol>
                    <CCol xs={11} className="mb-3">
                        <CButton className="w-100 d-flex align-items-center p-2 bg-white share-card rounded-4">
                            <Image src={whatsappIcon} width={40} height={40} alt="WhatsApp" className="me-3" />
                            <span className='fw-600 fs-16 font-lato'>Send WhatsApp</span>
                        </CButton>
                    </CCol>
                    <CCol xs={11} className="mb-3">
                        <CButton className="w-100 d-flex align-items-center p-2 bg-white share-card rounded-4">
                            <Image src={emailIcon} width={40} height={40} alt="Email" className="me-3" />
                            <span className='fw-600 fs-16 font-lato'>Send Via Email</span>
                        </CButton>
                    </CCol>
                    <CCol xs={11} className="mb-3">
                        <CButton className="w-100 d-flex align-items-center p-2 bg-white rounded-4 share-card">
                            <Image src={smsIcon} width={40} height={40} alt="SMS" className="me-3" />
                            <span className='fw-600 fs-16 font-lato'>Send Via SMS</span>
                        </CButton>
                    </CCol>
                </CRow>
            </CModalBody>
        </CModal>
    );
};

export default ShareModal;
