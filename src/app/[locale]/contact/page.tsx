'use client'
import React from 'react'
import { useGlobalContext } from '@/Context/store'
import { useTranslations } from 'next-intl'
import { useForm } from "react-hook-form"
import InputMask from 'react-input-mask';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { Data } from '@/interfaces'

const page = () => {

  const { mode } = useGlobalContext()
  const t = useTranslations("Index")

  type Inputs = {
    name : string,
    number : string,
    message : string
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const submitHandler = (data:Data) => {
    console.log(data),
    reset()
  }

  return (
    <div className={`flex w-full justify-center items-center min-h-screen p-5 md:px-0 ${mode ? 'bg-white text-black' : 'bg-darkblue'}`}>
      <div className={`w-[70%] md:w-[90%] px-8 sm:px-2 min-h-[500px] sm:min-h-[400px] rounded-md flex justify-between items-center ${mode ? 'bg-light' : 'bg-dark'}`}>
        <form action="" onSubmit={handleSubmit(submitHandler)} className='w-[60%] md:w-full min-h-[350px]  flex flex-col p-1 justify-between'>
          <input
            type="text"
            placeholder={t("entername")} 
            id="name"
            {...register('name', {
              required : {
                value : true,
                message : t("required")
              }
            })}
          />
          <p className='text-red'>{errors.name?.message}</p>
          <InputMask mask='+999(99)999-99-99' type="text" placeholder={t("enternum")} id='number'
            {...register('number', {
              required : {
                value : true,
                message : t("invalid")
              }
            })}
          />
          <p className='text-red'>{errors.number?.message}</p>
          <textarea id='message' placeholder={t("suggestion")}
            className='rounded-md py-[6px] px-[4px]'
           rows={6} cols={50}
            {...register('message', {
              required : {
                value : true,
                message : t("required")
              }
            })}
           />
           <p className='text-red'>{errors.message?.message}</p>
          <button className={`w-full font-semibold text-lg text-center p-2 rounded-md ${mode ? 'bg-white text-black' : 'bg-darkblue text-white'}`} type='submit'>{t("send")}</button>
        </form>
        <MarkEmailReadIcon className='md:hidden text-blue-700 icon' sx={{ fontSize: 300 }}/>
      </div>
    </div>
  )
}

export default page