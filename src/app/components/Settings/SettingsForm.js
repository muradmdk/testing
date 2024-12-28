import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CCol, CRow } from '@coreui/react';
import Image from 'next/image';

function SettingsForm({ initialValues, validationSchema, onSubmit, inputs }) {

    const [isEditable, setIsEditable] = useState(false);
    const firstInputRef = useRef(null); // Ref to store the first input

    // Toggle edit mode
    const toggleEditMode = () => {
        setIsEditable(!isEditable);
    };

    // Focus the first input when editable mode is turned on
    useEffect(() => {
        if (isEditable && firstInputRef.current) {
            // firstInputRef.current.focus();
        }
    }, [isEditable]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={isEditable ? validationSchema : {}}
            onSubmit={onSubmit}
            validateOnChange={isEditable}
            validateOnBlur={isEditable}
        >
            {() => (
                <Form className='position-relative'>
                    <span className='edit-btn' onClick={toggleEditMode}>
                        <Image src={'/assets/edit-icon.svg'} width={22} height={22} alt='icon'/>
                    </span>
                    <CRow>
                        {inputs.map((input, index) => (
                            <CCol lg={6} className='mb-3' key={input.name}>
                                <div className="form-group">
                                    <label className='setting-inputs-label' htmlFor={input.name}>{input.label}</label>
                                    <Field
                                        type={input.type}
                                        name={input.name}
                                        id={input.name}
                                        className="form-control"
                                        placeholder={input.placeholder}
                                        readOnly={!isEditable}
                                        innerRef={index === 0 ? firstInputRef : null}
                                    />
                                    <ErrorMessage
                                        name={input.name}
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                            </CCol>
                        ))}
                    </CRow>
                    <CRow className='justify-content-end'>
                        <CCol lg={5}>
                            <button
                                type="submit"
                                className="w-100 theme-primary-btn fs-16 fw-400 lh-19 font-lato mt-3 submit-btn"
                                disabled={!isEditable}
                            >
                                Update
                            </button>
                        </CCol>
                    </CRow>
                </Form>
            )}
        </Formik>
    );
}

export default SettingsForm;
