import React from 'react'
import CupCake from "../../assets/Image/cupcake.svg"
import Pizza from "../../assets/Image/pizza.svg"
import Kebab from "../../assets/Image/kebab.svg"
import Salmon from "../../assets/Image/salmon.svg"
import Doughnut from "../../assets/Image/doughnut.svg"


export const CategoryList = () => {
    const categories = [
        {
            id: 1,
            img: CupCake,
            title: "Cupcake",
            count: "22 Items",
            bg: "#F0FEEB",
        },
        {
            id: 2,
            img: Pizza,
            title: "Pizza",
            count: "25 Items",
            bg: "#93c5fd",
        },
        {
            id: 3,
            img: Kebab,
            title: "Kebab",
            count: "12 Items",
            bg: "#EAEEFA",

        },
        {
            id: 4,
            img: Salmon,
            title: "Salmon",
            count: "22 Items",
            bg: "#F9EEF3",

        },
        {
            id: 5,
            img: Doughnut,
            title: "Doughnut",
            count: "11 Items",
            bg: "#F3F7D9"
        }
    ];

    return (
        <ul className='flex justify-between w-[1200px] mx-auto mt-10'>
            {categories.map((item, index) => (
                <li style={{backgroundColor:item.bg}} className={`w-[230px] py-[30px] text-center`} key={index}>
                    <img className='mx-auto mb-4' src={item.img} alt="Category Image" width={47} height={52} />
                    <h2 className='mb-1 text-[#333333] text-[16px font-medium]'>{item.title}</h2>
                    <p className='text-[#333333] font-normal text-[14px] mt-[4px]'>{item.count}</p>
                </li>
            ))}
        </ul>
    )
}
