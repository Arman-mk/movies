import React from 'react';
import profilePicture from '@assets/images/profile-picture.jpg';

const AppNavbarHeader = () => {
    return (
        <div className="flex items-center space-x-8 mb-6 mt-5 pl-3">
            <img className="w-14 h-14 rounded-full" src={profilePicture} alt="Jese Laos"/>
            <div className="text-white text-xl font-bold">
                <div>Daniel L.</div>
            </div>
        </div>
    );
};

export default AppNavbarHeader;