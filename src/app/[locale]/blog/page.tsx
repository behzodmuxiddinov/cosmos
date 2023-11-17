'use client'
import React from 'react'
import { useGlobalContext } from '@/Context/store'
import { useTranslations } from 'next-intl'

const page = () => {

  const { mode } = useGlobalContext()
  const t = useTranslations("Index")

  return (
    <div className={`flex flex-col w-full items-center min-h-screen p-5 ${mode ? 'bg-white text-black' : 'bg-darkblue text-white'}`}>
      <h2 className='font-bold text-xl'>{t("activities")}</h2>
      <div className='w-[80%] flex flex-col items-center mt-5'>
        <video className='w-3/4' src={'cosmos1.mp4'} controls></video>
        <video className='w-3/4 mt-3' src={'cosmos2.mp4'} controls></video>
      </div>
    </div>
  )
}

export default page