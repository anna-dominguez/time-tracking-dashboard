import React from 'react'
// import Image from 'next/image'

import ProfilePicture from '../../public/images/image-jeremy.png'

export default function Header() {
  return (
    <header className="bg-cardBackground radius row-span-2 lg:grid lg:grid-rows-3">
      <div className="profile bg-[#5747EA] radius py-6 gap-5 md:gap-8 row-span-2">
        <img
          className=" w-16 h-15 md:w-[78px] md:h-[78px] border-[3px] border-white rounded-full"
          src="/images/image-jeremy.png"
          alt="User profile picture"
        />
        <div className="profile-info">
          <p className="text-lila text-[15px] font-normal">Report for</p>
          <h1 className="font-light text-2xl md:text-[40px]">
            Jeremy Robinson
          </h1>
        </div>
      </div>
      <div className="grid grid-flow-col lg:grid-flow-row justify-items-center md:justify-items-start md:gap-5 md:pl-8 py-6 text-darkLila">
        <p className="hover:text-white  cursor-pointer">Daily</p>
        <p className="text-white  cursor-pointer">Weekly</p>
        <p className="hover:text-white  cursor-pointer">Monthly</p>
      </div>
    </header>
  )
}
