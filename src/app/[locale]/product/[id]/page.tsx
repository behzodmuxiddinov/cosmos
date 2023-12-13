'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { ProductType } from '@/interfaces'
import { useGlobalContext } from '@/Context/store'
import { Props } from '@/components'
import data from '../../../../server/data.json'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CheckIcon from '@mui/icons-material/Check';

const page = () => {
    const {id}:any = useParams()
    const { mode } = useGlobalContext()
    const t = useTranslations("Index")
    const product:ProductType = data.filter(item => item.id == id)[0]
    
    return (
        <div className={`min-h-screen w-full flex justify-center ${mode ? '' : 'bg-darkblue text-white'}`}>
            <div className='flex flex-col w-[50%] md:w-[80%] sm:w-[90%] items-center py-11'>
                <img src={product.img} alt={product.name} className='w-full h-[250px] mb-11 object-contain object-center'></img>
                {
                    product.category == 'tv' 
                    ? <div className='flex w-full' >
                        <ul className='list-none w-full break-words space-y-2'>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("type")}</h3>
                                <h3 className='w-1/2'>{product.type}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("os")}</h3>
                                <h3 className='w-1/2'>{product.version}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>Wi-Fi,LAN</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("multi")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("parent")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                            {product.support && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("support")}</h3>
                                <h3 className='w-1/2'>{product.support}</h3>
                            </li>}
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("ddr")}</h3>
                                <h3 className='w-1/2'>{product.ddr}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("flash")}</h3>
                                <h3 className='w-1/2'>{product.flash}</h3>
                            </li>
                        </ul>
                      </div>
                    : ''
                }
                {
                    product.category == 'range' 
                    ? <div className='flex w-full'>
                        <ul className='list-none w-full break-words space-y-2'>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("type")}</h3>
                                <h3 className='w-1/2'>{t("combined")}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("hob")}</h3>
                                <h3 className='w-1/2'>{t("gas")}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("oven")}</h3>
                                <h3 className='w-1/2'>{t("electron")}</h3>
                            </li>
                            {product.surface && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("surface")}</h3>
                                <h3 className='w-1/2'>{t("gas")}</h3>
                            </li>}
                            {product.ovendoor && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("ovendoor")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>}
                            {product.electricignition && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("electricignition")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>}
                            {product.flamecontrol && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("flame")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>}
                            {product.multiflame && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("multiflame")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>}
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("power")}</h3>
                                <h3 className='w-1/2'>{product.power}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("timer")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                        </ul>
                      </div>
                    : ''
                }
                {
                    product.category == 'air conditioning' 
                    ? <div className='flex w-full'>
                        <ul className='list-none w-full break-words space-y-2'>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("low")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("functions")}</h3>
                                <h3 className='w-1/2'>{product.functions}</h3>
                            </li>
                            {product.area && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("area")}</h3>
                                <h3 className='w-1/2'>{t("upto")}</h3>
                            </li>}
                            {product.restart && <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("restart")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>}
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("freon")}</h3>
                                <h3 className='w-1/2'>{product.freon}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("cooling")}</h3>
                                <h3 className='w-1/2'>{product.cooling}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("heating")}</h3>
                                <h3 className='w-1/2'>{product.heating}</h3>
                            </li>
                        </ul>
                      </div>
                    : ''
                }
                {
                    product.category == 'smartphone' 
                    ? <div className='flex w-full'>
                        <ul className='list-none w-full break-words space-y-2'>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("cpu")}</h3>
                                <h3 className='w-1/2'>{product.cpu}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("system")}</h3>
                                <h3 className='w-1/2'>{product.os}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("screen")}</h3>
                                <h3 className='w-1/2'>{product.screen}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("resolution")}</h3>
                                <h3 className='w-1/2'>{product.resolution}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("displaytype")}</h3>
                                <h3 className='w-1/2'>{t("waterdrop")}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>RAM</h3>
                                <h3 className='w-1/2'>{product.ram}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>ROM</h3>
                                <h3 className='w-1/2'>{product.rom}</h3>
                            </li>
                        </ul>
                      </div>
                    : ''
                }
                {
                    product.category == 'washing machine' 
                    ? <div className='flex w-full'>
                        <ul className='list-none w-full break-words space-y-2'>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("motor")}</h3>
                                <h3 className='w-1/2'>{product.motor}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("displaytype")}</h3>
                                <h3 className='w-1/2'>{product.display}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("steam")}</h3>
                                <h3 className='w-1/2'><CheckIcon/></h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("load")}</h3>
                                <h3 className='w-1/2'>{product.maxload}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("powersupply")}</h3>
                                <h3 className='w-1/2'>{product.power}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("frequency")}</h3>
                                <h3 className='w-1/2'>{product.frequency}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("speed")}</h3>
                                <h3 className='w-1/2'>{product.maxspeed}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("noisewashing")}</h3>
                                <h3 className='w-1/2'>{product.noisewashing}</h3>
                            </li>
                            <li className={`w-full flex p-1 break-words border-b-2 ${mode ? 'border-gray-700' : 'border-white'}`}>
                                <h3 className='w-1/2'>{t("noisespin")}</h3>
                                <h3 className='w-1/2'>{product.noisespin}</h3>
                            </li>
                        </ul>
                      </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default page