'use client'
import React from 'react'
import { useGlobalContext } from '@/Context/store'
import Link from 'next/link'
import 'animate.css';

const Menu = () => {

    const { mode, links, menu, setMenu } = useGlobalContext()

  return (
    <div className={`w-full min-h-screen fixed z-50 ${menu ? 'flex animate__animated animate__fadeInLeft' : 'hidden animate__animated animate__fadeOutLeft'}`}>
        <div className={`w-[80%] p-4 ${mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <ul className='flex flex-col'>
                {
                    links.map(item => (
                        <li key={item.id} className='mr-2 p-2 mb-2 font-semibold border-b-[2px] border-transparent hover:border-white' onClick={() => setMenu(false)}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='w-1/2 bg-transparent' onClick={() => setMenu(!menu)}></div>
    </div>
  )
}

export default Menu