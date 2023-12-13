'use client'
import React from 'react'
import { useGlobalContext } from '@/Context/store'
import Link from 'next/link'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {

  const { mode } = useGlobalContext()
  const Links = [
    {
      id : '1',
      link : "https://www.instagram.com/cosmos_mediatech_qarshi/?hl=en",
      class : "mr-5 z-50",
      icon : <InstagramIcon/>,
      tooltip : "Instagram"
    },
    {
      id : '2',
      link : "https://t.me/maishiy_texnika_qarshi",
      class : "mr-5 z-50",
      icon : <TelegramIcon/>,
      tooltip : "Telegram"
    },
    {
      id : '3',
      link : "https://yandex.uz/maps/10331/karshi/?ll=65.788213%2C38.850907&mode=search&poi%5Bpoint%5D=65.788143%2C38.850977&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D62366332579&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJnZ53Y0Fh0z8R98lRgCiYwT8iBgABAgMEBSgKOABA21BIAWI7cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9zZXJwX2Zvcm11bGE9MC42MDpsM19kYzM0NjYyOF9leHBiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuNjA6bDNfZGMzNDY2MjhfZXhwYilyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2RjMzI4NDA0X2V4cGI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Qb3N0ZmlsdGVyL0lycmVsVGhyZXNob2xkPTAuNTVqAnV6nQHNzEw9oAEAqAEAvQFFV5Mw6gEA8gEA%2BAEAggIPcWFyc2hpIDE0bWFrdGFiigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=65.788213%2C38.850907&sspn=0.000924%2C0.000531&text=qarshi%2014maktab&z=19.31",
      class : "z-50",
      icon : <LocationOnIcon/>,
      tooltip : "Location"
    }
  ]

  return (
    <div className={`w-full flex justify-center items-center py-5 ${mode ? 'bg-light text-black' : 'bg-dark text-white'}`}>
        <div className='w-[90%] flex justify-between sm:flex-col sm:items-center'>
          <div className='w-max flex sm:mb-3'>
            <h2 className='text-xl uppercase mr-5'>cosmos</h2>
            <span className='w-[1px] h-7 bg-gray-900 mr-5'></span>
            <h4>© 2023</h4>
          </div>
          <div className='flex'>
            {
              Links.map(item => (
                <div className='tooltip' key={item.id}>
                  <Link href={item.link} className={item.class} target='_blank'>{item.icon}</Link>
                  <div className={`tooltipText z-10  ${mode ? 'bg-black text-white before:border-black' : 'bg-white text-black before:border-white'}`}>{item.tooltip}</div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Footer