"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '@/app/styles/dashboard/edit-album/edit-album.css';
import "@/app/styles/dashboard/commonCard/commonCard.css";
import { CButton, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CRow } from '@coreui/react';

function EditAlbumDetails() {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            level: '',
            startDate: '',
            albumCode: '',
            endDate: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required'),
            level: Yup.string().required('Select a level'),
            startDate: Yup.date().required('Start date is required'),
            albumCode: Yup.string().required('Album code is required'),
            endDate: Yup.date().required('End date is required'),
        }),
        onSubmit: (values) => {
            console.log('Form data:', values);
        },
    });

    return (
        <>
            <div className='common-card'>
                <h2>Edit Your Album Details</h2>
                <CForm onSubmit={formik.handleSubmit}>
                    <CRow>
                        <CCol lg={12} className='mb-3'>
                            <div className='grey-input-wrapper'>
                                <CFormInput
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="error-text">{formik.errors.title}</div>
                                ) : null}
                            </div>
                        </CCol>
                        <CCol lg={12} className='mb-3'>
                            <div className='grey-input-wrapper'>
                                <CFormTextarea
                                    placeholder="Album Description"
                                    name="description"
                                    rows={3}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></CFormTextarea>
                                {formik.touched.description && formik.errors.description ? (
                                    <div className="error-text">{formik.errors.description}</div>
                                ) : null}
                            </div>
                        </CCol>
                        <CCol lg={6} className='mb-3'>
                            <div className='grey-input-wrapper'>
                                <CFormSelect
                                    name="level"
                                    value={formik.values.level}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="">Select Level</option>
                                    <option value="1">Level 1</option>
                                    <option value="2">Level 2</option>
                                    <option value="3">Level 3</option>
                                </CFormSelect>
                                {formik.touched.level && formik.errors.level ? (
                                    <div className="error-text">{formik.errors.level}</div>
                                ) : null}
                            </div>
                        </CCol>
                        <CCol lg={6} className='mb-3'>
                            <div className='grey-input-wrapper custom-date-input'>
                                <CFormInput
                                    type="date"
                                    name="startDate"
                                    value={formik.values.startDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.startDate && formik.errors.startDate ? (
                                <div className="error-text">{formik.errors.startDate}</div>
                            ) : null}
                        </CCol>
                        <CCol lg={6} className='mb-3'>
                            <div className='grey-input-wrapper'>
                                <CFormInput
                                    type="text"
                                    placeholder="ACAA89564"
                                    name="albumCode"
                                    value={formik.values.albumCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.albumCode && formik.errors.albumCode ? (
                                    <div className="error-text">{formik.errors.albumCode}</div>
                                ) : null}
                            </div>
                        </CCol>
                        <CCol lg={6} className='mb-3'>
                            <div className='grey-input-wrapper custom-date-input'>
                                <CFormInput
                                    type="date"
                                    name="endDate"
                                    value={formik.values.endDate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.endDate && formik.errors.endDate ? (
                                <div className="error-text">{formik.errors.endDate}</div>
                            ) : null}
                        </CCol>
                    </CRow>
                    <CRow className='justify-content-center mt-4'>
                        <CCol lg={6}>
                            <CButton type="submit" className='theme-primary-btn w-100' style={{ padding: '11px 0px' }}>
                                Update Album
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </div>
        </>
    );
}

export default EditAlbumDetails;
