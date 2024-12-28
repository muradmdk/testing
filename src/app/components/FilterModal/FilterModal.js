import React from 'react';
import { CModal, CModalHeader, CModalBody, CButton, CCol, CRow, CFormSelect } from '@coreui/react';
import { Formik, Form, Field } from 'formik';
import "@/app/styles/filtermodal/filtermodal.css"

const FilterModal = ({ visible, onClose }) => {
    return (
        <CModal size="xl" visible={visible} onClose={onClose} alignment="center" className="filter-modal">

            <CModalBody>
                <Formik
                    initialValues={{
                        genreTag: '',
                        mixtape: '',
                        song: '',
                        album: '',
                        subscriber: '',
                        releaseYear: '',
                        artistLocation: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        onClose();
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-0">
                                <div className="mb-3 select-input-wrap">
                                    <Field name="genreTag" as={CFormSelect} className="custom-select-box">
                                        <option value="">Genre Tag</option>
                                        <option value="pop">Pop</option>
                                        <option value="rock">Rock</option>
                                        <option value="jazz">Jazz</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="mixtape" as={CFormSelect} className="form-select">
                                        <option value="">Mixtape</option>
                                        <option value="mixtape1">Mixtape 1</option>
                                        <option value="mixtape2">Mixtape 2</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="song" as={CFormSelect} className="form-select">
                                        <option value="">Song</option>
                                        <option value="song1">Song 1</option>
                                        <option value="song2">Song 2</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="album" as={CFormSelect} className="form-select">
                                        <option value="">Album</option>
                                        <option value="album1">Album 1</option>
                                        <option value="album2">Album 2</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="subscriber" as={CFormSelect} className="form-select">
                                        <option value="">Subscriber</option>
                                        <option value="sub1">Subscriber 1</option>
                                        <option value="sub2">Subscriber 2</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="releaseYear" as={CFormSelect} className="form-select">
                                        <option value="">Release Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                    </Field>
                                </div>
                                <div className="mb-3 select-input-wrap">
                                    <Field name="artistLocation" as={CFormSelect} className="form-select">
                                        <option value="">Artist Location</option>
                                        <option value="newyork">New York</option>
                                        <option value="la">Los Angeles</option>
                                    </Field>
                                </div>
                            </div>
                            <CRow className="justify-content-end gx-2">
                                <CCol xs={6} md={4} lg={2} className="mt-3">
                                    <button type="button" className="w-100 filterBtn filterBtn-clear" onClick={onClose}>
                                        Clear
                                    </button>
                                </CCol>
                                <CCol xs={6} md={4} lg={2} className="mt-3">
                                    <button type="submit" className="w-100 filterBtn filterBtn-result">
                                        Shoes 356 items
                                    </button>
                                </CCol>
                            </CRow>
                        </Form>
                    )}
                </Formik>
            </CModalBody>
        </CModal>
    );
};

export default FilterModal;
