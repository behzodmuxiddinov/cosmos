'use client'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '@/Context/store'
import { useTranslations } from 'next-intl'
import { Product } from '../../components' 
import team from '../../server/team.json'
import { ProductType }  from '../../interfaces'
import SearchIcon from '@mui/icons-material/Search';
import { shuffleArray } from '@/shuffleArray'
import Member from '@/components/Member'


export default  function Home() {
  const t = useTranslations('Index');
  let { mode, products } = useGlobalContext()
  const [filter, setFilter] = useState('')
  const [filterby, setFilterby] = useState('')
  const [count, setCount] = useState(8)
  const [filterBtns, setFilterBtns] = useState([
    {
      id : "1",
      name : t("all"),
      value : "all",
      active : true
    },
    {
      id : "2",
      name : t("tv"),
      value : "tv",
      active : false
    },
    {
      id : "3",
      name : t("range"),
      value : "range",
      active : false
    },
    {
      id : "4",
      name : t("air"),
      value : "air",
      active : false
    },
    {
      id : "5",
      name : t("smartphone"),
      value : "smartphone",
      active : false
    },
    {
      id : "6",
      name : t("wash"),
      value : "wash",
      active : false
    }
  ])

  const changeFilter = ( e : any ) => {
    setFilterby(e.target.value)
    setFilterBtns(filterBtns.map(item => {
      if(e.target.value == item.value){
        return {...item, active : true}
      }
      return {...item, active: false}
    }))
  }

  useEffect(() => {
    products = shuffleArray(products)
  },[])
  

  return (
    <main className={`w-full min-h-screen flex flex-col items-center py-5 ${mode ? 'bg-white' : 'bg-darkblue text-white'}`}>
      <div className='w-[90%] md:[95%] flex justify-start sm:justify-center'>
        <div className='w-[50%] md:w-[60%] sm:w-[70%] relative'>
          <input 
            type="text" 
            value={filter} 
            className={`w-full px-7 py-2 border-[1px] rounded-md text-black ${mode ? 'border-gray-500' : ''}`} 
            placeholder={t("search")}
            onChange={(e:any) => setFilter(e.target.value)}
          />
          <SearchIcon className='w-4 h-4 absolute z-10 left-1 top-2 text-black'/>
        </div>
      </div>
      <div className='w-[90%] md:[95%] flex mt-5 md:hidden'>
        {
          filterBtns.map(item => (
            <button 
              key={item.name}
              value={item.value} 
              onClick={changeFilter}
              className={`p-1 border-b-[2px] mr-4 text-lg hover:scale-105 ${item.active ? 'border-purple-700' : 'border-transparent animated'}`}>
                {item.name}
            </button>
          ))
        }
      </div>
      <div className='w-[90%] md:[95%] hidden md:flex md:justify-start sm:justify-center my-5'>
        <select name="select" id="selectfilter" onChange={changeFilter} className='text-black p-1 outline-none font-semibold text-lg w-1/3 sm:w-2/3 rounded-sm'>
          {
            filterBtns.map(item => (
              <option value={item.value} key={item.name}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-6 justify-items-center py-9">
        {
          products.filter(item => {
            if(filter){
              return item.category.toLowerCase().includes(filter.toLowerCase()) || item.comp.toLowerCase().includes(filter.toLowerCase())
            }
            return item
          })
          .filter(item => {
            switch(filterby){
              case 'all':
                return item
              case `${filterby}`:
                return item.category.toLowerCase().includes(filterby) || item.comp.toLowerCase().includes(filterby)
            }
          })
          .slice(0,count)
          .map(product => {
            return <Product key={product.id} product={product}/>
          })
        }
      </div>
      {count < products.length && 
        <button 
          onClick={(e) => {
            setCount(count+4)}
          }
          className={`border-[2px] p-2 text-md font-semibold rounded-sm ${mode ? 'border-gray-500 hover:bg-black hover:text-white' : 'boder-white text-white hover:bg-white hover:text-black'}`}
          >
            {t("more")}
        </button>}
        <h2 className='text-2xl font-bold mt-8'>{t("team")}</h2>
        <div className="grid 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-6 justify-items-center py-9">
        {
          team
          .map(member => {
            return <Member key={member.id} member={member}/>
          })
        }
      </div>
    </main>
  )
}
