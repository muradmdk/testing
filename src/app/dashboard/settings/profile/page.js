import { CCol, CRow } from '@coreui/react';
import React from 'react';
import '@/app/styles/dashboard/profile/profile.css';
import ProfileUpdate from '@/app/dashboardComponents/Profile/ProfileUpdate';
import ProfileTabs from '@/app/dashboardComponents/Profile/ProfileTabs';

function SettingsProfile() {
    return (
        <>
            <CRow>
                <CCol lg={9}>
                    <div className='dashboard-profile-main-wrapper'>
                        <ProfileUpdate/>
                        <ProfileTabs/>
                    </div>
                </CCol>
            </CRow>
        </>
    )
}

export default SettingsProfile;