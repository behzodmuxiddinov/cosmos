'use client'
import React from 'react'
import { useGlobalContext } from '@/Context/store'
import Link from 'next/link'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const { mode } = useGlobalContext()

  return (
    <div className={`w-full flex justify-center items-center py-5 ${mode ? 'bg-light text-black' : 'bg-dark text-white'}`}>
        <div className='w-[90%] flex justify-between sm:flex-col sm:items-center'>
          <div className='w-max flex sm:mb-3'>
            <h2 className='text-xl uppercase mr-5'>cosmos</h2>
            <span className='w-[1px] h-7 bg-gray-900 mr-5'></span>
            <h4>© 2023</h4>
          </div>
          <div className='flex'>
            <Link href='https://www.instagram.com/cosmos_mediatech_qarshi/?hl=en' target='_blank' className='mr-5'><InstagramIcon/></Link>
            <Link href='https://t.me/maishiy_texnika_qarshi' target='_blank'><TelegramIcon/></Link>
          </div>
        </div>
    </div>
  )
}

export default Footer