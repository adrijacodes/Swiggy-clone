import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoHelp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
function Header() {
    const [toggle,setToggle]=useState(false);
    const showSideMenu =() =>{
        
        setToggle(true);
    }
    const hideSideMenu =() =>{
        setToggle(false);
    }
    const links = [{
        icon:<ImSearch />,
        name:"Search"
    },
    {
        icon:<CiDiscount1 />,
        name:"Offers",
        sup:"new"
    },
    {
        icon:<IoHelp />,
        name:"Help"  
    },
    {
        icon:<FaRegUserCircle />,
        name:"Sign In "  
    },
    {
        icon:<HiOutlineShoppingCart />,
        name:"Cart"  
    }

    ]
  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500'onClick={hideSideMenu}style={{
    opacity: toggle ? 1:0,
    visibility: toggle ? "visible":"hidden"
    }}>
        <div onClick={(e) =>{
            e.stopPropagation();
        }}className='w-[500px] bg-white h-full absolute duration-[400ms]'
        style={{
            left:toggle ? '0%':'-100%'
        }}>

        </div>
    </div>
    <header className='p-[15px] shadow-xl text-gray-800'>
<div className='max-w-[1200px] mx-auto flex items-center'>
    <div className='w-[100px] '>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" className='w-full' alt="" />
    </div>
    <div className=''>
    <span className='font-bold border-b-[3px] border-[black]'>Danesh Sheikh Lane</span> Howrah, India 
    <RxCaretDown   fontSize={25} className=' font-bold inline text-[0.9rem] text-orange-500 cursor-pointer' onClick={showSideMenu} />
    </div>
    <nav className='flex list-none gap-10 ml-auto  text-[18px] font-semibold cursor-pointer'>
        {
            links.map(
                (links,index)=>{
                   return <li key={index} className='flex items-center gap-2 hover:text-orange-500'>
                    {links.icon}{links.name} <sup>{links.sup}</sup></li>
                }
            )
        }
        
    </nav>
</div>
    </header>
    </>
  )
}

export default Header
