import React from 'react';
import LightLogo from '../../images/war-room-default.svg';
const WarRoomHeader = () => {
  return (
    <div className="bg-black w-screen">
      <div className="p-4">
        <img className="h-16 mx-auto" src={LightLogo} alt="" />
        <h2 className="text-center text-white">Webinar Trade</h2>
      </div>
    </div>
  );
};

export default WarRoomHeader;
