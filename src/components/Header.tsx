'use client'
import React,{ useState, useEffect } from 'react'
import { useGlobalContext } from '@/Context/store'
import { LocaleSwitcher } from './index';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Header = () => {
    const { mode, setMode, links, menu, setMenu, lng } = useGlobalContext()
    const pathname = usePathname()

    const t  = useTranslations('Index')
    const changeMode = () => {
        localStorage.setItem("mode", `${!mode}`)
        setMode(!mode)
    }

    useEffect(() => {
       const modeStatus = localStorage.getItem("mode")
       if(modeStatus == "true"){
        setMode(true)
       }else{
        setMode(false)
       }
    }, [])
    

    return (
        <div className={`w-full flex justify-center items-center md:px-4 sticky top-0 z-50 ${mode ? 'bg-light text-black' : 'bg-dark text-white'}`}>
            <div className='w-[90%] md:w-full sm:w-[95%] flex justify-between items-center'>
                <Link href={`/${lng}`} className='text-3xl font-semibold uppercase md:text-xl'>cosmos</Link>
                <div className='flex w-max p-2 items-center'>
                    <ul className='mr-4 sm:hidden'>
                        {
                            links.map(item => (
                                <Link href={item.path} key={item.id} className={`mr-2 p-2 font-semibold hover:scale-105 ${pathname == item.path ? 'border-b-[2px] border-purple-700' : 'border-transparent animated'}`}>{item.name}</Link>
                            ))
                        }
                    </ul>
                    <LocaleSwitcher/>
                    <div onClick={changeMode} className='cursor-pointer'>
                        {mode ? <LightModeIcon/> : <NightsStayIcon/>}
                    </div>
                    <div className='hidden ml-4 md:block' onClick={() => setMenu(!menu)}>
                        {menu ? <CloseIcon/> : <MenuIcon/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header