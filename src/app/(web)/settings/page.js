"use client";
import React from 'react';
import '@/app/styles/settings/settings.css';
import * as Yup from 'yup';
import SettingsForm from '@/app/components/Settings/SettingsForm';

function SettingsWeb() {
    const form1Inputs = [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
        { name: 'contact', label: 'Contact Number', type: 'number', placeholder: 'Enter your contact number' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
        { name: 'dob', label: 'Date of Birth', type: 'date' },
    ];
    const form1InitialValues = {
        name: '',
        contact: '',
        email: '',
        dob: '',
    };
    const form1ValidationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        contact: Yup.string().required('Contact number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        dob: Yup.date().required('Date of Birth is required'),
    });
    const form2Inputs = [
        { name: 'oldPassword', label: 'Old Password', type: 'password', placeholder: 'Enter old password' },
        { name: 'newPassword', label: 'New Password', type: 'password', placeholder: 'Enter new password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm new password' },
    ];

    // Initial values for Form 2
    const form2InitialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    // Validation schema for Form 2
    const form2ValidationSchema = Yup.object({
        oldPassword: Yup.string().required('Old password is required'),
        newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const handleSubmit = (values) => {
        console.log('Form submitted with values:', values);
    };

    return (
        <>

            {/* Form 1 */}
            <div className='settings-from-wrapper'>
                <h2 className='mb-4'>Information</h2>
                <SettingsForm
                    initialValues={form1InitialValues}
                    validationSchema={form1ValidationSchema}
                    onSubmit={handleSubmit}
                    inputs={form1Inputs}
                />
            </div>

            {/* Form 2 */}
            <div className='settings-from-wrapper mt-4'>
                <h2 className='mb-4'>Password</h2>
                <SettingsForm
                    initialValues={form2InitialValues}
                    validationSchema={form2ValidationSchema}
                    onSubmit={handleSubmit}
                    inputs={form2Inputs}
                />
            </div>


        </>
    )
}

export default SettingsWeb;