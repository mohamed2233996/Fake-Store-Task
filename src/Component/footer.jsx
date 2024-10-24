import React from 'react';

const Footer = () => {
    return (
        <div className='flex items-center flex-col py-8 bg-base-300'>
            <h2 className='text-2xl font-semibold text-white'>
                &copy; Elevate Task by
                <a href='https://portfilio-next.vercel.app/' className='text-white hover:text-base-600'>
                    Mohamed Gamel
                </a>
            </h2>
            <p>2024 Mohamed Gamel. All rights reserved.</p>
        </div>
    );
}

export default Footer;
