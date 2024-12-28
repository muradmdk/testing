import React, { useState } from 'react';
import { CModal, CModalBody, CButton, CCol, CRow, CFormInput } from '@coreui/react';
import { Formik, Form, Field } from 'formik';
import '@/app/styles/dashboard/eventManagement/eventManagement.css';
import Image from 'next/image';

function CreateEventModal({ visible, onClose }) {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setFieldValue("coverImg", file); // Set file in Formik's values
            event.target.value = ""; // Clear the file input value after setting the preview
        }
    };

    return (
        <CModal 
            size="lg" 
            visible={visible} 
            onClose={onClose} 
            alignment="center" 
            className="create-event-modal"
        >
            <CModalBody className='mt-4'>
                <h2 className='mb-4'>Create Event</h2>
                <Formik
                    initialValues={{
                        name: '',
                        date: '',
                        song: '',
                        album: '',
                        subscriber: '',
                        releaseYear: '',
                        artistLocation: '',
                        coverImg: null
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        onClose();
                    }}
                >
                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit} className='event-form'>
                            <CRow>
                                <CCol lg={6} className='mb-3'>
                                    <Field
                                        name="name"
                                        type="text"
                                        placeholder="Event Name"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={6} className='mb-3'>
                                    <Field
                                        name="date"
                                        type="date"
                                        placeholder="Event Date"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={6} className='mb-3'>
                                    <Field
                                        name="artistName"
                                        type="text"
                                        placeholder="Artist Name"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={6} className='mb-3'>
                                    <Field
                                        name="hostName"
                                        type="text"
                                        placeholder="Host Name"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={12} className='mb-3'>
                                    <Field
                                        name="eventAddress"
                                        type="text"
                                        placeholder="Event Address"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={6} className='mb-3'>
                                    <Field
                                        name="ticketPrice"
                                        type="number"
                                        placeholder="Ticket Price"
                                        as={CFormInput}
                                    />
                                </CCol>
                                <CCol lg={6} className='mb-4'>
                                    <Field
                                        name="weblink"
                                        type="text"
                                        placeholder="Weblink"
                                        as={CFormInput}
                                    />
                                </CCol>

                                <CCol lg={12} className='mb-4'>
                                    <label htmlFor='coverImg' className='event-cover-label'>
                                        {imagePreview ? (
                                            <Image src={imagePreview} width={100} height={100} alt='cover preview' />
                                        ) : (
                                            <Image src='/assets/dashboard/upload-placeholder.svg' width={100} height={100} alt='placeholder' />
                                        )}
                                    </label>
                                    <input
                                        name="coverImg"
                                        type="file"
                                        id="coverImg"
                                        accept="image/*"
                                        hidden
                                        onChange={(event) => handleImageChange(event, setFieldValue)}
                                    />
                                </CCol>

                                <CCol lg={4} className='mx-auto'>
                                    <CButton type="submit" className='theme-primary-btn w-100 py-2'>
                                        Create Event
                                    </CButton>
                                </CCol>
                            </CRow>
                        </Form>
                    )}
                </Formik>
            </CModalBody>
        </CModal>
    );
}

export default CreateEventModal;
