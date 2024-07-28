import React from 'react'
import HeaderLogo from "../../assets/Image/header-logo.svg"
import HeaderItem from '../HeaderItem/HeaderItem'
export const Header = () => {
  return (
    <div className='w-full h-[96px] flex'>
      <img className='w[207px] h-[50px] ml-[116px] mt-[19px]' src={HeaderLogo} alt="Header Logo" />
      <ul className='w-[420px] h[23px] ml-[163.5px] mt-[37px] flex'>
        <HeaderItem title={"Home"} />
        <HeaderItem title={"About"} />
        <HeaderItem title={"Promotions"} />
        <HeaderItem title={"Blogs"} />
        <HeaderItem title={"Contact Us"} />
      </ul>
      <div className='w-[215px] h-[42px] mt-[27px] ml-[173.5px]'>
          <a className='w-[44px] h-[22px] pt-[10px] font-medium text-sm leading-normal text-[#333333]' href="/">Masuk</a>
          <button className='w-[147px] h-[42px] ml-[24px] rounded-[100px] bg-[#8BAC3E] font-medium text-sm leading-normal text-[#FFFFFF]'>Daftar Sekarang</button>
      </div>
    </div>
  )
}
