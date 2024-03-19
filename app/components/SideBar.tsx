'use client'
import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { navbarList } from '../data/data';

const SideBar = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <nav className={`bg-[#1f2a51] text-white fixed sm:relative z-10 ${open ? 'w-auto' : 'w-0 '} min-h-screen`}>
            <section className='overflow-hidden'>
                <header className='p-4 gap-2 flex items-center mt-auto '>
                    <MdPerson className='text-2xl' />
                    <p className=''>Hello, User</p>
                    <FaBell className='ml-auto' />
                </header>
                <ul className='border-t-2 pt-3'>
                    {navbarList?.map(el => (
                        <li className='flex items-center gap-3 py-3 px-4 select-none hover:bg-[#050e2e] whitespace-nowrap' key={el.title}>
                            <span className='w-4'>{el.icon ?? ''}</span>
                            <span>{el.title}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <div className='absolute top-[50%] -translate-y-[50%] -right-7 bg-[#1f2a51] h-24 w-8 grid place-items-center cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <FaArrowLeft /> : <FaArrowRight />}
            </div>
        </nav>
    )
}

export default SideBar