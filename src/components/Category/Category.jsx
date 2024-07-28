import React from 'react'
import { CategoryList } from '../CategoryList/CategoryList'
import LeftBtn from "../../assets/Image/LeftBtn.svg"
import RightBtn from "../../assets/Image/RightBtn.svg"

export const Category = () => {
    return (
        <div className='w-full h-[573px] font-san'>
            <h1 className=' ml-[116px] leading-[50px] text-[38px] text-[#333333] font-medium'>Browser Our Category
                <br /><span className='leading-[50px] text-[38px] text-[#8BAC3E] font-medium'>Receipt</span></h1>
                <div className=''>
                    <CategoryList/>
                    <div className='flex mt-[46px] ml-[1050px]'>
                        <button className='flex w-[113px] h-[50px] rounded-[100px] bg-[#8BAC3E] '>
                            <img className='mt-[9px] ml-[13px] ' src={LeftBtn} alt="Btn Image" />
                            <span className='mt-[12px] font-medium text-[16px] text-[#FFFFFF] font-san ml-[7px] '>PREV</span>
                        </button>
                        <button className='flex  w-[113px] h-[50px] rounded-[100px] bg-[#8BAC3E] ml-[13px]'>
                        <span className='mt-[12px] ml-[17px] font-medium text-[16px] text-[#FFFFFF] font-san '>NEXT</span>
                            <img className='mt-[9px] ml-[12px] ' src={RightBtn} alt=" Btn Image" />
                        </button>
                    </div>
                </div>
        </div>
    )
}
