import React, {FC} from 'react'
import { MemberType } from '@/interfaces'
import { useGlobalContext } from '@/Context/store'
import { useTranslations } from 'next-intl'

const Member:FC<{member : MemberType}> = ({ member  }) => {

    const { mode } = useGlobalContext()
    const t = useTranslations("Index") 

  return (
    <div className={`p-2 w-[300px] flex flex-col items-center justify-between border-2 rounded-md break-words ${mode ? 'border-gray-500' : 'border-white'}`}>
        <img src={member.img} alt={member.name} className='w-full h-[200px] object-cover object-center'/>
        <h3 className='my-2 text-lg font-semibold text-purple-700'>
            {member.position == 'director' && `${t("director")}` }
            {member.position == 'vice' && `${t("vice")}` }
            {member.position == 'manager' && `${t("manager")}` }
            {member.position == 'credit' && `${t("credit")}` }
        </h3>
        <h2 className='text-xl font-bold'>{member.name}</h2>
    </div>
  )
}

export default Member