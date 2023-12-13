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
        <div className='min-h-[100px] break-all w-[95%]'>
          <h3 className='w-full text-center text-purple-800 text-md font-semibold'>
            {product.name}
          </h3>
          <div className='w-full flex flex-wrap text-lg font-semibold'>
            <h3 className='w-full flex flex-wrap'>
              <span className='mr-1'>{product.comp}</span>
              <span className='mr-1'>{product.name}</span>
              {/* <span className='mr-1'>{product.type}</span> */}
              {product.category == 'tv' ? 'tv' : ''}
              {product.category == 'range' ? `${t("combined")} ${t('range')}` : ''}
              {product.category == 'air conditioning' ? `${t('air')}` : ''}
              {product.category == 'smartphone' ? `${t('smartphone')}` : ''}
              {product.automatic == 'automatic' ? `${t('automat')} ${t('wash')}` : ''}
              {product.automatic == 'semiautomatic' ? `${t('semiautomat')}` : ''}
            </h3>
          </div>
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