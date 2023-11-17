import React, { FC } from 'react'
import Image from 'next/image'
import { ProductType } from '@/interfaces'
import { useGlobalContext } from '@/Context/store'
import { useTranslations } from 'next-intl'
import Link  from 'next/link'

const Product:FC<{product : ProductType}> = ({ product }) => {

  const { mode, lng } = useGlobalContext()
  const t = useTranslations("Index")

  return (
    <Link href={`/${lng}/product/${product.id}`} className={`p-2 w-[300px] flex flex-col items-center justify-between border-2 rounded-md cursor-pointer break-words ${mode ? 'border-gray-500' : 'border-white'}`}>
        <img src={product.img} alt={product.name} className='w-full h-[200px] object-contain object-center'></img>
        <h3 className='w-full text-center text-purple-800 text-md font-semibold'>{product.category}</h3>
        <div className='flex text-lg text-center font-semibold break-words'>
          <h3 className='mr-1'>{product.comp}</h3>
          <h3 className='break-words'>{product.name}</h3>
          {product.type && <h3 className='ml-1 break-words'>{product.type}</h3>}
        </div>
        <div className='w-full flex justify-between'>
          <div className='flex items-center text-center'>
            <h3 className='font-semibold text-lg mr-1 text-start'>{t("color")}:</h3>
            <div className={`w-4 h-4 border-[1px] rounded-full bg-${product.color} ${mode ? 'border-black' : 'border-white'}`}></div>
          </div>
          {product.new && <h3 className='text-green-700 uppercase text-semibold'>new</h3>}
        </div>
    </Link>
  )
}

export default Product