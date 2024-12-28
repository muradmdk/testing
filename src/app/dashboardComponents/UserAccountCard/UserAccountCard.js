import Image from 'next/image';
import React from 'react';
import '@/app/styles/dashboard/accountManagement/accountManagement.css';
import Link from 'next/link';

function UserAccountCard(props) {
    return (
        <>
            <div className='user-account-card d-flex'>
                <div className='user-img-wrapper'>
                    <Image src={props.imgSrc} width={78} height={80} alt='profile'/>
                </div>
                <div className='acount-details ps-2'>
                    <p className='mb-0'>{props.name}</p>
                    <span className='d-block mb-2'>{props.role}</span>
                    <span>{props.email}</span>
                </div>
                <div className='crud-controls'>
                    <Link href='#' className='d-block mb-3'>
                        <Image src={'/assets/dashboard/delete-user.svg'} width={23} height={23} alt='profile'/>
                    </Link>
                    <Link href='#' className='d-block'>
                        <Image src={'/assets/dashboard/edit-icon.svg'} width={23} height={23} alt='profile'/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserAccountCard;